(() => {
  const config = window.WAVE_CONFIG || {};
  const configured = Boolean(config.supabaseUrl && config.supabaseAnonKey);
  let client = null;
  let session = null;
  let currentWorkspaceId = null;
  let saveTimer = null;
  let current = { mode: configured ? 'cloud' : 'local', configured, authenticated: false, email: '', message: configured ? 'Cloud configuration detected.' : 'Local beta mode' };

  const snapshot = () => ({ ...current });
  const requireClient = () => {
    if (!configured) throw new Error('Cloud sync is not configured yet.');
    if (!client) throw new Error('Cloud connection is still starting. Please try again.');
    return client;
  };
  const requireSession = () => {
    if (!session?.user) throw new Error('Sign in before saving a cloud workspace.');
    return session;
  };
  const setSession = (next) => {
    session = next || null;
    current = {
      mode: configured ? 'cloud' : 'local',
      configured,
      authenticated: Boolean(session?.user),
      email: session?.user?.email || '',
      message: session?.user ? 'Private cloud workspace connected.' : configured ? 'Sign in to connect your private workspace.' : 'Local beta mode'
    };
  };

  async function resolveWorkspace() {
    requireClient(); requireSession();
    const { data, error } = await client.from('workspace_members').select('workspace_id, role, workspaces(name, workspace_type)').eq('user_id', session.user.id).order('joined_at').limit(1).maybeSingle();
    if (error) {
      if (/workspace_members|schema cache/i.test(error.message || '')) return null;
      throw new Error(error.message);
    }
    currentWorkspaceId = data?.workspace_id || null;
    return data || null;
  }

  async function loadWorkspace() {
    requireClient(); requireSession();
    const membership = await resolveWorkspace();
    if (membership?.workspace_id) {
      const { data, error } = await client.from('workspace_documents').select('payload, updated_at').eq('workspace_id', membership.workspace_id).maybeSingle();
      if (error) throw new Error(error.message);
      const { data: cloudNotifications } = await client.from('notifications').select('id,title,detail,destination,level,read_at,created_at').eq('workspace_id', membership.workspace_id).order('created_at', { ascending: false }).limit(50);
      if (data?.payload && Object.keys(data.payload).length) return { ...data.payload, workspace: { ...(data.payload.workspace || {}), id: membership.workspace_id, name: membership.workspaces?.name || data.payload.workspace?.name, type: membership.workspaces?.workspace_type || data.payload.workspace?.type }, notifications: Array.isArray(cloudNotifications) && cloudNotifications.length ? cloudNotifications.map((item) => ({ id: item.id, title: item.title, detail: item.detail, page: item.destination, level: item.level, read: Boolean(item.read_at) })) : data.payload.notifications };
      return null;
    }
    const { data, error } = await client.from('workspace_states').select('payload, updated_at').eq('user_id', session.user.id).maybeSingle();
    if (error) throw new Error(error.message);
    return data?.payload || null;
  }

  async function saveWorkspace(workspace) {
    requireClient(); requireSession();
    const membership = currentWorkspaceId ? { workspace_id: currentWorkspaceId } : await resolveWorkspace();
    if (membership?.workspace_id) {
      const { error } = await client.from('workspace_documents').upsert({ workspace_id: membership.workspace_id, payload: workspace, updated_by: session.user.id, updated_at: new Date().toISOString() }, { onConflict: 'workspace_id' });
      if (error) throw new Error(error.message);
      await client.from('brand_profiles').upsert({ workspace_id: membership.workspace_id, profile: workspace.brandProfile || {}, updated_by: session.user.id, updated_at: new Date().toISOString() }, { onConflict: 'workspace_id' });
      if (Array.isArray(workspace.schedules) && workspace.schedules.length) {
        const jobs = workspace.schedules.map((schedule) => ({ workspace_id: membership.workspace_id, client_id: Number(schedule.id), name: schedule.name, workflow: schedule.workflow, cadence: schedule.cadence, next_run_at: nextRunFor(schedule.cadence), enabled: schedule.status === 'Active', notify_members: schedule.notify !== false, created_by: session.user.id }));
        const { error: scheduleError } = await client.from('scheduled_jobs').upsert(jobs, { onConflict: 'workspace_id,client_id' });
        if (scheduleError && !/scheduled_jobs|schema cache/i.test(scheduleError.message || '')) throw new Error(scheduleError.message);
      }
      current = { ...current, message: 'Shared workspace saved just now.' };
      return snapshot();
    }
    const { error } = await client.from('workspace_states').upsert({
      user_id: session.user.id,
      payload: workspace,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    if (error) throw new Error(error.message);
    current = { ...current, message: 'Cloud workspace saved just now.' };
    return snapshot();
  }

  function nextRunFor(cadence) {
    const next = new Date(); next.setSeconds(0, 0);
    const time = String(cadence).match(/at (\d{2}):(\d{2})/i); if (time) next.setHours(Number(time[1]), Number(time[2]), 0, 0);
    if (next <= new Date()) next.setDate(next.getDate() + 1);
    if (/weekdays/i.test(cadence)) while ([0, 6].includes(next.getDay())) next.setDate(next.getDate() + 1);
    if (/mondays/i.test(cadence)) while (next.getDay() !== 1) next.setDate(next.getDate() + 1);
    if (/fridays/i.test(cadence)) while (next.getDay() !== 5) next.setDate(next.getDate() + 1);
    return next.toISOString();
  }

  async function bootstrapWorkspace(name, workspaceType = 'Growth workspace') {
    requireClient(); requireSession();
    const { data, error } = await client.rpc('bootstrap_wave_workspace', { workspace_name: name, workspace_kind: workspaceType });
    if (error) throw new Error(error.message);
    currentWorkspaceId = data;
    return data;
  }

  async function createInvitation(email, role) {
    requireClient(); requireSession(); if (!currentWorkspaceId) await resolveWorkspace();
    if (!currentWorkspaceId) throw new Error('Create or join a shared workspace before inviting members.');
    const { data, error } = await client.from('workspace_invitations').insert({ workspace_id: currentWorkspaceId, email: email.toLowerCase(), role, invited_by: session.user.id }).select('id, email, role, status, invite_code, created_at').single();
    if (error) throw new Error(error.message);
    return { ...data, inviteUrl: `${window.location.origin}${window.location.pathname}?invite=${data.invite_code}` };
  }

  async function acceptInvitation(code) {
    requireClient(); requireSession();
    const { data, error } = await client.rpc('accept_wave_invitation', { code });
    if (error) throw new Error(error.message);
    currentWorkspaceId = data;
    return loadWorkspace();
  }

  async function markNotificationsRead(ids) {
    requireClient(); requireSession();
    const cloudIds = ids.filter((id) => typeof id === 'string' && /^[0-9a-f-]{36}$/i.test(id));
    if (!cloudIds.length) return;
    const { error } = await client.from('notifications').update({ read_at: new Date().toISOString() }).in('id', cloudIds).eq('user_id', session.user.id);
    if (error) throw new Error(error.message);
  }

  async function init() {
    if (!configured) return { status: snapshot(), remote: null };
    try {
      const module = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
      client = module.createClient(config.supabaseUrl, config.supabaseAnonKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      setSession(data.session);
      client.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
      const remote = session ? await loadWorkspace() : null;
      return { status: snapshot(), remote };
    } catch (error) {
      current = { mode: 'local', configured: true, authenticated: false, email: '', message: 'Cloud unavailable; local mode remains active.' };
      throw new Error(error.message || current.message);
    }
  }

  async function signIn(email, password) {
    requireClient();
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    setSession(data.session);
    const remote = await loadWorkspace();
    return { status: snapshot(), remote, message: remote ? 'Signed in and loaded your cloud workspace.' : 'Signed in. Import this browser workspace to create your cloud copy.' };
  }

  async function signUp(email, password) {
    requireClient();
    const { data, error } = await client.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
    setSession(data.session);
    return {
      status: snapshot(),
      remote: null,
      message: data.session ? 'Account created. You can now import this browser workspace.' : 'Account created. Check your email to confirm it, then sign in.'
    };
  }

  async function signOut() {
    if (client) {
      const { error } = await client.auth.signOut();
      if (error) throw new Error(error.message);
    }
    setSession(null);
    return snapshot();
  }

  function scheduleSave(workspace) {
    if (!current.authenticated) return;
    window.clearTimeout(saveTimer);
    const copy = JSON.parse(JSON.stringify(workspace));
    saveTimer = window.setTimeout(() => saveWorkspace(copy).catch((error) => console.warn('Wave cloud autosave failed.', error)), 900);
  }

  window.WaveCloud = { init, signIn, signUp, signOut, loadWorkspace, saveWorkspace, bootstrapWorkspace, createInvitation, acceptInvitation, markNotificationsRead, scheduleSave, status: snapshot, workspaceId: () => currentWorkspaceId, accessToken: () => session?.access_token || '' };
})();
