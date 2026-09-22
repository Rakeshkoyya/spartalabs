import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Spellings people actually type when they search for the company. Fed to the
 * Organization and WebSite schema so Google ties every variant to one entity.
 */
export const brandAliases = ["Spartalabs", "SpartaLabs", "Sparta Labs India", site.domain];

/** Google ignores meta keywords; Bing and smaller engines still read them. */
export const keywords = [
  "Sparta Labs",
  "Spartalabs",
  "spartalabs.in",
  "software development company India",
  "IT solutions company India",
  "custom software development",
  "custom business platforms",
  "web development company",
  "website development",
  "mobile app development",
  "AI solutions",
  "AI automation",
  "business process automation",
  "ERP and CRM development",
  "school management software",
  "SaaS development",
  "product development studio",
  "dedicated development team",
];

export const seoTitle = `${site.name} (Spartalabs) — Custom Software, Web, App & AI Development`;

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

/**
 * Per-page metadata. Every page needs its own canonical and og:url — inheriting
 * the root layout's would tell Google each page is a duplicate of the home page.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as written, skipping the "— Sparta Labs" template. */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
