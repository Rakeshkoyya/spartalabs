import { guarantees, processSteps } from "@/content/process";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * The most important section on the page. It answers the real reason
 * mid-market buyers say no — not doubt about capability, but the fear of
 * disappearing into a black box for three months.
 */
export function Process() {
  return (
    <Section id="approach">
      <SectionHeader
        kicker="How we work"
        title="You will always know where your project is."
        lede="Five stages, in this order, on every engagement. The numbering is not decoration — each one gates the next."
      />

      <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-5">
        {processSteps.map((step) => (
          <li key={step.id} className="relative border-t border-hairline pt-5">
            <span aria-hidden className="absolute -top-px left-0 h-px w-10 bg-accent-core" />
            <span className="text-label font-mono tracking-[0.12em] text-accent">{step.id}</span>
            <h3 className="mt-2 font-display text-[1.0625rem] font-semibold tracking-[-0.01em]">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {guarantees.map((guarantee) => (
          <li key={guarantee.title}>
            <div className="h-full rounded-[var(--radius-card)] border border-hairline bg-surface p-6">
              <h3 className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em]">
                {guarantee.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] text-muted">{guarantee.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
