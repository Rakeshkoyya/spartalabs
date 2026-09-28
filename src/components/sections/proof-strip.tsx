import { proofMetrics } from "@/content/metrics";
import { CountUp } from "@/components/motion/count-up";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/**
 * True numbers only, set as the leading edge of the sheet that slides over
 * the pinned hero. Unconfirmed figures are dropped, not shown as placeholders.
 */
export function ProofStrip() {
  const metrics = proofMetrics.filter((metric) => !metric.pending);

  return (
    <Section id="proof" label="Sparta Labs in numbers" sheet className="topo !pb-0">
      <ul className="border-hairline grid grid-cols-3 border-y">
        {metrics.map((metric, index) => {
          const match = /^(\d+)(\D*)$/.exec(metric.value);
          return (
            <li
              key={metric.label}
              data-lock=""
              style={{ "--m-delay": `${index * 70}ms` } as React.CSSProperties}
              className={cn(
                "border-hairline px-2 py-7 text-center sm:px-6",
                index < metrics.length - 1 && "border-r",
              )}
            >
              <span className="tabular font-display block text-[clamp(2.25rem,1.8rem+2vw,3.5rem)] leading-none font-semibold tracking-[-0.03em]">
                {match ? (
                  <>
                    <CountUp value={Number(match[1])} />
                    <span className="text-accent-core on-dark:text-accent-bright">{match[2]}</span>
                  </>
                ) : (
                  metric.value
                )}
              </span>
              <span className="text-muted mx-auto mt-3 block max-w-[24ch] text-sm leading-snug">
                {metric.label}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
