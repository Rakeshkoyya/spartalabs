import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Spellings people actually type when they search for the company. Fed to the
 * Organization and WebSite schema so Google ties every variant to one entity.
 */
export const brandAliases = [
  "Spartalabs",
  "SpartaLabs",
  "Sparta Labs Hyderabad",
  "Sparta Labs India",
  site.domain,
];

/**
 * Where the company is and whom it serves. Local intent ("IT company in
 * Hyderabad") is how most business owners search, so the city is named in the
 * title, description, schema and the /it-services-hyderabad landing page.
 */
export const serviceArea = {
  city: "Hyderabad",
  region: "Telangana",
  country: "India",
  /** Neighbourhoods and satellite cities the landing page names. */
  localities: [
    "HITEC City",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
    "Kukatpally",
    "Banjara Hills",
    "Jubilee Hills",
    "Begumpet",
    "Ameerpet",
    "Secunderabad",
    "Uppal",
    "LB Nagar",
    "Shamshabad",
    "Kompally",
  ],
} as const;

/** Google ignores meta keywords; Bing and smaller engines still read them. */
export const keywords = [
  "Sparta Labs",
  "Spartalabs",
  "spartalabs.in",
  "Sparta Labs Hyderabad",
  "IT services company in Hyderabad",
  "IT company in Hyderabad",
  "best IT services company in Hyderabad",
  "reliable IT service provider Hyderabad",
  "software development company in Hyderabad",
  "website development company in Hyderabad",
  "web design company Hyderabad",
  "mobile app development company in Hyderabad",
  "AI development company Hyderabad",
  "AI automation Hyderabad",
  "custom software development Hyderabad",
  "IT solutions for small business Hyderabad",
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

export const seoTitle = `${site.name} (Spartalabs) — IT Services & Software Development Company in Hyderabad`;

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
