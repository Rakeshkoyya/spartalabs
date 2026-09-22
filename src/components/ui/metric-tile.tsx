import type { Metric } from "@/content/metrics";
import { cn } from "@/lib/utils";

/**
 * The highest-value trust element on the page.
 *
 * An unconfirmed figure stays fully legible but drops to muted with a dashed
 * rule under it, so it reads as a placeholder in review without looking like a
 * rendering bug — and can never quietly pass for a verified number.
 */
export function MetricTile({ metric, className }: { metric: Metric; className?: string }) {
  return (
    <div className={cn("bg-page h-full px-5 py-5 sm:px-6", className)}>
      <span
        data-pending={metric.pending ? "" : undefined}
        title={metric.pending ? "Unconfirmed figure — pending client sign-off" : undefined}
        className={cn(
          "tabular font-display text-h2 inline-block font-bold",
          metric.pending && "border-hairline-strong text-muted border-b border-dashed",
        )}
      >
        {metric.value}
      </span>
      <span className="text-label text-muted mt-2.5 block font-mono tracking-[0.14em] uppercase">
        {metric.label}
      </span>
    </div>
  );
}
