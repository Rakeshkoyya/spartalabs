# Sparta Labs — Website Action Plan

**Domain:** spartalabs.in
**Document status:** Plan for approval. No implementation until signed off.
**Last updated:** 2026-09-22

---

## 1. The strategic call

You said it directly: *"instead of focusing more on what we build, I want a website which I can showcase to people and build trust."*

That one sentence changes the whole architecture of the site. A capability-led site (a long grid of services and tech logos) is what every mid-size IT firm in India already has, and it does the opposite of building trust — it makes you look interchangeable. A prospect scanning fifteen service tiles cannot tell you apart from the next vendor.

So the site is built as a **trust argument**, not a service catalogue. Every section exists to answer one unspoken question a buyer has before they email you.

| The buyer's real question | The section that answers it |
| --- | --- |
| "Are these people real and serious?" | Hero, company facts, footer with registered details |
| "Have they done this before?" | Selected Work, industries served |
| "Will my project get lost?" | How We Work — the pod model, named owner, weekly cadence |
| "Do they actually have the specialists?" | Specialist Pods / capability depth |
| "What happens if it breaks later?" | Operate & Evolve, support SLA, FAQ |
| "Will they own my code or will I?" | FAQ — IP ownership, NDA-first |
| "Can I talk to someone today?" | Persistent CTA, direct phone/email/WhatsApp, booking link |

Capabilities still appear — but framed as **outcomes for an organisation**, not as a tech stack listing.

### The secondary argument: the site *is* the portfolio

For a software company, the website is a live work sample. If it is slow, generic or janky on a phone, no amount of copy recovers it. So performance, motion quality and typographic discipline are not polish at the end — they are the product. Targets are set in §10 and are non-negotiable acceptance criteria.

---

## 2. Positioning and messaging

### Positioning statement (internal, not for the page)

> Sparta Labs builds and runs the software systems that organisations depend on — from a public website to a bespoke operating platform — with a dedicated specialist pod on every engagement, so nothing about a client's project is left unowned.

### The name as a design idea

"Sparta" gives us a real, non-cheesy visual and verbal territory: **discipline, formation, holding the line, engineering under pressure.** We use it as *tone and structure* — a rigid grid, precise typography, hairline rules, numbered formations — and **never** as literal iconography. No helmets, no shields, no columns, no red capes. That is the line between premium and costume.

### Message hierarchy

1. **Primary:** We build the systems your organisation runs on.
2. **Support 1:** A dedicated specialist pod per client — design, engineering, QA, DevOps, AI — so every need has an owner.
3. **Support 2:** Proven across education, media & film production, advertising, and custom operations platforms.
4. **Support 3:** Custom brand and concept development, not templates.
5. **Support 4:** We do not disappear at launch — we operate and evolve the system.

### Headline candidates (pick one at implementation)

| # | Headline | Sub-headline |
| --- | --- | --- |
| A | **We build the systems your organisation runs on.** | From school platforms and AI-powered learning portals to production and brand systems — engineered by a dedicated specialist pod, built to keep running. |
| B | **Engineering that holds the line.** | Custom software, platforms and digital products for organisations that cannot afford downtime, drift, or a vendor who goes quiet. |
| C | **Your operations, engineered.** | We design, build and run the software that makes an organisation work — with a specialist for every layer and a single owner for the whole. |

**Recommendation: A.** It is concrete, it is about *them*, and it works for a school group and a film studio equally.

### Copy rules for the whole site

- Second person. "Your team", "your operations" — not "our solutions".
- No superlatives without evidence. Delete "cutting-edge", "world-class", "synergy", "one-stop shop", "leverage".
- Every claim gets a proof object next to it: a number, a named sector, a named deliverable, or a process step.
- Sentence case for headings. Title Case reads like a brochure from 2009.
- Never write a number we cannot defend. Placeholder metrics are marked `TBD` in content files, not invented.

---

## 3. Information architecture

