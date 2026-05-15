# Database Setup (Supabase Free Tier)

This project uses **Supabase** as a production-ready free-tier Postgres + API layer.

## Why Supabase for this project

- Free tier supports early production traffic for small business sites.
- Managed Postgres database with backups and SQL tooling.
- Built-in security via RLS (Row Level Security).
- Easy React integration using `@supabase/supabase-js`.

## 1) Create Supabase project

1. Go to [https://supabase.com](https://supabase.com) and create an account.
2. Create a new project (choose nearest region).
3. Wait for provisioning, then open **SQL Editor**.

## 2) Create schema + policies

1. Copy SQL from `supabase/schema.sql`.
2. Run it in SQL Editor.
3. Confirm table exists under **Table Editor** -> `inquiries`.

## 3) Add frontend environment variables

1. Copy `.env.example` to `.env`:
   - Windows PowerShell: `Copy-Item .env.example .env`
2. Set values from Supabase project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

> Never expose `service_role` key in frontend code.

## 4) Data model guidance

### `inquiries` table

- `name`, `email`, `message`: required customer lead data.
- `project_type`, `budget_range`: helps classify and prioritize leads.
- `status`: workflow state (`new`, `in_progress`, `closed`).
- `created_at`: sorting and reporting.

### Suggested future tables

- `projects`: published portfolio projects.
- `testimonials`: client feedback for homepage.
- `team_members`: leadership and staff profiles.

Use foreign keys if you relate projects to services or testimonials.

## 5) Security best practices

- Keep RLS enabled on all tables.
- Allow public users only the minimum action needed (insert here).
- Keep admin reads/writes behind server-side code with service role key.
- Add basic rate limiting using a serverless function when traffic grows.
