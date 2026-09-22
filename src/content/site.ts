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
  tagline: "Software built around how your business actually runs.",
  /** The line under the logo. */
  motto: ["Ideas", "Products", "Real impact"],
  description:
    "Sparta Labs studies your operations first, then designs and builds the system your team needs — custom business platforms, websites, mobile apps, AI and automation, under one plan. A dedicated specialist pod on every engagement.",
  locale: "en-IN",
} as const;

/** TODO(content): supplied by the client before launch. */
/**
 * The canonical origin for this deployment.
 *
 * Set NEXT_PUBLIC_SITE_URL to https://spartalabs.in on the Vercel production
 * environment so canonicals and structured data name the real domain even
 * before DNS is pointed. Preview deploys fall back to their own URL, which
 * keeps their metadata self-consistent instead of advertising production.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return site.url;
}

/**
 * Preview deploys must never be indexed: a *.vercel.app copy of the site
 * competing with spartalabs.in in search results is a self-inflicted wound.
 * Anything that is not a Vercel preview is treated as indexable, so a
 * non-Vercel host is never accidentally hidden.
 */
export const isIndexable =
  process.env.VERCEL_ENV !== "preview" && process.env.VERCEL_ENV !== "development";

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

/** TODO(content): WhatsApp before launch — some buyers never use a form. */
export const contact: {
  email: string;
  phones: string[];
  whatsapp: string | null;
  responseTime: string;
} = {
  email: "hello@spartalabs.in",
  phones: ["+91 79939 91162", "+91 90305 95999"],
  whatsapp: null,
  responseTime: "within one working day",
};

/** Five items maximum. Contact is the CTA, so it does not also take a nav slot. */
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
] as const;

export const primaryCta = { label: "Book a discovery call", href: "/contact" } as const;

/**
 * The client brochure, served from /public. A copy of
 * brochure/Sparta-Labs-Brochure.pdf — re-copy it whenever the PDF is rebuilt.
 */
export const brochure = {
  href: "/sparta-labs-brochure.pdf",
  fileName: "Sparta-Labs-Brochure.pdf",
  label: "Download brochure",
  meta: "PDF · 12 pages · 5 MB",
} as const;

/** The service lines printed under the logo and on the brochure cover. */
export const serviceLines = [
  "Websites",
  "Apps",
  "AI Automations",
  "AI Solutions",
  "Custom Platforms",
] as const;

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const social: { label: string; href: string }[] = [
  // TODO(content): confirm handles before launch.
];