```
/                       Home — the full trust argument in one scroll
/services               What we build, framed as outcomes
  /services/[slug]      (Phase 2) deep page per capability
/work                   Case studies index, filterable by sector
  /work/[slug]          Individual case study
/approach               Engagement model, pod structure, delivery cadence
/about                  Story, values, team, timeline, company facts
/industries/[slug]      (Phase 2) Education, Media & Film, Advertising, Ops
/contact                Form + direct channels + office
/careers                (Phase 2) — hiring signals growth, growth signals trust
/insights               (Phase 3) — long-term SEO and expertise proof
/privacy, /terms        Legal
```

**Nav (desktop):** `Services · Work · Approach · About` then a single filled CTA `Start a conversation`.
Five items maximum. `Contact`, `Careers` and legal live in the footer — putting Contact in the nav *and* as the CTA wastes a slot.

**Nav (mobile):** logo left, hamburger right, full-screen overlay panel with large tap targets, CTA pinned at the bottom of the panel.

---

## 4. Home page — section blueprint

Order is deliberate: proof appears before persuasion.

### 4.1 Header
Sticky, 72px tall, transparent over the hero, then on scroll >24px it gains a `backdrop-filter: blur(12px)` surface and a 1px bottom hairline. Height shrinks to 60px. Logo wordmark left, nav centre-right, CTA button right.

### 4.2 Hero — *full viewport minus header, min-height 640px*

```
┌───────────────────────────────────────────────────────────────┐
│  [faint 1px blueprint grid, 4% opacity, radial-masked]        │
│                                                               │
│  ── EST. 20XX · HYDERABAD, INDIA ─────────  (mono eyebrow)    │
│                                                               │
│  We build the systems                                         │
│  your organisation                                            │
│  runs on.                        ← Display XL, 3 lines max    │
│                                                               │
│  From school platforms and AI-powered learning portals to     │
│  production and brand systems — engineered by a dedicated     │
│  specialist pod, built to keep running.   ← max 58ch          │
│                                                               │
│  [ Start a conversation ]   [ See our work → ]                │
│                                                               │
│  ─────────────────────────────────────────────────────────    │
│   12+          5           100%          24h                  │
│   PROJECTS  SECTORS   ON OUR OWN     RESPONSE                 │
│   DELIVERED  SERVED    STACK          TIME                    │
└───────────────────────────────────────────────────────────────┘
```

**Layout:** left-aligned, content constrained to 9 of 12 columns on desktop so the right edge breathes. Not centred — centred hero text at this size reads like a landing-page template.

**Background:** near-black graphite with a 64px blueprint grid at 4% opacity, masked by a radial gradient so it fades before the edges, plus one soft bronze radial glow at roughly 70%/20%. Static — no canvas particles, no WebGL. Cost/benefit is terrible and it hurts LCP.

**Metrics strip:** four figures, mono uppercase labels, separated by hairlines. This is the single highest-value trust element above the fold. **All four numbers need to be real — see §12.**

**Motion:** headline lines rise 20px and fade in on a 70ms stagger, sub-line and buttons follow. Total under 700ms. Fully skipped under `prefers-reduced-motion`.

### 4.3 Trust strip
A quiet band directly under the hero: `Trusted by teams in` + sector word-marks or client logos in a single desaturated row (grayscale, 60% opacity, full colour on hover). If client logos are not cleared for use, this becomes sector labels instead — `Education · Film Production · Advertising · Retail Operations`. **Decision needed (§12, Q2).**

### 4.4 What we build — capabilities
Six cards, 3×2 on desktop / 2×3 tablet / 1×6 mobile. Each card: bronze chevron glyph, title, one outcome sentence, and three plain-text sub-items. Hover lifts the card 2px and warms the border to bronze at 40%.

| Card | Outcome line |
| --- | --- |
| Custom platforms | Operating systems for your organisation — the tool your team lives in all day. |
| Web & digital presence | Sites that make a serious company look serious, and load in under two seconds. |
| Mobile applications | iOS and Android products your customers actually keep on their home screen. |
| AI & intelligent systems | AI that does a specific job well — tutoring, triage, extraction, search. |
| Brand & concept development | Positioning, identity and product concept, so the build has something to be true to. |
| Operate & support | We keep it running: monitoring, patching, iteration, an SLA you can hold us to. |

