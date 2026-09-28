import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { insights, insightsLive } from "@/content/insights";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Insights — Sparta Labs",
  description:
    "Short, practical notes on AI automation, internal tools and websites, from the projects we build.",
  path: "/insights",
  absoluteTitle: true,
});

/** Gated: 404s until `insightsLive` (three real posts). A thin blog hurts more than none. */
export default function InsightsPage() {
  if (!insightsLive) notFound();

  const posts = [...insights].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero kicker="Insights" title="Notes from the work.">
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Insights", href: "/insights" }]} />
        </div>
      </PageHero>

      <Section>
        <ul className="border-hairline grid border-t">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/insights/${post.slug}`}
                className="border-hairline group grid gap-2 border-b py-7 sm:grid-cols-[9rem_1fr_auto] sm:gap-8"
              >
                <span className="text-muted text-sm">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="text-accent block">{post.topic}</span>
                </span>
                <span>
                  <span className="font-display group-hover:text-accent block text-xl font-semibold transition-colors">
                    {post.title}
                  </span>
                  <span className="text-muted mt-1 block text-[0.9375rem]">{post.summary}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="text-muted group-hover:text-accent hidden size-5 sm:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
