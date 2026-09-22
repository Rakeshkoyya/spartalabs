import { faq } from "@/content/faq";
import { company, contact, site, siteUrl } from "@/content/site";

/** Only emits fields that have real values — partial structured data beats wrong. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName ?? site.name,
    alternateName: site.name,
    url: siteUrl(),
    description: site.description,
    email: contact.email,
    ...(company.founded ? { foundingDate: company.founded } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(company.city
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: company.city,
            ...(company.region ? { addressRegion: company.region } : {}),
            addressCountry: company.country,
          },
        }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl(),
    inLanguage: site.locale,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
