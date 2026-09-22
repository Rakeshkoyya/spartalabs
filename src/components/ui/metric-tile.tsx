import type { Metric } from "@/content/metrics";
import { cn } from "@/lib/utils";

/**
 * The brochure's stats bar cell: a large Outfit figure with any trailing
 * symbol picked out in cyan.
 *
 * An unconfirmed figure stays fully legible but drops to muted with a dashed
 * rule under it, so it reads as a placeholder in review without looking like a
 * rendering bug — and can never quietly pass for a verified number.
 */
export function MetricTile({ metric, className }: { metric: Metric; className?: string }) {
  const match = /^(\d+)(\D*)$/.exec(metric.value);

  return (
    <div className={cn("h-full px-5 py-6 sm:px-6", className)}>
      <span
        data-pending={metric.pending ? "" : undefined}
        title={metric.pending ? "Unconfirmed figure — pending client sign-off" : undefined}
        className={cn(
          "tabular font-display inline-block text-[clamp(2.25rem,1.8rem+1.6vw,3.25rem)] leading-none font-semibold tracking-[-0.02em]",
          metric.pending && "border-hairline-strong text-muted border-b border-dashed",
        )}
      >
        {match ? (
          <>
            {match[1]}
            <span className="text-accent">{match[2]}</span>
          </>
        ) : (
          metric.value
        )}
      </span>
      <span className="text-muted mt-3 block max-w-[24ch] text-sm leading-snug">
        {metric.label}
      </span>
    </div>
  );
}
