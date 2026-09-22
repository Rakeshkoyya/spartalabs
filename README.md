# Sparta Labs

Marketing website for **Sparta Labs** — spartalabs.in

Sparta Labs builds and runs the software systems organisations depend on: custom
platforms, web and mobile products, AI-powered systems, and brand and concept
development — delivered by a dedicated specialist pod per engagement.

## Status

Home page built (plan phases 0–2). Inner pages, real content and launch hardening
are still to come.

The website plan — strategy, information architecture, page blueprints, UI design
language and build phases — lives in **[`docs/ACTION-PLAN.md`](docs/ACTION-PLAN.md)**.
The four directional decisions are recorded in §12, along with the content still
outstanding.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint
```

## Stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Radix UI
primitives · CSS-only motion. See §8 of the action plan.

## How the code is organised

| Path | What lives there |
| --- | --- |
| `src/app/globals.css` | The whole design language: brand ramps, fluid type scale, semantic theme tokens, signature devices. Colour is defined here and nowhere else. |
| `src/content/` | Every word and number on the site. Company facts, capabilities, case studies, process, pods, FAQ. |
| `src/components/ui/` | Primitives — Button, Container, Section, Kicker, ChevronMark, MetricTile. |
| `src/components/sections/` | One file per home page section, in scroll order. |
| `src/components/layout/` | Header (with mobile nav and theme toggle) and footer. |
| `src/lib/` | `cn()` class merging and JSON-LD builders. |

## Two conventions worth knowing

**Nothing unverified ships as fact.** Content the client has not confirmed is
`null` in `src/content/`, and the UI either omits it or renders it visibly
de-emphasised with a `data-pending` attribute. Grep for `data-pending` and
`TODO(content)` to find everything still outstanding.

**Components read semantic tokens, never raw ramp values.** Use `text-ink`,
`bg-surface`, `border-hairline` and `text-accent` — not `bronze-500` or
`graphite-900` — so the light theme keeps working and a palette change stays a
one-file edit.
