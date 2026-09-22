/**
 * Single source of truth for company facts.
 *
 * Anything the client has not yet supplied is `null` rather than a plausible
 * guess, and the UI renders only what exists. See docs/ACTION-PLAN.md §11 for
 * the outstanding list — `null` here is a content blocker, not a bug.
 */

export const site = {
  name: "Sparta Labs",
  domain: "spartalabs.in",
  url: "https://spartalabs.in",
  tagline: "We build the systems your organisation runs on.",
  description:
    "Sparta Labs designs, builds and runs the software systems organisations depend on — custom platforms, web and mobile products, AI systems, and brand and concept development. A dedicated specialist pod on every engagement.",
  locale: "en-IN",
} as const;

/** TODO(content): supplied by the client before launch. */
export const company: {
  legalName: string | null;
  founded: string | null;
  city: string | null;
  region: string | null;
  country: string;
  addressLines: string[] | null;
  cin: string | null;
  gstin: string | null;
} = {
  legalName: null,
  founded: null,
  city: null,
  region: null,
  country: "India",
  addressLines: null,
  cin: null,
  gstin: null,
};

/** TODO(content): phone and WhatsApp before launch — some buyers never use a form. */
export const contact: {
  email: string;
  phone: string | null;
  whatsapp: string | null;
  responseTime: string;
} = {
  email: "hello@spartalabs.in",
  phone: null,
  whatsapp: null,
  responseTime: "within one working day",
};

/**
 * Phase 2 ships the home page only, so these point at its sections. Phase 3
 * repoints them at the dedicated routes in docs/ACTION-PLAN.md §3.
 */
export const nav = [
  { label: "Services", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#pods" },
] as const;

export const primaryCta = { label: "Start a conversation", href: "#contact" } as const;

export const social: { label: string; href: string }[] = [
  // TODO(content): confirm handles before launch.
];
