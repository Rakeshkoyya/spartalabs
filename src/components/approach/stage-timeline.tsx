import type { LucideIcon } from "lucide-react";
import { Activity, Code, Gift, Handshake, PencilRuler, Rocket, Search } from "lucide-react";
import type { ProcessStep } from "@/content/process";

/** One glyph per stage, in stage order. */
const stageIcons: LucideIcon[] = [Search, PencilRuler, Code, Rocket, Activity];

/**
 * The five stages as a vertical timeline: a numbered node on a gradient rail,
 * and a card per stage that separates what we do from what each side brings.
 */
export function StageTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative flex flex-col gap-6">
      <span
        aria-hidden
        className="absolute top-7 bottom-7 left-7 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-[var(--accent-core)] via-[var(--accent-bright)] to-transparent opacity-50"
      />
      {steps.map((step, index) => {
        const Icon = stageIcons[index];
        return (
          <li
            key={step.id}
            data-lock=""
            style={{ "--m-delay": `${index * 60}ms` } as React.CSSProperties}
            className="relative grid grid-cols-[3.5rem_1fr] gap-4 sm:gap-6"
          >
            <span className="crest-deep font-display ring-page relative z-10 grid size-14 place-items-center rounded-full text-lg font-semibold text-white shadow-[0_12px_28px_-12px_rgb(0_60_160/0.7)] ring-8">
              {step.id}
            </span>

            <article className="card spotlight overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-start gap-4 p-6 sm:p-7">
                {Icon ? (
                  <Icon
                    aria-hidden
                    className="text-accent-core mt-1 size-6 shrink-0"
                    strokeWidth={1.75}
                  />
                ) : null}
                <div>
                  <h3 className="text-h3 font-display font-semibold tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-1.5 text-base">{step.happens}</p>
                </div>
              </div>
              <dl className="border-hairline bg-hairline grid gap-px border-t sm:grid-cols-2">
                <Detail icon={Gift} label="You get">
                  {step.youGet}
                </Detail>
                <Detail icon={Handshake} label="We need from you">
                  {step.weNeed}
                </Detail>
              </dl>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface flex gap-3 px-6 py-4 sm:px-7">
      <Icon aria-hidden className="text-accent mt-0.5 size-4 shrink-0" />
      <div>
        <dt className="text-label text-accent font-label tracking-[0.14em] uppercase">{label}</dt>
        <dd className="mt-1 text-[0.9375rem]">{children}</dd>
      </div>
    </div>
  );
}
