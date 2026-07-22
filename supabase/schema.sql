-- Wave private workspace foundation
-- Run this in the Supabase SQL editor for the project connected to Wave.

create table if not exists public.workspace_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.workspace_states enable row level security;

drop policy if exists "Users can read their own Wave workspace" on public.workspace_states;
create policy "Users can read their own Wave workspace"
on public.workspace_states for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own Wave workspace" on public.workspace_states;
create policy "Users can create their own Wave workspace"
on public.workspace_states for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own Wave workspace" on public.workspace_states;
create policy "Users can update their own Wave workspace"
on public.workspace_states for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

revoke all on table public.workspace_states from anon;
grant select, insert, update on table public.workspace_states to authenticated;