### 4.5 Selected work
Three to four case cards. Desktop layout: one wide feature card (7 cols) + two stacked (5 cols), then full-width rows below.

Each card carries: sector tag · client or anonymised descriptor · one-line problem · one-line outcome · one hard metric · `View case study →`.

Planned entries from what you described:
1. **AI-powered learning portal (LMS + AI tutor)** — Education
2. **School management platform** — Education
3. **Film production house — two projects** — Media & Entertainment
4. **Advertising agency brand site** — Advertising

Each needs a real case study page (§5.2). **Client naming and metrics need your input (§12, Q2).**

### 4.6 How we work — *the most important section on the page*

This is the answer to "will my project get lost?", which is the real reason mid-market buyers say no. Five steps, horizontal on desktop with a connecting bronze hairline, vertical timeline on mobile.

```
01 ──────── 02 ──────── 03 ──────── 04 ──────── 05
DISCOVER    BLUEPRINT   BUILD       HARDEN      OPERATE
            & SCOPE     IN SPRINTS  & LAUNCH    & EVOLVE
```

Beneath the steps, three guarantee cards that make the pod model concrete:

- **One pod, one owner.** A named engagement lead from day one to the day after launch.
- **You see it every week.** A working demo every Friday. No black-box months.
- **Your code, your IP.** Full source handover, documented, on your infrastructure if you want it.

### 4.7 Specialist pods
Answers "do they really have the depth?". A grid of discipline chips with headcount:

`Product & UX · Frontend · Backend & Platform · Mobile · AI / ML · QA & Automation · DevOps & Cloud · Brand & Design`

Supporting line: *"Every engagement draws from all eight. You are never handed to a generalist."*
If real team photos and bios are available, they replace this section entirely and are strictly better for trust. **(§12, Q3.)**

### 4.8 Industries
Four to six tiles with a one-line proof each, linking to `/work?sector=…`.

### 4.9 Testimonials
Two or three quote cards: quote, name, role, company, avatar. **Real quotes only — if none are available yet, this section is cut at launch rather than faked.** A fabricated testimonial is the single fastest way to destroy the trust everything else is building.

### 4.10 FAQ
Accordion, 6–8 questions. This is an underrated trust engine and it feeds a `FAQPage` JSON-LD block for search.

Planned: engagement models · how pricing works · typical timelines · who owns the IP · do you sign NDAs · what happens after launch · do you work with existing teams · how do we start.

### 4.11 Closing CTA band
Full-bleed bronze-tinted panel. Large statement, primary CTA, and the direct alternatives underneath — email, phone, WhatsApp. Some buyers will never fill a form; give them a human route.

### 4.12 Footer
Four columns + a base bar. Carries the trust payload most sites forget: registered company name, full address, CIN/GSTIN if applicable, phone, email, founded year, social links, sitemap, privacy and terms.

---

## 5. Other pages

### 5.1 `/work` (index)
Sector filter chips, responsive card grid, consistent card anatomy with the home page. Empty-state copy if a filter returns nothing.

### 5.2 `/work/[slug]` (case study) — fixed template
```
Hero: sector tag · project title · one-line outcome · hero image
Fact bar: Client · Sector · Timeline · Team size · Stack
The challenge   (2 short paragraphs)
What we built   (3–5 blocks: heading + copy + screenshot)
How we worked   (short — cadence, pod composition)
Results         (3 metric tiles + optional client quote)
Next project →
```
Consistency matters more than variety here. A repeatable template reads as a track record; bespoke layouts per project read as one-offs.

### 5.3 `/approach`
The home-page process, expanded. Adds: engagement models (fixed-scope · dedicated pod · retainer), a sample two-week sprint, the communication stack, and a "what we need from you" section — which is disarmingly honest and builds real credibility.

### 5.4 `/about`
Founding story (short, specific, no mission-statement mush), values as behaviours rather than adjectives, team, timeline, and company facts. Values should read like commitments: *"We tell you when a deadline is at risk the week we see it, not the week it slips."*

