# Spiritan Academy Website

Modern multi-page school platform built with Next.js (App Router + TypeScript), including:

- Home, About, News, Campus Life, Awards, Programs, Events/Activities, Contact, Media, Verification
- Admissions inquiry API and form
- Verification lookup API and page
- Responsive design optimized for mobile, tablet, desktop, and wide screens

## Local Development

1. Install dependencies:

```bash
npm install
```

1. Copy env example and set your local site URL:

```bash
copy .env.example .env.local
```

Then set:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

1. Run dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel (Recommended)

### Option A: Vercel Dashboard (Git-based)

1. Push this project to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Add Environment Variable:
   - `NEXT_PUBLIC_SITE_URL` = your production domain (example: `https://spiritanacademy.org`)
4. Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

When prompted, set project env var:

- `NEXT_PUBLIC_SITE_URL=https://your-production-domain.com`

## Notes

- Favicon is configured to use `public/spiritan_logo.jpg`.
- If favicon updates don’t appear immediately, do a hard refresh/clear favicon cache.
