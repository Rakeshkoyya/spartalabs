import { CalendarCheck } from "lucide-react";
import { processSteps } from "@/content/process";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * Brochure page seven. It answers the real reason buyers say no — not doubt
 * about capability, but the fear of disappearing into a black box for three
 * months — so every stage names what the client holds at the end of it.
 *
 * The stages pin and stack as you scroll (motion.css, "PROCESS STACK"): each
 * one gates the next, and the stack makes that literal. Short or narrow
 * screens get a plain list.
 */
export function Process() {
  return (
    <Section id="process" label="How we work" tone="surface">
      <SectionHeader
        index="06"
        kicker="How we work"
        title="A clear path from first call to a system that runs."
        lede="Five stages, in this order, on every engagement. Each one gates the next."
      />

      <ol className="stack mt-14">
        {processSteps.map((step, index) => (
          <li key={step.id} style={{ "--i": index } as React.CSSProperties}>
            <article className="stack-card bg-page border-hairline grid gap-6 rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-lift)] sm:p-8 md:grid-cols-[6.5rem_1fr_17rem] md:items-start md:gap-8">
              <span
                aria-hidden
                className="font-display text-accent-core on-dark:text-accent-bright text-[clamp(3rem,2.4rem+2vw,4.5rem)] leading-[0.85] font-semibold tracking-[-0.04em]"
              >
                {step.id}
              </span>
              <div>
                <p className="text-muted font-mono text-[0.8125rem]">
                  Stage {Number(step.id)} of {processSteps.length}
                </p>
                <h3 className="text-h3 mt-2 font-semibold">{step.title}</h3>
                <p className="text-muted mt-2 max-w-[56ch]">{step.body}</p>
              </div>
              <div className="bg-accent-wash text-accent-wash-ink rounded-xl px-4 py-3.5 text-sm">
                <span className="font-label text-accent mb-1 block text-[0.6875rem] font-semibold tracking-[0.16em] uppercase">
                  You get
                </span>
                {step.youGet}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div
        data-lock=""
        className="tone-dark crest-deep mt-14 flex flex-col gap-4 rounded-[var(--radius-card)] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
      >
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.3)]">
          <CalendarCheck aria-hidden className="size-7" strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            You see it working, every single week.
          </h3>
          <p className="mt-1 text-muted">
            No black-box months and no surprises at the end. Feedback at a Friday demo is cheap;
            feedback after launch is not.
          </p>
        </div>
      </div>
    </Section>
  );
}