### 5.5 `/contact`
Two-column: form left, direct channels right. Form fields kept short — name, work email, company, what you need (select), message. Every extra field costs conversions. Inline validation, clear success state, honeypot + rate limiting. Right column: email, phone, WhatsApp, office address, embedded map, response-time promise.

---

## 6. UI design language

### 6.1 Direction: **Engineered Authority**

> **Live preview:** https://claude.ai/artifact/CCgkQ1LKNrZdpotmod1xAD — the hero, palette, type specimen, components and section order rendered in the proposed language. Use the theme button in its header to see both themes resolve.

Dark, precise and warm. Deep graphite surfaces, bronze as the single accent, hairline rules and mono labels borrowed from engineering drawings. The reference points are Linear, Vercel and Stripe for discipline — but warmed with bronze so it reads as *established and human* rather than *another dev-tools startup*. It also deliberately avoids the corporate blue that TCS, Infosys, Wipro and HCL all share; you will not be mistaken for a smaller copy of them.

The site ships **dark-first** with a full light theme available, both fully specified below.

### 6.2 Colour tokens

```css
/* Brand */
--bronze-50:  #FBF3EA;   --bronze-100: #F3E0CB;   --bronze-300: #DDB086;
--bronze-400: #E09A5B;   /* accent on dark  — 8.3:1 on --ink-950 */
--bronze-500: #C07A3C;   /* core brand — fills, graphics, large type */
--bronze-600: #A2632E;
--bronze-700: #8A5322;   /* accent on light — 5.7:1 on --paper */

/* Neutrals — dark theme */
--ink-950: #0B0C0E;  /* page */
--ink-900: #131519;  /* surface */
--ink-800: #1B1E24;  /* elevated surface */
--ink-700: #262A32;  /* border strong */
--ink-600: #363B45;

/* Neutrals — light theme */
--paper:      #FAF9F7;  /* page — warm, never pure white */
--paper-card: #FFFFFF;
--line:       #E6E3DE;

/* Text */
--text-hi-dark:  #F2F0ED;   --text-lo-dark:  #A8ADB6;  /* 8.7:1 on ink-950 */
--text-hi-light: #14161A;   --text-lo-light: #5C636E;  /* 5.8:1 on paper */

/* Signal — used sparingly, in proof contexts only */
--signal: #4C9A6A;   /* uptime / delivered / operational */
--warn:   #D4A03C;
--error:  #D6604D;
```

Every pairing above was contrast-checked. Two rules that follow from that maths and must be enforced in review:

1. `--bronze-500` is **3.4:1 on white** — it is a fill, graphic and large-display colour. It is *never* body text or a small link on a light background; use `--bronze-700` there.
2. Bronze covers roughly **8% of any viewport**. It marks CTAs, active states, the chevron glyph, rules and metric figures. The moment it becomes a background wash it stops signalling anything.

### 6.3 Typography

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display & headings | **Archivo** | 600 / 700 | Grotesque, confident, wide optical range. Tighten to `-0.03em` at display sizes. |
| Body & UI | **Instrument Sans** | 400 / 500 | Narrower and more neutral than Archivo — the width contrast is what makes the pairing read as deliberate. Chosen over Inter, which is now the default on roughly every tech site. |
| Eyebrows, labels, metrics | **IBM Plex Mono** | 500 | Uppercase, `0.14em` tracking. Carries engineering credibility and gives the brand its verbal texture. |

All three are on Google Fonts and load via `next/font` — self-hosted, no render-blocking request, no layout shift.

**Fluid scale** (`clamp`, so nothing needs breakpoint-by-breakpoint overrides):

```css
--fs-display: clamp(2.75rem, 1.55rem + 5.2vw, 5.5rem);   /* lh 0.98, ls -0.03em */
--fs-h1:      clamp(2.25rem, 1.60rem + 2.8vw, 4rem);     /* lh 1.05, ls -0.025em */
--fs-h2:      clamp(1.875rem, 1.45rem + 1.8vw, 3rem);    /* lh 1.12, ls -0.02em */
--fs-h3:      clamp(1.375rem, 1.20rem + 0.7vw, 1.75rem); /* lh 1.25 */
--fs-body-lg: 1.125rem;  /* lh 1.7 */
--fs-body:    1rem;      /* lh 1.7 */
--fs-sm:      0.875rem;  /* lh 1.6 */
--fs-mono:    0.75rem;   /* lh 1.4, ls 0.14em, uppercase */
```

