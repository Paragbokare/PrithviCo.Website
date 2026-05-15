# Deployment Guide (Free Tier)

Recommended stack:

- **Frontend hosting:** Vercel (free hobby plan)
- **Database/backend API:** Supabase (free tier)
- **Domain:** free Vercel subdomain, or custom domain if you own one

## 1) Prepare project

1. Ensure `.env` works locally.
2. Verify app builds:
   - `npm run build`

## 2) Deploy frontend to Vercel

1. Push repo to GitHub.
2. Go to [https://vercel.com](https://vercel.com), import the GitHub repo.
3. Vercel auto-detects Vite configuration.
4. In Vercel project settings -> **Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Trigger deployment.

## 3) Verify production

1. Open deployed URL.
2. Submit Contact form.
3. Check `inquiries` table in Supabase to confirm persistence.

## 4) Domain options

- Default: `https://your-project-name.vercel.app` (free).
- Custom domain:
  1. Buy domain from any registrar.
  2. Add domain in Vercel project settings.
  3. Configure DNS records as shown in Vercel instructions.

## 5) CI/CD behavior

- Every push to main branch triggers Vercel deployment automatically.
- Preview deployments are created per branch/PR.

## 6) Scaling path (still low cost)

- Keep frontend on Vercel.
- Move sensitive admin operations to Vercel serverless functions.
- Use Supabase Edge Functions for webhooks, cron jobs, and admin workflows.
