import Link from "next/link";
import { work } from "@/content/work";
import { FeatureCard, StandardCard } from "@/components/work/case-card";
import { Section, SectionHeader } from "@/components/ui/section";

export function SelectedWork() {
  const [featured, ...rest] = work;

  return (
    <Section id="work" label="Selected work" className="border-hairline bg-surface border-y">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          kicker="Selected work"
          title="Four systems, still running."
          lede="Clients are described rather than named — their call, not ours. The numbers are what matter, and those are real."
        />
        <Link
          href="/work"
          className="text-muted hover:text-accent text-sm transition-colors duration-200"
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
