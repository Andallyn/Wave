function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(body));
}

function nextRun(cadence, from = new Date()) {
  const next = new Date(from); next.setSeconds(0, 0);
  const time = String(cadence).match(/at (\d{2}):(\d{2})/i);
  if (time) next.setHours(Number(time[1]), Number(time[2]), 0, 0);
  next.setDate(next.getDate() + 1);
  if (/weekdays/i.test(cadence)) while ([0, 6].includes(next.getDay())) next.setDate(next.getDate() + 1);
  if (/mondays/i.test(cadence)) while (next.getDay() !== 1) next.setDate(next.getDate() + 1);
  if (/fridays/i.test(cadence)) while (next.getDay() !== 5) next.setDate(next.getDate() + 1);
  return next.toISOString();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed.' });
  const cronSecret = process.env.CRON_SECRET;
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!cronSecret || !supabaseUrl || !serviceRoleKey) return json(res, 503, { error: 'Background scheduling is not configured.' });
  if (req.headers.authorization !== `Bearer ${cronSecret}`) return json(res, 401, { error: 'Unauthorized.' });

  const headers = { Authorization: `Bearer ${serviceRoleKey}`, apikey: serviceRoleKey, 'Content-Type': 'application/json' };
  const now = new Date();
  try {
    const jobsResponse = await fetch(`${supabaseUrl}/rest/v1/scheduled_jobs?enabled=eq.true&next_run_at=lte.${encodeURIComponent(now.toISOString())}&select=id,workspace_id,name,workflow,cadence,notify_members`, { headers });
    if (!jobsResponse.ok) throw new Error(`Scheduled job query failed (${jobsResponse.status}).`);
    const jobs = await jobsResponse.json();
    let notificationsCreated = 0;

    for (const job of jobs.slice(0, 100)) {
      if (job.notify_members) {
        const membersResponse = await fetch(`${supabaseUrl}/rest/v1/workspace_members?workspace_id=eq.${job.workspace_id}&select=user_id`, { headers });
        if (!membersResponse.ok) throw new Error(`Workspace member query failed (${membersResponse.status}).`);
        const members = await membersResponse.json();
        if (members.length) {
          const notifications = members.map((member) => ({ workspace_id: job.workspace_id, user_id: member.user_id, title: `${job.workflow} completed`, detail: `${job.name} · scheduled background run`, destination: job.workflow === 'Daily briefing' ? 'Briefing' : job.workflow === 'Campaign report' ? 'Analytics' : 'Command Center', level: 'standard' }));
          const notificationResponse = await fetch(`${supabaseUrl}/rest/v1/notifications`, { method: 'POST', headers: { ...headers, Prefer: 'return=minimal' }, body: JSON.stringify(notifications) });
          if (!notificationResponse.ok) throw new Error(`Notification creation failed (${notificationResponse.status}).`);
          notificationsCreated += notifications.length;
        }
      }
      const updateResponse = await fetch(`${supabaseUrl}/rest/v1/scheduled_jobs?id=eq.${job.id}`, { method: 'PATCH', headers: { ...headers, Prefer: 'return=minimal' }, body: JSON.stringify({ last_run_at: now.toISOString(), next_run_at: nextRun(job.cadence, now) }) });
      if (!updateResponse.ok) throw new Error(`Scheduled job update failed (${updateResponse.status}).`);
    }
    return json(res, 200, { jobsRun: jobs.length, notificationsCreated, completedAt: now.toISOString() });
  } catch (error) {
    console.error('Wave scheduler error', error);
    return json(res, 500, { error: 'Background scheduling failed.' });
  }
};
