import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { activeSectors, work } from "@/content/work";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { CasePanel } from "@/components/work/case-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Our Work — Case Studies — Sparta Labs",
  description:
    "School platforms, AI learning tools, production management and agency websites, each built around how the client really works.",
  path: "/work",
  absoluteTitle: true,
});

/**
 * Every case study, whole, on one page. Filtering runs through the query
 * string so filtered views are shareable and work without JavaScript.
 */
export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string }>;
}) {
  const { sector } = await searchParams;
  const active = sector && activeSectors.includes(sector) ? sector : null;
  const shown = active ? work.filter((study) => study.sectors.includes(active)) : work;

  return (
    <>
      <PageHero
        kicker="Work"
        title="Systems built around real workflows."
        lede="Client names are shared with permission. Where they aren’t, the work speaks."
      >
        <div className="mt-8">
          <Breadcrumbs trail={[{ label: "Work", href: "/work" }]} />
        </div>
      </PageHero>

      <Section className="topo">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Filter by sector" className="flex flex-wrap items-center gap-2.5">
            <FilterChip href="/work" active={active === null}>
              All
            </FilterChip>
            {activeSectors.map((name) => (
              <FilterChip
                key={name}
                href={`/work?sector=${encodeURIComponent(name)}`}
                active={active === name}
              >
                {name}
              </FilterChip>
            ))}
          </nav>
          <p className="text-muted text-sm">
            {shown.length} {shown.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <ul className="mt-10 flex flex-col gap-6">
          {shown.map((study, index) => (
            <li key={study.slug}>
              <CasePanel study={study} index={index} />
            </li>
          ))}
        </ul>
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
      scroll={false}
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
