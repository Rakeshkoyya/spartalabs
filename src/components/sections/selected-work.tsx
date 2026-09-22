import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { work } from "@/content/work";
import { FeatureCard, StandardCard } from "@/components/work/case-card";
import { Section, SectionHeader } from "@/components/ui/section";

export function SelectedWork() {
  const [featured, ...rest] = work;

  return (
    <Section id="work" label="Selected work" className="topo">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          kicker="Selected work"
          title="Real systems, running in real organisations."
        />
        <Link
          href="/work"
          className="text-accent font-display flex items-center gap-1.5 text-sm font-semibold hover:underline"
        >
          All work <ArrowRight aria-hidden className="size-4" />
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

      <p className="text-muted mt-6 flex items-center gap-2 text-sm">
        <Lock aria-hidden className="size-3.5" />
        Client names are withheld to protect confidentiality. References are available on request.
      </p>
    </Section>
  );
}
