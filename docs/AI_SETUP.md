# Configure Wave AI generation

Wave's AI gateway is disabled until cloud authentication and server environment variables are configured.

## Requirements

1. Complete [CLOUD_SETUP.md](CLOUD_SETUP.md).
2. Create an OpenAI API key.
3. In Vercel project settings, add:
   - `OPENAI_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - optional `OPENAI_MODEL` (defaults to `gpt-5.6-luna`)
4. Redeploy Wave.

Do not put `OPENAI_API_KEY` in `config.js`, GitHub, browser storage, or frontend code.

## Security behavior

The endpoint:

- accepts POST requests only
- requires a Supabase bearer session
- verifies the session directly with Supabase
- allows only the `content_draft` task
- truncates every supplied context field
- limits each authenticated user to six requests per minute per warm instance
- uses a strict JSON schema
- returns no OpenAI credentials or raw provider errors
- keeps every result in Draft status for human review

The in-memory rate limit is an initial abuse control. Before a large public launch, replace it with a durable distributed limiter and set OpenAI project budgets and alerts.

## Test

Sign in to Wave, open Content Studio, and generate a draft. Audit evidence should identify OpenAI and the configured model. Sign out and repeat; Wave should use the demo generator and record an AI fallback diagnostic.
