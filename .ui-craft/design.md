# Sparta Labs — design memory

Decisions here are settled. Follow them; change them only on purpose, and date the change.

## Direction (2026-09-28, revised same day)

**Reading this as:** a studio site for a software firm that builds bespoke systems for
businesses in the USA, the UAE and worldwide. The tone is engineered, confident and light. The
signature is "one connected system" made visible: the crest drawn in particles that scatter
from the pointer and gather again over a drifting network. Sections open as numbered chapters
that slide over each other like sheets, and route changes play a crest-blue curtain.

Dials: variance 7 · motion 7 · density 4.

## Audience and location (client decision, 2026-09-28)

- Main clients are in the USA, Dubai/UAE and other countries. **"Hyderabad" must not appear in
  visible copy.** It stays only in SEO: meta titles/descriptions, keywords, JSON-LD address,
  `llms.txt`, and the `/it-services-hyderabad` geo landing page — which is kept live and in the
  sitemap but not linked from site navigation or the footer.

## Kept (brand equity)

- Logo, crest mark, crest-blue accent, Outfit (display) over Plus Jakarta Sans (body).
- All URLs, nav labels, SEO metadata and JSON-LD.
- "Formation" reveal system (draw → lock, gated on `html.js`).

## Palette (2026-09-28)

- No navy-to-black anywhere. Light mode is paper with soft light-blue gradient bands
  (`.band-tint`, `--band-bg`); dark mode is a lifted mid-navy (`#0f2142` page, blue surfaces).
- Blue feature cards (`crest`, `crest-deep`) are bright blue, white text, scoped with `.tone-dark`.
- Glass, particles, grid and aurora colours are tokens (`--glass-*`, `--particle`, `--grid-line`,
  `--aurora-*`) so every effect follows the theme.

## Tokens

- Colour, type and radius: `src/app/globals.css` (`@theme` + semantic `:root` / `.dark` / `.tone-dark` / `.band-tint`).
- Motion: `src/styles/motion.css` — `--dur-*`, `--ease-out|in-out|exit|emphasized`, `--stagger`, `--sheet-radius`.
- Mono (IBM Plex Mono 500) is for chapter numerals and stage counters only.

## Patterns

| Pattern | Where | Notes |
|---|---|---|
| Particle crest hero | `sections/hero-particles.tsx`, `lib/particles.ts` | The lead animation. Visible pause control (WCAG 2.2.2); stops off-screen/hidden; single static frame under reduced motion. |
| Hero fits the screen | `sections/hero-pin.tsx`, h1 `clamp(…, min(5.4vw, 9svh), …)` | Pins at a negative offset when taller than the viewport, so buttons are never covered. |
| Word rise | `motion/rise-text.tsx` | Display headings only (home h1, `PageHero` h1). |
| Sheet over pinned hero | `.hero-pin`, `.sheet`, `.hero-recede` | Pins only at ≥1024px wide and ≥680px tall. |
| Band opens to full bleed | `.band-open` (automatic for `Section tone="navy"`) | Scroll-scrubbed clip-path, `@supports` gated. |
| Converge graphic | `sections/converge-graphic.tsx`, motion.css "CONVERGE" | Who we are: scattered tools gather into one system, scrubbed. Rest state is assembled. |
| Chapter kicker | `SectionHeader index="0N"` | Home sections are numbered 01–08. |
| Manifesto illumination | `.illuminate .lit` | One per page. |
| Process stack | `.stack` | Sticky cards; plain list below 768px wide or 720px tall. |
| Spotlight | `.spotlight` + `motion/spotlight.tsx` | Hover light on cards. |
| Route curtain | `motion/route-curtain.tsx` | Intercepts plain same-origin page links only; off under reduced motion. |
| Header pill | `layout/site-header.tsx` | Transparent at top, floating pill on the page surface once scrolled. |

Removed on request: the left-edge page timeline ("spine").

## Rules learned

- Sections use `overflow-clip`, never `overflow-hidden` — hidden creates a scroll container and breaks every sticky child.
- Anything revealed by the driver must be listed in `formation-reveals.tsx` selectors, or it stays hidden (clip-path hides are invisible to the capture's hidden-content check).
- Don't put `opacity-*` utilities on an element that also runs an entrance keyframe ending at `opacity: 1`; put it on a wrapper.
- Crest images on light surfaces use `logo-mark.png`; `logo-mark-white.png` only on blue.
