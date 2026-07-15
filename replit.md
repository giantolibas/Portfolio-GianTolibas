# Gian Tolibas Portfolio

Personal portfolio website for Gian Tolibas, an IT professional and aspiring Security Analyst — a single-page, dark cybersecurity-themed site with About, Skills, Experience, Education, and Contact sections.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/portfolio/` — the portfolio site (React + Vite, frontend-only, no backend)
- `artifacts/portfolio/src/components/sections/` — one file per page section (Hero, About, Skills, Experience, Education, Contact)
- `artifacts/portfolio/src/index.css` — theme tokens (dark charcoal/navy + neon cyber-teal accent)
- `artifacts/portfolio/public/` — drop `profile-photo.jpg` and `about-photo.jpg` here to replace image placeholders

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

Single-page portfolio at `/` with sticky navbar, smooth-scrolling sections (About, Skills, Experience, Education, Contact), image placeholders with initials fallback, and mailto contact CTA (giantolibas@gmail.com).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
