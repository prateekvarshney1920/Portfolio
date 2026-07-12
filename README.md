# Aurora Portfolio — Prateek Varshney

A premium, cinematic personal-brand site built to the **Aurora Design System**.
Dark-only, motion-forward, production-grade.

> Built per `00_PROJECT_FOUNDATION.md` and `01_DESIGN_SYSTEM.md` (frozen).
> Implemented phase by phase. This is the **Phase 1** foundation.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme`) · **shadcn/ui** (new-york)
- **Motion** (Framer Motion) · **Lenis** (smooth scroll)
- **Geist** fonts · **Lucide** icons

## Prerequisites

- Node.js **20.11+** (or 22 LTS)
- npm 10+

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script                | What it does                              |
| --------------------- | ----------------------------------------- |
| `npm run dev`         | Start the dev server                      |
| `npm run build`       | Production build                          |
| `npm run start`       | Serve the production build                |
| `npm run lint`        | ESLint (next core-web-vitals + ts)        |
| `npm run typecheck`   | `tsc --noEmit` strict type check          |
| `npm run format`      | Prettier write                            |
| `npm run format:check`| Prettier check (CI)                       |

## Project structure

```
src/
  app/            Root layout, global styles, favicon, routes
  components/     ui · primitives · sections · layout · three · playground · case-study
  providers/      Client providers (motion, smooth scroll)
  hooks/          Reusable hooks
  lib/            Utilities (cn, fonts) · ai/ (Phase 6)
  config/         site + motion tokens
  content/        Case-study + data content (Phase 5)
public/
  fonts/          Display-font drop-in (see fonts/README.md)
  images/         Static imagery
```

## Design tokens

All Aurora tokens live as CSS variables in `src/app/globals.css` and are mapped
to Tailwind utilities via the v4 `@theme inline` block. **Aurora is the single
source of truth**; shadcn's semantic tokens are valued from it. Never hardcode a
colour — add or use a token.

## Fonts

Geist (body/mono) is bundled. The display face (**Clash Display**) is a one-step
drop-in — see `public/fonts/README.md`.
