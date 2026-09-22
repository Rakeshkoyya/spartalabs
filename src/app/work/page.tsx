import type { Metadata } from "next";
import Link from "next/link";
import { sectors, work } from "@/content/work";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { StandardCard } from "@/components/work/case-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Delivered systems across education, film and media, advertising and operations — described by sector and outcome.",
};

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

      <Section>
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
        "text-label rounded-[var(--radius-hairline)] border px-3 py-1.5 font-mono tracking-[0.1em] uppercase transition-colors duration-200",
        active
          ? "border-accent-core bg-accent-wash text-accent"
          : "border-hairline-strong text-muted hover:border-accent-core hover:text-accent",
      )}
    >
      {children}
    </Link>
  );
}
