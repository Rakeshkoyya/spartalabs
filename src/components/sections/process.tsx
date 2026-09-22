import { CalendarCheck } from "lucide-react";
import { processSteps } from "@/content/process";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * Brochure page seven. It answers the real reason buyers say no — not doubt
 * about capability, but the fear of disappearing into a black box for three
 * months — so every stage names what the client holds at the end of it.
 */
export function Process() {
  return (
    <Section id="process" label="How we work" tone="surface">
      <SectionHeader
        kicker="How we work"
        title="A clear path from first call to a system that runs."
        lede="Five stages, in this order, on every engagement. Each one gates the next."
      />

      <ol className="relative mt-14 pl-16 before:absolute before:top-2 before:bottom-10 before:left-[1.4rem] before:w-0.5 before:bg-linear-to-b before:from-blue-400 before:via-blue-700 before:to-blue-700/10">
        {processSteps.map((step, index) => (
          <li
            key={step.id}
            data-lock=""
            style={{ "--m-delay": `${index * 80}ms` } as React.CSSProperties}
            className="relative grid gap-4 pb-12 last:pb-0 md:grid-cols-[1fr_18rem] md:gap-10"
          >
            <span
              aria-hidden
              className="border-accent-core bg-surface text-accent font-display absolute top-0 -left-16 grid size-12 place-items-center rounded-full border-2 font-semibold shadow-[0_0_0_6px_var(--surface)]"
            >
              {Number(step.id)}
            </span>
            <div>
              <h3 className="text-h3 mt-1.5 font-semibold">{step.title}</h3>
              <p className="text-muted mt-2 max-w-[56ch]">{step.body}</p>
            </div>
            <div className="bg-accent-wash text-accent-wash-ink self-start rounded-xl px-4 py-3 text-sm">
              <span className="font-label text-accent mb-1 block text-[0.6875rem] font-semibold tracking-[0.16em] uppercase">
                You get
              </span>
              {step.youGet}
            </div>
          </li>
        ))}
      </ol>

      <div
        data-lock=""
        className="tone-dark crest-deep mt-14 flex flex-col gap-4 rounded-[var(--radius-card)] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
      >
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[rgb(25_190_255/0.12)] text-[#19beff] shadow-[inset_0_0_0_1px_rgb(25_190_255/0.3)]">
          <CalendarCheck aria-hidden className="size-7" strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            You see it working, every single week.
          </h3>
          <p className="mt-1 text-[#b7c6dc]">
            No black-box months and no surprises at the end. Feedback at a Friday demo is cheap;
            feedback after launch is not.
          </p>
        </div>
      </div>
    </Section>
  );
}
