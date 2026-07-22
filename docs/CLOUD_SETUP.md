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

The policies restrict every signed-in user to the row whose `user_id` matches their authenticated Supabase identity.

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

## Rollback

Clear the two values in `config.js` to return Wave to local beta mode. The dashboard continues working even if Supabase is unavailable.

## Current scope

This foundation stores one JSON workspace per user. It provides authentication, RLS isolation, manual import, load, and debounced saving. A later migration can normalize high-volume modules into separate tables when collaboration and reporting requirements justify it.
