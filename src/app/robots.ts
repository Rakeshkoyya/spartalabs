import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/content/site";

/**
 * AI assistants and answer engines, named explicitly. `*` already allows them,
 * but some operators only crawl sites that address their agent by name, and
 * being cited by ChatGPT, Claude, Perplexity or Gemini is now a search channel
 * of its own.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  // A preview deploy serves a closed sign rather than a second copy of the site.
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: aiCrawlers, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${siteUrl()}/sitemap.xml`,
    host: siteUrl(),
  };
}
