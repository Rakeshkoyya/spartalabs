import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  // A preview deploy serves a closed sign rather than a second copy of the site.
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
