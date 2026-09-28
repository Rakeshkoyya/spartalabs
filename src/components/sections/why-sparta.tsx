import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyPoints } from "@/content/home";
import { processSteps } from "@/content/process";
import { Section, SectionHeader } from "@/components/ui/section";

export function WhySparta() {
  return (
    <Section id="why" label="Why Sparta Labs" tone="navy" flow>
      <SectionHeader index="01" kicker="Why Sparta Labs" title="Four promises we keep." />

      <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {whyPoints.map((point, index) => (
          <li
            key={point.title}
            data-lock=""
            style={{ "--m-delay": `${index * 70}ms` } as React.CSSProperties}
            className="border-hairline-strong border-t py-6"
          >
            <span className="text-accent-bright font-mono text-[0.8125rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-3 text-[1.25rem] font-semibold tracking-[-0.015em]">
              {point.title}
            </h3>
            <p className="text-muted mt-2 text-[0.9375rem]">{point.body}</p>
          </li>
        ))}
      </ul>

      <Link
        href="/approach"
        className="glass group mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 px-5 py-4 sm:px-6"
      >
        {processSteps.map((step, index) => (
          <span key={step.id} className="font-display flex items-center gap-3 font-medium">
            {index > 0 ? (
              <span aria-hidden className="text-accent-bright">
                →
              </span>
            ) : null}
            {step.title}
          </span>
        ))}
        <span className="text-accent-bright font-display ml-auto inline-flex items-center gap-2 text-sm font-semibold">
          How we work
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </Section>
  );
}
