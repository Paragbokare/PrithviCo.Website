# PrithviCo Construction Website

Professional React website for a construction company with production-ready lead capture backed by Supabase.

## Tech Stack

- React + Vite
- Tailwind CSS utility classes
- Supabase Postgres + API (`@supabase/supabase-js`)

## Run Locally

1. Install dependencies:
   - `npm install`
2. Create environment file:
   - `Copy-Item .env.example .env`
3. Set Supabase values in `.env`.
4. Start dev server:
   - `npm run dev`

## Database

- SQL schema and RLS policies: `supabase/schema.sql`
- Full setup guide: `DATABASE_SETUP.md`

## Deployment

- Full deployment walkthrough: `DEPLOYMENT.md`
- Recommended free stack: Vercel + Supabase
