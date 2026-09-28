# Sparta Labs site blueprint

**Status:** Approved structure and copy, 2026-09-28. Build from this.
**Supersedes:** the IA, home blueprint and copy in `docs/ACTION-PLAN.md` §2–5. Visual design follows `.ui-craft/design.md`.
**Sources:** `Sparta Labs website copy (1).md.txt` (research), creston.io (structure reference), the current site.

---

## 1. Principles

- **Straight to the point.** Headlines are 8 words or fewer. Body copy is 2 lines or fewer. A card gets one line.
- **Show a section only when it's real.** No invented numbers, placeholder posts or template jobs. A `[fill]` item stays hidden until it's confirmed.
- **Two buyers, one site.** Home serves businesses and agencies equally, then splits them in one click.
- **Global voice.** "Hyderabad" never appears in visible copy. It stays in SEO metadata, JSON-LD, `llms.txt` and `/it-services-hyderabad`.
- **One CTA everywhere:** **Book a discovery call** (on /agencies it reads **Book a partner call**).

## 2. Fixes to the research doc

| # | Research says | Change | Why |
|---|---|---|---|
| 1 | Hero: "Based in Hyderabad…". About: "founded in Hyderabad" | "Working with clients in India, the US and the UAE." About: "Founded in 2025" | Global positioning, per the design record |
| 2 | Replace the "8 pods / 1 lead" stat strip | Agreed. Tiles only show if they're true on launch day | Numbers get checked on sales calls |
| 3 | TrackBit and the multi-campus platform as separate cases | **Confirm.** If multi-campus *is* TrackBit, merge them into one case | The same project shown twice looks padded |
| 4 | FAQ Q6 names the UK and Canada | One country list site-wide: India, US, UAE `[confirm others]` | Consistency |
| 5 | The contact form drops Phone | Keep Phone, but make it **optional** (currently required). Cut topics from 7 to 4 | Less friction, and still gives a reachable number |
| 6 | Name story in 3 paragraphs, founder story in 2, a 4-column approach table | 2 lines each; a stacked list for approach | Clean and mobile-first |
| 7 | — | `ACTION-PLAN.md` §6 palette (graphite/bronze) is stale | The code uses the blue palette from design.md |

**What we took from creston.io:**
- Very short, confident lines.
- The brand story built on the name.
- A single repeated CTA.
- Filtering clients on the contact page ("if we're not the right fit, we'll say so").
- Numbered cards.
- A large wordmark in the footer.

**What we skip from creston.io:**
- Round stats nobody can verify (50+ / 30+).
- A blog of 1-minute placeholder posts.
- Template job listings.
- A portfolio of bare project names with no outcomes.

---

## 3. Sitemap and navigation

**Header:** Logo · **Services · Work · For agencies · Approach · About** · [Book a discovery call]

| Page | URL | Job of the page | Status |
|---|---|---|---|
| Home | `/` | Welcome, prove it, split the two paths, ask for a call | Rewrite |
| Services | `/services` | 3 core services and how we price | Rewrite |
| For agencies | `/agencies` | White-label build partnership | **New** |
| Work | `/work`, `/work/[slug]` | Case studies: situation → built → changed → stack | Rewrite and add TrackBit |
| Approach | `/approach` | 5 stages, and what the client does in each | Trim |
| About | `/about` | Founders, the name, beliefs | Rewrite |
| FAQ | `/faq` | 12 answers in 2 groups | **New** |
| Insights | `/insights`, `/insights/[slug]` | Short articles from real work | **New**, hidden until 3 posts exist |
| Careers | `/careers` | Open roles or an open application | **New**, footer only |
| Contact | `/contact` | One short form and direct lines | Update |
| Privacy / Terms / Cookies | `/privacy`, `/terms`, `/cookies` | Legal | Add Cookies |
| Local SEO | `/it-services-hyderabad` | Search landing only | Keep, not linked |
| 404 | — | Route back home | Keep |

