const requests = new Map();

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed.' });
  const openaiKey = process.env.OPENAI_API_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  if (!openaiKey || !supabaseUrl || !supabaseAnonKey) return json(res, 503, { error: 'AI generation is not configured.' });

  const authorization = req.headers.authorization || '';
  if (!authorization.startsWith('Bearer ') || authorization.length > 4096) return json(res, 401, { error: 'A valid Wave account session is required.' });
  const token = authorization.slice(7);
  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, { headers: { Authorization: `Bearer ${token}`, apikey: supabaseAnonKey } });
  if (!userResponse.ok) return json(res, 401, { error: 'Your Wave session is invalid or expired.' });
  const user = await userResponse.json();

  const now = Date.now(); const recent = (requests.get(user.id) || []).filter((time) => now - time < 60000);
  if (recent.length >= 6) return json(res, 429, { error: 'Generation limit reached. Try again in one minute.' });
  recent.push(now); requests.set(user.id, recent);

  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; }
  catch (error) { return json(res, 400, { error: 'Request body must be valid JSON.' }); }
  if (!body || body.task !== 'content_draft') return json(res, 400, { error: 'Unsupported generation task.' });
  const brand = body.brand || {}; const brief = body.brief || {};
  const input = JSON.stringify({ brand: { name: String(brand.name || '').slice(0, 100), voice: String(brand.voice || '').slice(0, 500), audience: String(brand.audience || '').slice(0, 500), promise: String(brand.promise || '').slice(0, 500), avoid: String(brand.avoid || '').slice(0, 500), terms: String(brand.terms || '').slice(0, 500) }, brief: { goal: String(brief.goal || '').slice(0, 300), audience: String(brief.audience || '').slice(0, 500), channel: String(brief.channel || '').slice(0, 100) } });

  try {
    const model = process.env.OPENAI_MODEL || 'gpt-5.6-luna';
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { Authorization: `Bearer ${openaiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        instructions: 'Create one original marketing content draft using only the supplied brand and brief. Avoid unsupported claims. Return the requested JSON only. The draft is advisory and must remain subject to human review.',
        input,
        reasoning: { effort: 'low' },
        max_output_tokens: 500,
        safety_identifier: user.id,
        text: { format: { type: 'json_schema', name: 'wave_content_draft', strict: true, schema: { type: 'object', additionalProperties: false, properties: { title: { type: 'string', maxLength: 120 }, channel: { type: 'string', enum: ['LinkedIn', 'X thread', 'Blog', 'Discord'] }, campaign: { type: 'string', maxLength: 80 }, copy: { type: 'string', maxLength: 1200 } }, required: ['title', 'channel', 'campaign', 'copy'] } } }
      })
    });
    const payload = await response.json();
    if (!response.ok) return json(res, response.status >= 500 ? 502 : 400, { error: 'The AI provider could not generate this draft.' });
    const draft = JSON.parse(payload.output_text || '{}');
    if (!draft.title || !draft.copy) return json(res, 502, { error: 'The AI provider returned an incomplete draft.' });
    return json(res, 200, { draft, model, reviewRequired: true });
  } catch (error) {
    console.error('Wave AI gateway error', error);
    return json(res, 502, { error: 'AI generation is temporarily unavailable.' });
  }
};
