(() => {
  const config = window.WAVE_CONFIG || {};
  const configured = Boolean(config.supabaseUrl && config.supabaseAnonKey);
  let client = null;
  let session = null;
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

  async function loadWorkspace() {
    requireClient(); requireSession();
    const { data, error } = await client.from('workspace_states').select('payload, updated_at').eq('user_id', session.user.id).maybeSingle();
    if (error) throw new Error(error.message);
    return data?.payload || null;
  }

  async function saveWorkspace(workspace) {
    requireClient(); requireSession();
    const { error } = await client.from('workspace_states').upsert({
      user_id: session.user.id,
      payload: workspace,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    if (error) throw new Error(error.message);
    current = { ...current, message: 'Cloud workspace saved just now.' };
    return snapshot();
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

  window.WaveCloud = { init, signIn, signUp, signOut, loadWorkspace, saveWorkspace, scheduleSave, status: snapshot, accessToken: () => session?.access_token || '' };
})();