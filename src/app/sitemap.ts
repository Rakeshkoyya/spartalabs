import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { insights, insightsLive } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const origin = siteUrl();

  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/agencies", priority: 0.9 },
    { path: "/it-services-hyderabad", priority: 0.9 },
    { path: "/work", priority: 0.9 },
    { path: "/approach", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/careers", priority: 0.4 },
    ...(insightsLive ? [{ path: "/insights", priority: 0.6 }] : []),
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    { path: "/cookies", priority: 0.2 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${origin}${page.path}`,
      lastModified: now,
      priority: page.priority,
    })),
    ...(insightsLive
      ? insights.map((post) => ({
          url: `${origin}/insights/${post.slug}`,
          lastModified: new Date(post.date),
          priority: 0.5,
        }))
      : []),
  ];
}
