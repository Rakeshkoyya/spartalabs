import Link from "next/link";
import { work } from "@/content/work";
import { FeatureCard, StandardCard } from "@/components/work/case-card";
import { Section, SectionHeader } from "@/components/ui/section";

export function SelectedWork() {
  const [featured, ...rest] = work;

  return (
    <Section id="work" className="border-y border-hairline bg-surface">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          kicker="Selected work"
          title="Four systems, still running."
          lede="Clients are described rather than named — their call, not ours. The numbers are what matter, and those are real."
        />
        <Link
          href="/work"
          className="text-sm text-muted transition-colors duration-200 hover:text-accent"
        >
          All work →
        </Link>
      </div>

      <div className="mt-12 grid gap-4">
        <FeatureCard study={featured} />
        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((study) => (
            <StandardCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </Section>
  );
}