Measure is capped at **68ch** for body copy and **58ch** for hero sub-heads. Long full-width paragraphs are the most common tell of an amateur build.

### 6.4 Grid, spacing, shape

- **Spacing:** 4px base unit; the usable scale is `4 8 12 16 24 32 48 64 96 128`. Nothing off-scale.
- **Section rhythm:** `padding-block: clamp(5rem, 10vw, 9rem)`. Uniform everywhere — irregular section spacing is what makes a site feel assembled rather than designed.
- **Grid:** 12 columns, 24px gutter mobile / 32px desktop. Content max-width **1240px**, wide shells 1440px, prose 720px.
- **Breakpoints:** 480 · 768 · 1024 · 1280 · 1536.
- **Radii:** `2px` hairline chips, `6px` buttons and inputs, `12px` cards, `999px` for pills only. Restrained curvature reads engineered; 24px pill-everything reads consumer app.
- **Borders:** 1px hairlines at 8–12% opacity do the structural work. This is the blueprint motif and it is cheaper and sharper than shadows.
- **Elevation:** exactly two shadows. `--shadow-sm: 0 1px 2px rgb(0 0 0 / .18)` and `--shadow-lg: 0 24px 48px -12px rgb(0 0 0 / .35)`. Depth otherwise comes from surface steps and borders.

### 6.5 Signature devices

Four recurring elements give the site a recognisable fingerprint and stop it reading as a component-library default:

1. **The blueprint grid** — 64px 1px grid at 4% opacity, radial-masked, on the hero and the closing CTA band only.
2. **Mono spec labels** — `01 / DISCOVER`, `SECTOR — EDUCATION`. Every section eyebrow and every card tag.
3. **The chevron glyph** — a single narrow bronze chevron (a formation mark, not a shield) used as list bullet, card icon anchor and scroll cue.
4. **Hairline rules** — used to separate, count and align. The visual equivalent of holding the line.

### 6.6 Imagery

- Product screenshots are shown in a neutral dark device frame with a subtle bronze rim-light so they sit inside the palette instead of fighting it.
- **No stock photography of handshakes, boardrooms or diverse-team-pointing-at-a-laptop.** It is the fastest possible trust loss. If real photography is unavailable, the site goes typographic and abstract — which is a stronger look anyway.
- Team photos, if used, are consistently treated: same crop, same background, light desaturation.
- All imagery is AVIF with WebP fallback, correctly sized, `loading="lazy"` below the fold, and always with explicit `width`/`height` to protect CLS.

### 6.7 Motion

- Durations `160 / 220 / 320ms`; easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Scroll reveals: `translateY(16px)` + opacity, 60ms stagger, `IntersectionObserver`, fires once.
- Hover: 2px lift, border warms to bronze, 160ms. Buttons get a subtle bronze glow.
- Counters in the metrics strip animate once on entry.
- **No parallax, no scroll-jacking, no cursor followers, no auto-playing carousels.** Confidence is quiet.
- `@media (prefers-reduced-motion: reduce)` disables transforms and reveals globally, leaving instant final states. This is a hard requirement, not an option.

---

## 7. Component inventory

Built once, used everywhere. Hand-rolled on Tailwind + Radix primitives — no heavyweight UI kit, so the visual language stays ours.

**Primitives:** Button (primary / secondary / ghost / link, 3 sizes) · Input · Textarea · Select · Checkbox · Badge · Chip · Avatar · Icon · Separator · Tooltip.

**Composites:** SectionHeader (eyebrow + title + lede) · Container · Grid · CapabilityCard · CaseCard (feature + standard) · MetricTile · ProcessStep · PodChip · TestimonialCard · FAQAccordion · CTABand · LogoRow · Breadcrumbs · Pagination.