**Footer**
- **Brand line:** Sparta Labs, *Software built around how your business actually runs.* Under it: *Small team, disciplined builds, nothing you don't need.*
- **Services column:** AI automations · Websites and e-commerce · Internal software · Mobile apps · Support
- **Company column:** Work · Approach · About · For agencies · FAQ · Insights · Careers
- **Contact column:** hello@spartalabs.in · +91 79939 91162 · +91 90305 95999 · `[WhatsApp]` · `[LinkedIn]` · Brochure (PDF)
- **Legal column:** Privacy · Terms · Cookies
- **Bottom line:** © 2025–2026 `[legal entity name]`, set above the large outline wordmark.

---

## 4. Home (8 sections)

### 1. Hero, quote-led
> *"The best software disappears into the way you already work."*

- **H1:** Software built around how your business actually runs.
- **Sub:** We learn how your team works, then build the system that fits.
- **Buttons:** [Book a discovery call] · See our work →
- **Micro line:** Working with clients in India, the US and the UAE.

### 2. Proof strip
Tiles are true numbers only; a `[fill]` tile stays hidden until confirmed.

| Number | Label |
|---|---|
| 10 | Modules in TrackBit, our school operating system |
| `[fill]` | Projects delivered since 2025. *If under 5, use "4 industries served" instead.* |
| Weekly | Live demos, in two-week sprints |
| 100% | Source code and IP handed to you |

### 3. Two paths
- **For businesses:** Outgrown spreadsheets and WhatsApp groups? We build one system around how you work. → *See services*
- **For agencies:** Your client wants software. We build it under your name. → *Partner with us*

### 4. What we build
- **AI automations:** Take the repetitive work off your team.
- **Websites and e-commerce:** Fast sites your team can update without us.
- **Internal software:** The one tool your team lives in all day.

Below the cards: *Also: mobile apps · brand · ongoing support →*

### 5. Selected work (3 cards → /work)
- **TrackBit:** A 10-module school OS. Teachers close a period in one tap.
- **Multi-campus school platform:** Every campus on one system. *(Replace with a different case if merged into TrackBit.)*
- **AI learning platform** (in build): Pick any subject; an AI tutor builds the path.

*5b. Testimonials:* hidden until there are at least 2 real quotes (name, role, company).

### 6. Why Sparta Labs
- **We learn before we code.** Every project starts by mapping your real workflow.
- **One named lead.** You always know who owns your project.
- **A demo every week.** No big reveal at the end.
- **You own everything.** Code, designs and accounts. No lock-in.

Strip under it: *Discover → Blueprint → Build → Launch → Operate* · How we work →

### 7. FAQ preview
The 4 ★ questions from §10, then *All questions →*

### 8. Closing CTA
- **Tell us how your business runs. We'll show you what to build.**
- 30 minutes. No slides. No obligation.
- [Book a discovery call] · or email hello@spartalabs.in

**Removed from the current Home:**
- Problem / converge graphic
- Connected system hub
- Pods
- Full process stack (it moves to /approach)

---

## 5. Services

**Hero:** Three things we build. All start with how you work.
**Sub:** No templates or packages. Every build is scoped after a discovery call.

Each service uses the same block: one-liner · who it's for · what we build (chips) · what you get.

**AI automations: Take the repetitive work off your team.**
- *For:* teams losing hours to copy-paste, follow-ups and chasing documents.
- *We build:*
  - AI assistants trained on your documents
  - WhatsApp and email automation
  - Document and invoice reading
  - Lead follow-up and CRM updates
  - Smart search
  - AI tutors
- *You get:* a working automation wired into your tools, a short team guide, and monitoring.

**Websites and e-commerce: A site that makes a serious business look serious.**
- *For:* businesses with a slow, dated or hard-to-update site, and brands ready to sell online.
- *We build:*
  - Business websites
  - Online stores
  - Booking and enquiry flows
  - Customer portals
  - Editable content
- *You get:* a fast, mobile-first site with SEO basics, analytics and team training.

**Internal software: One system for the way your team actually works.**
- *For:* teams running on spreadsheets and disconnected tools, where no two reports agree.
- *We build:*
  - Operations platforms
  - CRMs and ERPs
  - Approval workflows
  - Dashboards
  - Staff and field apps
  - Integrations
