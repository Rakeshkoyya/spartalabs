/** Insights — docs/SITE-BLUEPRINT.md §11. Short articles from real work. */

export const insightTopics = [
  "AI automation",
  "Internal tools",
  "Websites",
  "Working with agencies",
] as const;

export type InsightTopic = (typeof insightTopics)[number];

export type InsightSection = { heading?: string; paragraphs: string[] };

export type Insight = {
  slug: string;
  title: string;
  /** One line, used on the listing and as the meta description. */
  summary: string;
  topic: InsightTopic;
  /** ISO date, e.g. "2026-10-01". */
  date: string;
  author: string;
  body: InsightSection[];
};

/**
 * TODO(content): write the first three posts —
 * "Why we map your workflow before writing code",
 * "From spreadsheets to one system: the TrackBit story",
 * "White-label development: what agencies should demand from a partner".
 */
export const insights: Insight[] = [];

/** The section stays out of the footer and sitemap, and 404s, until three posts exist. */
export const MIN_POSTS_TO_LAUNCH = 3;
export const insightsLive = insights.length >= MIN_POSTS_TO_LAUNCH;

export function getInsight(slug: string) {
  return insights.find((post) => post.slug === slug);
}
