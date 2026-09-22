import { heroMetrics } from "@/content/metrics";
import { TorchGrid } from "@/components/motion/torch-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MetricTile } from "@/components/ui/metric-tile";

/**
 * Plays from first paint via `data-enter` rather than waiting on the scroll
 * observer — the opener should start drawing before hydration finishes.
 */
export function Hero() {
  return (
    <div
      id="top"
      data-spine-label="Top"
      className="border-hairline relative overflow-hidden border-b"
    >
      <div aria-hidden className="blueprint-grid veil-hero pointer-events-none absolute inset-0" />
      <TorchGrid className="veil-hero pointer-events-none" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[18%] -right-[14%] aspect-square w-[min(760px,88vw)] max-w-full"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 62%)" }}
      />

      <Container className="relative pt-[9.5rem] pb-20 md:pt-[11.5rem] md:pb-28">
        <div className="max-w-[58rem]">
          <span
            data-enter="lock"
            className="text-label border-hairline text-muted inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 font-mono tracking-[0.16em] uppercase"
          >
            <span aria-hidden className="bg-signal size-1.5 rounded-full" />
            Software engineering studio · India
          </span>

          <h1
            data-enter="wipe"
            style={{ "--enter-delay": "120ms" } as React.CSSProperties}
            className="text-display font-display mt-7 max-w-[21ch] font-bold [text-wrap:normal]"
          >
            We build the systems your organisation <span className="text-accent">runs on.</span>
          </h1>

          <p
            data-enter="lock"
            style={{ "--enter-delay": "300ms" } as React.CSSProperties}
            className="text-muted mt-6 max-w-[56ch] text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-relaxed"
          >
            From school platforms and AI-powered learning portals to production and brand systems —
            engineered by a dedicated specialist pod, built to keep running.
          </p>

          <div
            data-enter="lock"
            style={{ "--enter-delay": "390ms" } as React.CSSProperties}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button href="/contact">Start a conversation</Button>
            <Button href="#work" variant="secondary">
              See our work
            </Button>
          </div>
        </div>

        <ul
          data-enter="lock"
          style={{ "--enter-delay": "480ms" } as React.CSSProperties}
          className="border-hairline bg-hairline mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border md:mt-16 md:grid-cols-4"
        >
          {heroMetrics.map((metric) => (
            <li key={metric.label}>
              <MetricTile metric={metric} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
