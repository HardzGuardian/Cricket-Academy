# Sunil Cricket Academy

A production Next.js (App Router) site for Sunil Cricket Academy — Cross Maidan, Churchgate, Mumbai. Built with TypeScript, Tailwind CSS v4, and `motion` for animation.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4**
- **`motion`** for animation, **Radix UI** (`react-select`) for the accessible dropdown, **OverlayScrollbars** for the themed scrollbar
- **Resend** for the enquiry form's outbound email
- **Vitest** for the API route's test suite

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes, for the enquiry form to send mail | Get a free key at [resend.com](https://resend.com). Without it, `/api/enquiry` returns a clear 500 instead of crashing. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | The deployed production URL (e.g. `https://your-domain.com`). Used for Open Graph/Twitter image URLs, the canonical tag, and `sitemap.xml`/`robots.txt`. Falls back to a placeholder if unset — nothing breaks, but social previews and the sitemap will point at the wrong host. |

**Important — Resend's free tier and email delivery.** Without a verified domain, Resend can only deliver to the exact email address the account was signed up with. That's why `src/lib/data.ts` has two separate constants:

- `SITE.email` — the **publicly displayed** contact address (footer, contact card)
- `ENQUIRY_RECIPIENT_EMAIL` — where the form **actually delivers**

Don't merge these back into one constant without first verifying a domain at [resend.com/domains](https://resend.com/domains) — doing so will silently break the form again.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # ESLint
npm run test     # Vitest (API route test suite)
```

## Project structure

```
src/
  app/
    api/enquiry/route.ts   # the enquiry form's backend — validated, rate-limited, same-origin only
    page.tsx                # home page
    programs/page.tsx       # /programs
    gallery/page.tsx        # /gallery
    layout.tsx               # fonts, metadata, structured data, MotionConfig
    robots.ts, sitemap.ts, manifest.ts   # Next.js metadata routes
  components/                # one component per section (Hero, About, Coaches, ...)
    ui/                       # small shared primitives (Select, Tag, PulseDot)
  lib/
    data.ts                   # all site content and contact info — single source of truth
    motion.ts                 # shared spring-animation easing
    rateLimit.ts               # in-memory rate limiter for the enquiry route
public/
  images/                     # all site imagery, pre-optimized
```

## Security

- `next.config.ts` sets a Content-Security-Policy, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS on every route.
- `/api/enquiry` validates same-origin (rejects any request whose `Origin` doesn't match `Host`), rate-limits to 5 submissions per IP per 10 minutes, and has a honeypot field for basic bot rejection. See the in-code comments in `src/lib/rateLimit.ts` for that limiter's known limitation (per-instance memory, not a distributed store) and when to replace it.

## Deployment (Vercel)

1. Import the repo in Vercel.
2. Add `RESEND_API_KEY` and `NEXT_PUBLIC_SITE_URL` under Project Settings → Environment Variables.
3. Deploy — the build and CI (`.github/workflows/ci.yml`) both run `lint`, `test`, and `build`.