- *You get:* one source of truth, role-based access and full code ownership.

**Also available:** Mobile apps (iOS and Android) · Brand and product concept · Operate and support.

**How we price**

| Model | Best for | How it works |
|---|---|---|
| Fixed scope | A clearly defined build | One price after discovery, paid by milestone |
| Dedicated pod | Ongoing product work | Monthly fee, named lead, weekly demos |
| Retainer and support | Live systems | Monthly monitoring, fixes and improvements |

*Every project is quoted after a free discovery call.*

**Tech we use:** a logo row. `[fill: the real stack]`

**Close:** Not sure what you need? Most clients aren't. Tell us the problem. [Book a discovery call]

---

## 6. For agencies (new)

**Hero:** Your client asked for software. Say yes.
**Sub:** We build it under your brand. You keep the client and the margin.
**Buttons:** [Book a partner call] · See the process ↓

**What we build for you:**
- Websites and stores
- Client portals and dashboards
- AI chatbots and automations
- CRM and tool integrations
- Internal tools and web apps
- Mobile apps

**How it works**
1. **You bring the brief.** We join the call, or stay in the background.
2. **We quote in `[fill: 3]` working days.** A fixed price you can mark up.
3. **We build, you present.** Weekly demos come to you first.
4. **We hand over.** Code, logins and documents go to you or your client.
5. **We stay on.** Optional monthly support, still under your name.

**Our promises to partners** (checklist)
- ✓ NDA signed before you share any client detail.
- ✓ White-label by default: our name never appears in the work or the code.
- ✓ We never contact, pitch or accept work from your clients. This is written into the agreement.
- ✓ One named lead, with `[fill: 4]` hours of overlap with your time zone.
- ✓ Fixed quotes, so your margin is protected.
- ✓ All code and IP transfer on payment.

**Three ways to work:** Per project · Dedicated developer or pod · Overflow partner.

**Start small:** Try us on one small paid project before anything bigger.

**Proof:** the agency showcase case study, plus `[agency testimonial, when available]`.

**Close:** Add software to your services without hiring developers. [Book a partner call]

---

## 7. Work

**Hero:** Systems built around real workflows.
**Sub:** Client names are shared with permission. Where they aren't, the work speaks.
**Filters:** All · Education · Film and media · Advertising · Operations · AI

**Case template:** every case is 1–2 lines per part, readable in 20 seconds.

| Part | Content |
|---|---|
| The situation | What was broken |
| What we built | The system |
| What changed | One real metric `[fill]` |
| Built with | The stack `[fill]` |

**Cases**

1. **TrackBit, a school operating system** · Education · trackbit.in
   - *Situation:* Attendance, syllabus, exams and fees are spread across registers, spreadsheets and chats.
   - *Built:* 10 modules: attendance, syllabus, teacher load, records, exams, support bands, tasks, fees, events, parent portal.
   - *Changed:* A period closes in one tap, in under 30 seconds. Directors see everything live. `[fill: schools / students]`
2. **Multi-campus school platform** · Education *(merge into 1 if it is TrackBit)*
   - *Situation:* Every campus kept its own spreadsheets, so no two reports agreed.
   - *Built:* One platform with shared records, role-based access and group reports.
   - *Changed:* `[fill: campuses and students; report time before vs after]`
3. **AI learning platform, a personal university** · AI · Education · *In build*
   - *Situation:* Courses are fixed, so learners stitch together videos and chats.
   - *Building:* An AI tutor that builds the curriculum, teaches, tests and adapts.
   - *Status:* `[fill: launch date or beta link]`
4. **Production management for a film house** · Film and media
   - *Situation:* Approvals got lost between email, chats and departments.
   - *Built:* Schedules, asset review and sign-off in one place. Two projects delivered for the same client.
   - *Changed:* `[fill]`
5. **Brand showcase site for an ad agency** · Advertising
   - *Situation:* A slow, dated site undersold the agency's work.
   - *Built:* A fast showcase site the team updates after every campaign.
   - *Changed:* `[fill: load time or publish speed]`

---

## 8. Approach

