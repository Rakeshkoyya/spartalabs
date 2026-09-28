# Sparta Labs — design memory

Decisions here are settled. Follow them; change them only on purpose, and date the change.

## Direction (2026-09-28)

**Reading this as:** a studio site for a Hyderabad software firm that builds bespoke systems
for schools, studios and operators. The tone is engineered, confident and blueprint-precise.
The signature is "one connected system" made visible: the crest sits at the hub of orbit rings
with the service lines wired to it. Sections open as numbered chapters that slide over each
other like sheets, and route changes play a crest-blue curtain.

Dials: variance 7 · motion 7 · density 4.

## Kept (brand equity)

- Logo, crest mark, navy + crest-blue palette, Outfit (display) over Plus Jakarta Sans (body).
- All copy, URLs, nav labels, SEO metadata and JSON-LD.
- Paper/navy alternation from the brochure; "Formation" reveal system (draw → lock, gated on `html.js`).

## Tokens

- Colour, type and radius: `src/app/globals.css` (`@theme` + semantic `:root` / `.dark` / `.band-dark`).
- Motion: `src/styles/motion.css` — `--dur-*`, `--ease-out|in-out|exit|emphasized`, `--stagger`, `--sheet-radius`.
- Mono (IBM Plex Mono 500) is for chapter numerals and stage counters only.

## Patterns

| Pattern | Where | Notes |
|---|---|---|
| Hero orbit | `sections/hero-orbit.tsx` | The one lead animation. Pulses run 3 passes then stop (no pause control needed). Pointer drift ≤ 12px, fine pointers only. |
| Word rise | `motion/rise-text.tsx` | Display headings only (home h1, `PageHero` h1). |
| Sheet over pinned hero | `.hero-pin`, `.sheet`, `.hero-recede` | Pins only at ≥1024px wide and ≥680px tall. |
| Navy band opens to full bleed | `.band-open` (automatic for `Section tone="navy"`) | Scroll-scrubbed clip-path, `@supports` gated. |
| Chapter kicker | `SectionHeader index="0N"` | Home sections are numbered 01–08. |
| Manifesto illumination | `.illuminate .lit` | One per page. |
| Process stack | `.stack` | Sticky cards; plain list below 768px wide or 720px tall. |
| Spotlight | `.spotlight` + `motion/spotlight.tsx` | The one delight effect: bento, pods, examples. |
| Route curtain | `motion/route-curtain.tsx` | Intercepts plain same-origin page links only; off under reduced motion. |
| Adaptive header pill | `layout/site-header.tsx` | Samples the band under it: dark glass over navy, paper over paper. |

## Rules learned

- Sections use `overflow-clip`, never `overflow-hidden` — hidden creates a scroll container and breaks every sticky child.
- Anything revealed by the driver must be listed in `formation-reveals.tsx` selectors, or it stays hidden (clip-path hides are invisible to the capture's hidden-content check).
- Don't put `opacity-*` utilities on an element that also runs an entrance keyframe ending at `opacity: 1`; put it on a wrapper.