**Layout:** Header (+ MobileNav overlay) · Footer · PageHero · Reveal (motion wrapper) · ThemeToggle.

**States every interactive component must define:** default · hover · active · focus-visible · disabled · loading · error. A component is not done until all seven exist.

---

## 8. Technical architecture

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 15**, App Router | Best-in-class SEO metadata, image pipeline and routing; static-export capable if hosting is shared. |
| Language | **TypeScript** (strict) | |
| Styling | **Tailwind CSS v4** with the tokens in §6.2 as CSS custom properties | Tokens live in one file; Tailwind just consumes them. |
| Primitives | Radix UI (accordion, dialog, select) | Accessibility for free on the hard components. |
| Motion | `motion/react` | Tree-shakes well; used only for reveals and the mobile nav. |
| Content | Typed TS data modules + MDX for case studies | No CMS at launch. Fast, versioned, zero cost. Sanity is the Phase-3 upgrade if you want non-developer editing. |
| Forms | React Hook Form + Zod | |
| Icons | Lucide + a small custom SVG set for the chevron glyph |
| Analytics | Plausible or Vercel Analytics | Cookieless — no consent banner, which keeps the first impression clean. |
| Hosting | **Vercel** (recommended) | Preview deploys per commit, edge CDN, image optimisation, zero config. Static export to your existing host is the fallback — see §12, Q1. |

### Repository structure

```
src/
  app/                    routes, layouts, metadata, sitemap.ts, robots.ts, opengraph-image.tsx
  components/  ui/        primitives
               sections/  page sections
               layout/    header, footer, nav
  content/     work/      case studies (MDX + frontmatter)
               site.ts    company facts, nav, contact, social — single source of truth
               services.ts, faq.ts, process.ts
  lib/                    utils, schema (JSON-LD builders), motion presets
  styles/tokens.css       §6.2 verbatim — the one place colour is defined
public/  images/ · og/ · favicons/
docs/    ACTION-PLAN.md
```

Company facts live in exactly one file (`content/site.ts`). Phone number, address and email appear in the header, footer, contact page, JSON-LD and OG tags — they must never be typed twice.

---

## 9. Build phases

| Phase | Scope | Output |
| --- | --- | --- |
| **0 — Foundation** | Next.js + TS + Tailwind v4 scaffold, tokens, fonts, ESLint/Prettier, base layout, header, footer, theme toggle | Deployable empty shell |
| **1 — Design system** | Every primitive and composite in §7, all seven states, both themes, on a `/styleguide` route (kept out of the sitemap) | Visual sign-off point |
| **2 — Home** | All twelve sections of §4, fully responsive, motion in place | **Main review gate — approve before Phase 3** |
| **3 — Inner pages** | `/services`, `/work`, `/work/[slug]`, `/approach`, `/about`, `/contact`, legal | Complete site |
| **4 — Content & SEO** | Real copy, case studies, images, metadata, JSON-LD, sitemap, robots, OG images | Content-complete |
| **5 — Hardening** | Lighthouse, axe, keyboard pass, cross-browser, 404/500, form spam protection, analytics | Launch-ready |
| **6 — Launch** | DNS for spartalabs.in, SSL, Search Console, redirects, final QA | Live |

Phase 2 is the gate. Once the home page is approved, the rest is execution against a settled language.

---

## 10. Quality bar (acceptance criteria, not aspirations)

**Performance** — Lighthouse ≥ 95 on all four categories, mobile profile. LCP < 2.0s on simulated 4G. CLS < 0.05. INP < 200ms. Total JS < 150KB gzipped on the home route.

**Accessibility** — WCAG 2.2 AA. Body text ≥ 4.5:1, large text and UI borders ≥ 3:1. Visible `focus-visible` ring (2px bronze, 2px offset) on every interactive element. Full keyboard operability including the mobile nav. Semantic landmarks, one `h1` per page, ordered headings. Skip-to-content link. `prefers-reduced-motion` honoured. Tested with axe and a real keyboard pass, not just automated scores.