**Hero:** Most software asks your business to change. We build it the other way round.
**Sub:** Five stages. You always know what's happening, what's next and what it costs.

**Stages** (vertical list, 3 short fields each)

| Stage | What happens | You get | We need |
|---|---|---|---|
| 01 Discover | We map how the work really happens | A workflow map and first fixes | 2–3 short sessions |
| 02 Blueprint | We design the system and plan the build | Screens, a dated plan, a fixed price | Scope sign-off |
| 03 Build | Two-week sprints | A live demo every week | 30 minutes a week |
| 04 Launch | Security, testing, migration, training | A live system your team can use | Go-live approval |
| 05 Operate | Monitoring and monthly improvements | A system that grows with you | Next month's priorities |

**How we work**
- **Early warnings, not late surprises.**
- **We say no to the wrong work.**
- **Decisions are written down.**
- **You leave independent.**

**Agency line:** Same process, white-labelled. Demos come to you first. → For agencies

**Close:** [Book a discovery call]

---

## 9. About

**Hero:** Small team. Serious systems.
**Sub:** Founded in 2025 by Salman and Rakesh to build software that fits how businesses already work.

**Why "Sparta"**
- Small, disciplined teams that held their own against far bigger forces. *Spartan*: nothing unnecessary.
- **Labs** is how we get there: we test, prototype and show you something working every week.

**Our story** `[edit to truth]`
- We started with a school drowning in spreadsheets and a production house losing approvals in chats. The problem was never a lack of software. It was software that didn't fit.
- That habit of watching the work first became our method, and one of those builds became TrackBit.

**Founders:** 2 cards, each with a photo, name, role, one line and LinkedIn.
- **Salman**, Co-founder, `[role]`. `[one line]`
- **Rakesh**, Co-founder, `[role]`. `[one line]`

**What we believe**
1. You hear bad news early.
2. We turn down work we're wrong for.
3. We write down every decision.
4. You never depend on us.

**How we're organised:** One named lead on every project, backed by specialists. Chips: Product and UX · Frontend · Backend · Mobile · AI · QA · DevOps · Design.

**Close:** Want to see if we're a fit? [Book a discovery call]

---

## 10. FAQ (new, `/faq`, plus FAQPage JSON-LD)

Two tabs. ★ marks the 4 questions shown on Home.

**For businesses**
1. ★ **How much does a project cost?** We quote after a free discovery call: a fixed price or a monthly plan, in writing, before work starts.
2. ★ **How long does it take?** Websites usually take `[fill: 3–6]` weeks and internal tools `[fill: 8–16]`. You get a dated plan after Blueprint.
3. ★ **Who owns the code?** You do. Code, designs, documents and accounts are handed over on payment.
4. **Can you work with our existing tools?** Yes. We connect to Google Workspace, WhatsApp, payments, accounting and CRMs rather than replacing them.
5. **What happens after launch?** You take it in-house, or keep us on a monthly support plan.
6. **Do you work with international clients?** Yes, with clients in India, the US and the UAE, and `[fill: 4]` hours of daily overlap with your day.
7. **How do payments work?** Fixed-scope work is paid by milestone and monthly plans monthly. Bank transfer `[or Wise / Payoneer]`.

**For agencies**
8. ★ **Will my client know you built it?** No. We work under your brand and under NDA.
9. **Will you ever approach my client?** Never. A non-solicit clause is in our partner agreement.
10. **How fast can you quote?** Within `[fill: 3]` working days of a clear brief.
11. **Can we start small?** Yes. Most partners start with one small paid project.
12. **Can we get a dedicated developer?** Yes. Monthly capacity across your clients, with a named lead reporting to you.

---

## 11. Insights (new, gated)

- **Gate:** keep it out of the footer and sitemap until 3 real posts are published.
- **Listing card:** title · date · topic · one-line excerpt.
- **Topics:** AI automation · Internal tools · Websites · Working with agencies.
- **Article template:** title → one-line summary → body (short sections) → author → CTA: *Tell us how your business runs.*
- **First three posts, from real work:**
  1. Why we map your workflow before writing code
  2. From spreadsheets to one system: the TrackBit story
  3. White-label development: what agencies should demand from a partner

