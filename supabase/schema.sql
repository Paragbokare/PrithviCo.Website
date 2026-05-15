-- Core lead capture table for website inquiry form.
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  project_type text not null,
  budget_range text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Basic query support for dashboard filtering in future.
create index if not exists inquiries_status_created_at_idx
  on public.inquiries (status, created_at desc);

-- Tighten permissions: frontend can only insert, not read.
alter table public.inquiries enable row level security;

drop policy if exists "anon_insert_inquiries" on public.inquiries;
create policy "anon_insert_inquiries"
  on public.inquiries
  for insert
  to anon
  with check (true);

drop policy if exists "service_role_full_access" on public.inquiries;
create policy "service_role_full_access"
  on public.inquiries
  for all
  to service_role
  using (true)
  with check (true);
