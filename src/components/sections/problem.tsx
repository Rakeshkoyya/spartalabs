import Link from "next/link";
import { ArrowRight, CircleX } from "lucide-react";
import { painPoints } from "@/content/home";
import { industries } from "@/content/industries";
import { industryIcons } from "@/components/brand/icons";
import { Section, SectionHeader } from "@/components/ui/section";

/** Brochure page two: who we are, the pains we hear, and where we have delivered. */
export function Problem() {
  return (
    <Section id="about" label="Who we are" className="topo">
      <SectionHeader
        kicker="Who we are"
        title="Most software asks your business to change."
        highlight="We build it the other way round."
        className="max-w-[900px]"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div data-lock="" className="flex flex-col gap-4">
          <p className="text-ink text-xl leading-relaxed">
            Sparta Labs is an IT solutions company that designs, builds and runs the systems
            businesses depend on.
          </p>
          <p className="text-muted">
            Most businesses do not need more software. They need software that fits how they
            actually work. Most of what they are sold does the opposite, asking a school, a
            production house or a distributor to rearrange itself around a product built for someone
            else.
          </p>
          <p className="text-muted">
            We start with how the work really happens, not how the org chart says it does, and we
            build the system to match. It is slower to begin and far faster to live with.
          </p>
          <p className="text-muted">
            Every engagement gets a specialist for every layer of the system, and one named lead who
            owns the whole thing from the first call to long after launch.
          </p>
        </div>

        <div
          data-lock=""
          style={{ "--m-delay": "120ms" } as React.CSSProperties}
          className="card p-6 sm:p-7"
        >
          <h3 className="font-display text-xl font-semibold">Does this sound familiar?</h3>
          <ul className="mt-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="border-hairline text-muted flex gap-3 border-t py-3 text-[0.9375rem] first:border-t-0"
              >
                <CircleX aria-hidden className="text-danger mt-0.5 size-4.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="text-accent font-display mt-4 flex items-center gap-2 font-semibold hover:underline"
          >
            <ArrowRight aria-hidden className="size-4" />
            These are exactly the problems we solve.
          </Link>
        </div>
      </div>

      <h3 className="font-display mt-16 text-lg font-semibold">Industries we have delivered for</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => {
          const Icon = industryIcons[industry.name];
          return (
            <li key={industry.name}>
              <Link
                href={`/work?sector=${encodeURIComponent(industry.name)}`}
                className="card group hover:border-accent/50 flex h-full flex-col gap-2 p-5 transition-[border-color,transform] duration-200 motion-safe:hover:-translate-y-0.5"
              >
                <span className="font-display flex items-center gap-2 font-semibold">
                  {Icon ? <Icon aria-hidden className="text-accent-core size-4.5" /> : null}
                  <span className="group-hover:text-accent transition-colors">{industry.name}</span>
                </span>
                <span className="text-muted text-sm">{industry.proof}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
