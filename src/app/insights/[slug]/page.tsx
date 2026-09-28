import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { getInsight, insights, insightsLive } from "@/content/insights";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightsLive ? insights.map((post) => ({ slug: post.slug })) : [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.summary, path: `/insights/${slug}` });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!insightsLive || !post) notFound();

  return (
    <>
      <PageHero kicker={post.topic} title={post.title} lede={post.summary}>
        <p className="text-muted mt-6 text-sm">
          {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <div className="mt-8">
          <Breadcrumbs
            trail={[
              { label: "Insights", href: "/insights" },
              { label: post.title, href: `/insights/${post.slug}` },
            ]}
          />
        </div>
      </PageHero>

      <Section>
        <Prose>
          {post.body.map((section, index) => (
            <div key={section.heading ?? index} className="flex flex-col gap-5">
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </Prose>
      </Section>

      <CtaBand />
    </>
  );
}
