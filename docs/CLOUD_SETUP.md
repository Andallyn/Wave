# Connect Wave to Supabase

Wave works in local beta mode without Supabase. Complete these steps when you want real email accounts and private cloud workspaces.

## 1. Create the free project

1. Sign in at [supabase.com](https://supabase.com/).
2. Create a new project and keep its database password in a password manager.
3. Wait for the project to finish provisioning.

## 2. Create the secured workspace table

1. Open **SQL Editor** in Supabase.
2. Copy the complete contents of [../supabase/schema.sql](../supabase/schema.sql).
3. Run the SQL once.
4. Confirm that **Row Level Security** is enabled for `workspace_states`.

The policies support both the original private user document and shared workspaces. Membership and role checks are enforced in Postgres for workspace documents, invitations, brand profiles, schedules, and notifications.

## 3. Configure authentication URLs

In **Authentication → URL Configuration**:

- Set **Site URL** to the production Wave URL.
- Add the production URL and active Vercel preview pattern as allowed redirect URLs.
- Keep email confirmation enabled for public testing.

## 4. Add the public project settings

In **Project Settings → API**, copy:

- Project URL
- Public anon/publishable key

Put those values into `config.js` using [../config.example.js](../config.example.js) as the shape.

The URL and anon key are public browser settings. Security comes from the database RLS policies. **Never use or commit the service-role key.**

## 5. Deploy and verify

1. Redeploy Wave.
2. Open **Settings → Account & cloud**.
3. Create an account.
4. Confirm the email if required.
5. Sign in.
6. Choose **Import this browser workspace**.
7. Make one change, reload on another browser, sign in, and confirm it appears.
8. Complete the guided workspace setup.
9. In **Settings → Members & roles**, invite a second test email and copy its invitation link.
10. Sign in with that exact invited email, open the link, and confirm the assigned role limits the available controls.
11. Create and run a schedule under **Schedules & notifications**, then confirm the new notification opens its destination.

## 6. Enable background schedules on Vercel

Add these server-only environment variables to the Vercel project and redeploy:

- `SUPABASE_SERVICE_ROLE_KEY` — copy the service-role key from Supabase; never place it in `config.js` or browser code.
- `CRON_SECRET` — create a long random secret. Vercel supplies it to the protected scheduler request.

The existing `SUPABASE_URL` is also required. `vercel.json` invokes `/api/run-schedules` every five minutes. The scheduler processes at most 100 due jobs per run, advances their next-run time, and creates private in-app notifications for workspace members. Confirm the exact cron frequency supported by your Vercel plan before public launch.

## Rollback

Clear the two values in `config.js` to return Wave to local beta mode. The dashboard continues working even if Supabase is unavailable.

## Current scope

This foundation stores one shared workspace document alongside normalized membership, invitation, brand, schedule, and notification records. Existing single-user `workspace_states` rows remain available as a compatibility fallback until a user completes shared workspace setup.
