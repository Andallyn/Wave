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

-- Shared workspace, invitations, brand, scheduling, and notifications foundation.
create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  workspace_type text not null default 'Growth workspace',
  owner_id uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('Owner', 'Manager', 'Reviewer', 'Viewer')),
  joined_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);
create index if not exists workspace_members_user_id_idx on public.workspace_members(user_id);

create table if not exists public.workspace_invitations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  email text not null check (char_length(email) between 3 and 320),
  role text not null check (role in ('Manager', 'Reviewer', 'Viewer')),
  invite_code uuid not null default gen_random_uuid() unique,
  invited_by uuid not null references auth.users(id) on delete cascade,
  status text not null default 'Pending' check (status in ('Pending', 'Accepted', 'Cancelled', 'Expired')),
  expires_at timestamptz not null default (now() + interval '7 days'),
  created_at timestamptz not null default now()
);
create index if not exists workspace_invitations_workspace_id_idx on public.workspace_invitations(workspace_id);
create unique index if not exists workspace_invitations_pending_email_idx on public.workspace_invitations(workspace_id, lower(email)) where status = 'Pending';

create table if not exists public.workspace_documents (
  workspace_id uuid primary key references public.workspaces(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

create table if not exists public.brand_profiles (
  workspace_id uuid primary key references public.workspaces(id) on delete cascade,
  profile jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

create table if not exists public.scheduled_jobs (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  client_id bigint not null,
  name text not null check (char_length(name) between 2 and 120),
  workflow text not null,
  cadence text not null,
  next_run_at timestamptz,
  enabled boolean not null default true,
  notify_members boolean not null default true,
  last_run_at timestamptz,
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);
create index if not exists scheduled_jobs_workspace_id_idx on public.scheduled_jobs(workspace_id);
create index if not exists scheduled_jobs_due_idx on public.scheduled_jobs(next_run_at) where enabled = true;
create unique index if not exists scheduled_jobs_workspace_client_idx on public.scheduled_jobs(workspace_id, client_id);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 160),
  detail text not null default '',
  destination text not null default 'Command Center',
  level text not null default 'standard' check (level in ('standard', 'urgent')),
  read_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists notifications_user_created_idx on public.notifications(user_id, created_at desc);
create index if not exists notifications_unread_idx on public.notifications(user_id, created_at desc) where read_at is null;

create or replace function public.is_workspace_member(target_workspace_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.workspace_members
    where workspace_id = target_workspace_id and user_id = (select auth.uid())
  );
$$;

create or replace function public.has_workspace_role(target_workspace_id uuid, allowed_roles text[])
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.workspace_members
    where workspace_id = target_workspace_id
      and user_id = (select auth.uid())
      and role = any(allowed_roles)
  );
$$;

create or replace function public.bootstrap_wave_workspace(workspace_name text, workspace_kind text default 'Growth workspace')
returns uuid language plpgsql security definer set search_path = '' as $$
declare new_workspace_id uuid;
begin
  if (select auth.uid()) is null then raise exception 'Authentication required'; end if;
  insert into public.workspaces(name, workspace_type, owner_id)
  values (left(trim(workspace_name), 100), left(trim(workspace_kind), 80), (select auth.uid()))
  returning id into new_workspace_id;
  insert into public.workspace_members(workspace_id, user_id, role) values (new_workspace_id, (select auth.uid()), 'Owner');
  insert into public.workspace_documents(workspace_id, updated_by) values (new_workspace_id, (select auth.uid()));
  insert into public.brand_profiles(workspace_id, updated_by) values (new_workspace_id, (select auth.uid()));
  return new_workspace_id;
end;
$$;

create or replace function public.accept_wave_invitation(code uuid)
returns uuid language plpgsql security definer set search_path = '' as $$
declare invitation public.workspace_invitations%rowtype;
begin
  if (select auth.uid()) is null then raise exception 'Authentication required'; end if;
  select * into invitation from public.workspace_invitations
  where invite_code = code and status = 'Pending' and expires_at > now() for update;
  if invitation.id is null then raise exception 'Invitation is invalid or expired'; end if;
  if lower(invitation.email) <> lower(coalesce((select auth.jwt() ->> 'email'), '')) then raise exception 'Sign in with the invited email address'; end if;
  insert into public.workspace_members(workspace_id, user_id, role)
  values (invitation.workspace_id, (select auth.uid()), invitation.role)
  on conflict (workspace_id, user_id) do update set role = excluded.role;
  update public.workspace_invitations set status = 'Accepted' where id = invitation.id;
  return invitation.workspace_id;
end;
$$;

alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.workspace_invitations enable row level security;
alter table public.workspace_documents enable row level security;
alter table public.brand_profiles enable row level security;
alter table public.scheduled_jobs enable row level security;
alter table public.notifications enable row level security;

drop policy if exists "Members can read workspaces" on public.workspaces;
create policy "Members can read workspaces" on public.workspaces for select to authenticated using ((select public.is_workspace_member(id)));
drop policy if exists "Owners can update workspaces" on public.workspaces;
create policy "Owners can update workspaces" on public.workspaces for update to authenticated using ((select public.has_workspace_role(id, array['Owner']))) with check ((select public.has_workspace_role(id, array['Owner'])));

drop policy if exists "Members can read memberships" on public.workspace_members;
create policy "Members can read memberships" on public.workspace_members for select to authenticated using ((select public.is_workspace_member(workspace_id)));
drop policy if exists "Owners can manage memberships" on public.workspace_members;
create policy "Owners can manage memberships" on public.workspace_members for all to authenticated using ((select public.has_workspace_role(workspace_id, array['Owner']))) with check ((select public.has_workspace_role(workspace_id, array['Owner'])));

drop policy if exists "Members can read invitations" on public.workspace_invitations;
create policy "Members can read invitations" on public.workspace_invitations for select to authenticated using ((select public.is_workspace_member(workspace_id)));
drop policy if exists "Managers can create invitations" on public.workspace_invitations;
create policy "Managers can create invitations" on public.workspace_invitations for insert to authenticated with check (invited_by = (select auth.uid()) and (select public.has_workspace_role(workspace_id, array['Owner','Manager'])));
drop policy if exists "Managers can update invitations" on public.workspace_invitations;
create policy "Managers can update invitations" on public.workspace_invitations for update to authenticated using ((select public.has_workspace_role(workspace_id, array['Owner','Manager']))) with check ((select public.has_workspace_role(workspace_id, array['Owner','Manager'])));

drop policy if exists "Members can read workspace documents" on public.workspace_documents;
create policy "Members can read workspace documents" on public.workspace_documents for select to authenticated using ((select public.is_workspace_member(workspace_id)));
drop policy if exists "Managers can write workspace documents" on public.workspace_documents;
create policy "Managers can write workspace documents" on public.workspace_documents for all to authenticated using ((select public.has_workspace_role(workspace_id, array['Owner','Manager']))) with check (updated_by = (select auth.uid()) and (select public.has_workspace_role(workspace_id, array['Owner','Manager'])));

drop policy if exists "Members can read brand profiles" on public.brand_profiles;
create policy "Members can read brand profiles" on public.brand_profiles for select to authenticated using ((select public.is_workspace_member(workspace_id)));
drop policy if exists "Managers can write brand profiles" on public.brand_profiles;
create policy "Managers can write brand profiles" on public.brand_profiles for all to authenticated using ((select public.has_workspace_role(workspace_id, array['Owner','Manager']))) with check (updated_by = (select auth.uid()) and (select public.has_workspace_role(workspace_id, array['Owner','Manager'])));

drop policy if exists "Members can read schedules" on public.scheduled_jobs;
create policy "Members can read schedules" on public.scheduled_jobs for select to authenticated using ((select public.is_workspace_member(workspace_id)));
drop policy if exists "Managers can manage schedules" on public.scheduled_jobs;
create policy "Managers can manage schedules" on public.scheduled_jobs for all to authenticated using ((select public.has_workspace_role(workspace_id, array['Owner','Manager']))) with check (created_by = (select auth.uid()) and (select public.has_workspace_role(workspace_id, array['Owner','Manager'])));

drop policy if exists "Members can read own notifications" on public.notifications;
create policy "Members can read own notifications" on public.notifications for select to authenticated using (user_id = (select auth.uid()) and (select public.is_workspace_member(workspace_id)));
drop policy if exists "Members can update own notifications" on public.notifications;
create policy "Members can update own notifications" on public.notifications for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

revoke all on public.workspaces, public.workspace_members, public.workspace_invitations, public.workspace_documents, public.brand_profiles, public.scheduled_jobs, public.notifications from anon;
grant select, insert, update, delete on public.workspaces, public.workspace_members, public.workspace_invitations, public.workspace_documents, public.brand_profiles, public.scheduled_jobs, public.notifications to authenticated;
grant execute on function public.bootstrap_wave_workspace(text, text), public.accept_wave_invitation(uuid) to authenticated;