**SEO** — Unique title and description per page. Canonicals. `Organization`, `WebSite`, `BreadcrumbList` and `FAQPage` JSON-LD. Dynamic OG images. `sitemap.xml` and `robots.txt`. India-first targeting (`en-IN`, INR, IST, `+91`) with global readability.

**Browsers** — Latest two of Chrome, Safari, Firefox, Edge; iOS Safari and Android Chrome. Tested at 360px, 768px, 1024px, 1440px and 1920px.

---

## 11. Asset checklist (needed from you)

| # | Asset | Blocks | Fallback if unavailable |
| --- | --- | --- | --- |
| 1 | Logo — SVG, light and dark variants | Header, footer, OG, favicon | We set the wordmark in Archivo and propose a chevron mark |
| 2 | Company facts — registered name, address, founded year, CIN/GSTIN | Footer, contact, JSON-LD | Cannot be faked — hard blocker for launch |
| 3 | Contact — email, phone, WhatsApp, booking link | Every CTA | Hard blocker |
| 4 | Client names + written permission to display | Trust strip, case studies | Anonymised descriptors: *"a K-12 group in Hyderabad"* |
| 5 | Real project metrics | Hero strip, case results | Section cut — no invented numbers |
| 6 | Product screenshots (4 projects) | Case studies, work cards | Abstract typographic treatment |
| 7 | Team names, roles, photos | About, pods section | Discipline pods without faces |
| 8 | Client testimonials with attribution | Testimonials | **Section cut entirely** |
| 9 | Founding story, 150 words | About | We draft, you correct |

Items 2, 3 and 5 are where most agency sites quietly lie. We will not — the entire strategy in §1 depends on everything on the page being defensible.

---

## 12. Open questions

These change the plan, so I need your answers before Phase 0.

**Q1 — Hosting.** Vercel (recommended: preview deploys, edge CDN, working contact form API) or your existing spartalabs.in shared hosting? The second requires static export and a third-party form service like Web3Forms.

**Q2 — Client names and numbers.** Can we name the school group, film production house and ad agency, or do we use anonymised sector descriptors? And do you have real metrics — students on the platform, uptime, delivery time — or should the hero strip use company facts (years, projects, sectors, response time) instead?

**Q3 — The team.** Real names, roles and photos on the About page, or the anonymous "specialist pods" treatment? Real people are meaningfully stronger for trust, but only if the photos are consistent and good.

**Q4 — Visual direction.** Does "Engineered Authority" — dark graphite with bronze, mono labels, hairline rules — match how you want Sparta Labs to feel? The main alternative is a light, editorial, Stripe-like treatment: warm white, deep ink, more whitespace, calmer. Both are credible; they attract slightly different buyers.

**Also useful, but not blocking:**

- Founded year, office city, team size.
- Do you want `/careers` and `/insights` at launch or in Phase 2?
- Is there an existing spartalabs.in site with content or URLs to preserve and redirect?
- Do you have a booking tool (Cal.com / Calendly) we should wire into the CTAs?
- Any competitor or reference sites you admire — or specifically want to avoid resembling?

---

## 13. Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Content arrives late or thin | The best layout in the world fails with placeholder copy | Phase 4 is explicitly content-gated; we draft from your inputs and you edit rather than write from scratch |
| No real testimonials or metrics | Weakens the central trust argument | Lean harder on process transparency (§4.6) and detailed case studies, which we *can* write from your project knowledge |
| Scope creep into a CMS mid-build | Delays launch by weeks | Ship with typed content files; CMS is an explicit Phase 3 decision |
| Design-by-committee after Phase 2 | Language drifts and the site loses coherence | Phase 2 is a formal sign-off gate; changes after it are logged as scoped revisions |
| Shared hosting constraints found late | Forces a rebuild of the form and image pipeline | Resolved by Q1 before any code is written |

---

## 14. What happens on your approval

1. You answer Q1–Q4.
2. I scaffold Phase 0 and push it, so you have a live preview URL within the first commit.
3. Phase 1 gives you a `/styleguide` page — you approve the design language on real components, not on a description.
4. Phase 2 delivers the home page for the main review gate.
5. Phases 3–6 execute against the approved language.
