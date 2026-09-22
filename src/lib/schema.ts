import { faq } from "@/content/faq";
import { capabilities } from "@/content/capabilities";
import { company, contact, site, siteUrl, social } from "@/content/site";
import { brandAliases } from "@/lib/seo";

/** Only emits fields that have real values — partial structured data beats wrong. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl()}/#organization`,
    name: company.legalName ?? site.name,
    alternateName: [site.name, ...brandAliases],
    url: siteUrl(),
    description: site.description,
    email: contact.email,
    logo: `${siteUrl()}/brand/logo-full.png`,
    image: `${siteUrl()}/og.png`,
    areaServed: company.country,
    knowsAbout: capabilities.map((capability) => capability.title),
    contactPoint: contact.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.replace(/\s+/g, ""),
      email: contact.email,
      contactType: "sales",
      areaServed: "IN",
    })),
    ...(social.length ? { sameAs: social.map((profile) => profile.href) } : {}),
    ...(company.founded ? { foundingDate: company.founded } : {}),
    ...(contact.phones.length ? { telephone: contact.phones[0] } : {}),
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
    "@id": `${siteUrl()}/#website`,
    name: site.name,
    alternateName: brandAliases,
    url: siteUrl(),
    publisher: { "@id": `${siteUrl()}/#organization` },
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