## 12. Careers (new, footer only)

**Hero:** Build serious systems with a small team.
**How we work:** 3 lines.
- Named ownership.
- A demo every week.
- Nothing unnecessary.

**Roles:** Show real roles only, as rows: title · type · location · Apply.
**Empty state:** No open roles right now. Send us your work → `[fill: careers email]`

## 13. Contact

**Hero:** Tell us how your business runs.
**Sub:** We reply within one working day. If we're not the right fit, we'll say so.

**Form**

| Field | Rule |
|---|---|
| Name | Required |
| Work email | Required |
| Company | Required |
| Country | Required |
| **I am** | Business looking to build / Agency with a client project |
| What do you need? | AI automation / Website or store / Internal software / Not sure yet |
| Phone | Optional |
| Tell us a bit about it | Optional |
| Button | **Send** |

**Beside the form:**
- hello@spartalabs.in
- +91 79939 91162 · +91 90305 95999
- `[WhatsApp]`
- `[Booking link]`
- Hours: `[fill]`, with late calls for US and UK clients
- Brochure (PDF)
- **No city.**

**After submit:** Thanks. We'll reply within one working day. Want to skip the wait? [Book a call now]

## 14. Legal

- **Privacy** and **Terms:** keep the existing pages and fill in the legal entity name.
- **Cookies** (new): what we set (essential, and analytics if enabled), why, and how to opt out. Date-stamped.

---

## 15. SEO titles and descriptions

Titles are 60 characters or fewer; descriptions are 155 or fewer.

| Page | Title | Description |
|---|---|---|
| Home | Sparta Labs — Custom Software, AI Automation & Websites | We study how your business runs, then build the software that fits it. AI automations, custom websites and internal tools for businesses and agencies. |
| Services | Services — AI Automation, Websites, Internal Software | AI automations, custom websites and e-commerce, and internal software built around your workflow. Fixed quotes after a free discovery call. |
| For agencies | White-Label Development Partner for Agencies — Sparta Labs | Offer websites, apps and AI automations under your brand. NDA, no client contact, fixed quotes and full code handover. Start with one small project. |
| Work | Our Work — Case Studies — Sparta Labs | School platforms, AI learning tools, production management and agency websites, each built around how the client really works. |
| Approach | How We Work — Discover, Build, Launch — Sparta Labs | Five stages, two-week sprints and a live demo every week. See exactly how a Sparta Labs project runs from discovery to support. |
| About | About Sparta Labs — Custom Software Studio | Founded in 2025 by Salman and Rakesh. A small, disciplined team building software that fits how businesses already work. |
| FAQ | FAQ — Sparta Labs | Cost, timelines, code ownership and white-label work: straight answers to what people ask before a discovery call. |
| Insights | Insights — Sparta Labs | Short, practical notes on AI automation, internal tools and websites, from the projects we build. |
| Careers | Careers — Sparta Labs | Build serious systems with a small, disciplined team. See open roles or send us your work. |
| Contact | Contact Sparta Labs — Book a Discovery Call | Tell us how your business runs. We reply within one working day and book a 30-minute call if we're a fit. |
| Cookies | Cookie Policy — Sparta Labs | Which cookies spartalabs.in uses, why, and how to control them. |

---

## 16. Launch checklist

Hidden until filled:

- [ ] Confirm whether the multi-campus platform is TrackBit (merge or keep separate)
- [ ] 2–3 testimonials (name, role, company)
- [ ] Permission to name clients, or keep them anonymous
- [ ] One real metric per case study
- [ ] Projects delivered since 2025
- [ ] Founder roles, one-line bios, photos, LinkedIn
- [ ] Real tech stack
- [ ] WhatsApp link, booking link, working hours, time-zone overlap
- [ ] Quote turnaround for agencies (days)
- [ ] Typical timelines for websites and internal tools
- [ ] Legal entity name
- [ ] Careers email and any real open roles
- [ ] 3 Insights posts before /insights goes live
- [ ] Confirm the country list (India, US, UAE, others?)
