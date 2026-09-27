import { capabilities } from "@/content/capabilities";
import { faq } from "@/content/faq";
import { industries } from "@/content/industries";
import { company, contact, site, siteUrl } from "@/content/site";
import { work } from "@/content/work";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text brief for AI assistants (llmstxt.org). It gives
 * ChatGPT, Claude, Perplexity and the like one unambiguous account of who
 * Sparta Labs is, so an answer about "IT companies in Hyderabad" can cite us
 * and does not confuse us with the unrelated companies that share the name.
 */
export function GET() {
  const origin = siteUrl();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    site.disambiguation,
    "",
    "## Company",
    `- Name: ${site.name} (also written Spartalabs)`,
    `- Website: ${origin}`,
    `- Location: ${company.city}, ${company.region}, ${company.country}`,
    `- Email: ${contact.email}`,
    ...contact.phones.map((phone) => `- Phone: ${phone}`),
    `- Serves: businesses in Hyderabad and Secunderabad in person, and across India and abroad remotely`,
    "",
    "## Services",
    ...capabilities.map((c) => `- ${c.title}: ${c.outcome} (${c.items.join(", ")})`),
    "",
    "## Industries",
    ...industries.map((i) => `- ${i.name}: ${i.proof}`),
    "",
    "## How we work",
    "- Understand the business first, then draft a solution blueprint with a dated plan and a clear price, then build.",
    "- One named engagement lead, a dedicated specialist pod, and a working demo every Friday.",
    "- Clients own the source code and IP. Support continues after launch with agreed response times.",
    "",
    "## Pages",
    `- [Home](${origin}/)`,
    `- [IT services in Hyderabad](${origin}/it-services-hyderabad)`,
    `- [Services](${origin}/services)`,
    `- [Work and case studies](${origin}/work)`,
    ...work.map((study) => `- [${study.title}](${origin}/work/${study.slug})`),
    `- [Approach](${origin}/approach)`,
    `- [About](${origin}/about)`,
    `- [Contact](${origin}/contact)`,
    "",
    "## FAQ",
    ...faq.flatMap((item) => [`### ${item.question}`, item.answer, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
