import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { sectors, work } from "@/content/work";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { StandardCard } from "@/components/work/case-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Work & Case Studies",
  description:
    "Sparta Labs case studies: AI-tutor learning portals, school management platforms, film production and advertising systems — described by sector and outcome.",
  path: "/work",
});

/**
 * Filtering runs on the server through the query string rather than in React
 * state: the URLs are shareable, they work without JavaScript, and the industry
 * tiles on the home page can link straight into a filtered view.
 */
export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string }>;
}) {
  const { sector } = await searchParams;
  const active = sector && sectors.includes(sector) ? sector : null;
  const shown = active ? work.filter((study) => study.sector === active) : work;

  return (
    <>
      <PageHero
        kicker="Selected work"
        title="Systems that are still running."
        lede="Clients are described rather than named — their call, not ours. What matters is what the system does and what it changed."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Work", href: "/work" }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <div className="flex flex-wrap items-center gap-2.5">
          <FilterChip href="/work" active={active === null}>
            All work
          </FilterChip>
          {sectors.map((name) => (
            <FilterChip
              key={name}
              href={`/work?sector=${encodeURIComponent(name)}`}
              active={active === name}
            >
              {name}
            </FilterChip>
          ))}
        </div>

        {shown.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((study) => (
              <li key={study.slug}>
                <StandardCard study={study} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lede text-muted mt-10">
            Nothing in that sector yet — but it is almost certainly a system we have built the shape
            of before.{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Ask us
            </Link>
            .
          </p>
        )}
      </Section>

      <CtaBand />
    </>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={cn(
        "font-display rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
        active
          ? "border-accent-core bg-accent-core text-white"
          : "border-hairline-strong bg-surface text-muted hover:border-accent hover:text-accent",
      )}
    >
      {children}
    </Link>
  );
}
