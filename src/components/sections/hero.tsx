import { heroMetrics } from "@/content/metrics";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MetricTile } from "@/components/ui/metric-tile";

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden border-b border-hairline">
      <div aria-hidden className="blueprint-grid veil-hero pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[18%] -right-[14%] aspect-square w-[min(760px,88vw)] max-w-full"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 62%)" }}
      />

      <Container className="relative pt-[9.5rem] pb-20 md:pt-[11.5rem] md:pb-28">
        <div className="max-w-[58rem]">
          <span
            data-enter=""
            className="text-label inline-flex items-center gap-2.5 rounded-full border border-hairline px-3.5 py-1.5 font-mono tracking-[0.16em] text-muted uppercase"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-signal" />
            Software engineering studio · India
          </span>

          <h1
            data-enter=""
            style={{ "--enter-delay": "70ms" } as React.CSSProperties}
            className="text-display mt-7 max-w-[21ch] font-display font-bold [text-wrap:normal]"
          >
            We build the systems your organisation <span className="text-accent">runs on.</span>
          </h1>

          <p
            data-enter=""
            style={{ "--enter-delay": "140ms" } as React.CSSProperties}
            className="mt-6 max-w-[56ch] text-[clamp(1rem,0.95rem+0.35vw,1.1875rem)] leading-relaxed text-muted"
          >
            From school platforms and AI-powered learning portals to production and brand systems —
            engineered by a dedicated specialist pod, built to keep running.
          </p>

          <div
            data-enter=""
            style={{ "--enter-delay": "210ms" } as React.CSSProperties}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button href="#contact">Start a conversation</Button>
            <Button href="#work" variant="secondary">
              See our work
            </Button>
          </div>
        </div>

        <ul
          data-enter=""
          style={{ "--enter-delay": "280ms" } as React.CSSProperties}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-hairline md:mt-16 md:grid-cols-4"
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
