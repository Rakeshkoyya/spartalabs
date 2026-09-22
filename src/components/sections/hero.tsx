import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroMetrics } from "@/content/metrics";
import { serviceLines, site } from "@/content/site";
import { FlowLines } from "@/components/brand/flow-lines";
import { serviceIcons } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MetricTile } from "@/components/ui/metric-tile";

/**
 * The brochure cover, as a page opener: navy field, the helmet standing off
 * the right edge, flow lines sweeping under the headline.
 *
 * Plays from first paint via `data-enter` rather than waiting on the scroll
 * observer — the opener should start drawing before hydration finishes.
 */
export function Hero() {
  return (
    <div id="top" data-spine-label="Top" className="band-dark relative overflow-hidden">
      <FlowLines className="top-[38%] h-[62%]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[10%] -right-[12%] aspect-square w-[min(820px,95vw)]"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 62%)" }}
      />

      <Container className="relative pt-[7.5rem] pb-16 md:pt-[9rem] md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div>
            <span
              data-enter="lock"
              className="text-label border-hairline text-muted font-label inline-flex items-center gap-2.5 rounded-full border bg-white/[0.04] px-3.5 py-1.5 tracking-[0.18em] uppercase"
            >
              <span
                aria-hidden
                className="bg-accent size-1.5 rounded-full shadow-[0_0_10px_var(--accent)]"
              />
              IT solutions company · India
            </span>

            <h1
              data-enter="wipe"
              style={{ "--enter-delay": "120ms" } as React.CSSProperties}
              className="text-display font-display mt-7 max-w-[16ch] font-semibold text-white"
            >
              Software built around <span className="text-sky-400">how your business</span> actually
              runs.
            </h1>

            <p
              data-enter="lock"
              style={{ "--enter-delay": "300ms" } as React.CSSProperties}
              className="mt-6 max-w-[52ch] text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-relaxed text-[#c3d0e4]"
            >
              We study your operations first, then design and build the system your team needs.
              Websites, apps, AI and automation, under one plan.
            </p>

            <div
              data-enter="lock"
              style={{ "--enter-delay": "390ms" } as React.CSSProperties}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button href="/contact">
                Book a discovery call
                <ArrowRight aria-hidden className="size-4" />
              </Button>
              <Button href="#work" variant="secondary">
                See our work
              </Button>
            </div>
          </div>

          <div
            data-enter="lock"
            style={{ "--enter-delay": "200ms" } as React.CSSProperties}
            className="relative mx-auto hidden w-full max-w-[420px] lg:block"
          >
            <Image
              src="/brand/logo-mark-white.png"
              alt=""
              aria-hidden
              width={600}
              height={693}
              priority
              sizes="420px"
              className="h-auto w-full drop-shadow-[0_30px_60px_rgb(0_40_120/0.6)]"
            />
          </div>
        </div>

        <ul
          data-enter="lock"
          style={{ "--enter-delay": "460ms" } as React.CSSProperties}
          className="mt-12 flex flex-wrap gap-2.5"
          aria-label="What we build"
        >
          {serviceLines.map((line) => {
            const Icon = serviceIcons[line];
            return (
              <li
                key={line}
                className="border-hairline text-ink inline-flex items-center gap-2 rounded-full border bg-white/[0.04] px-4 py-2 text-sm font-medium"
              >
                {Icon ? (
                  <Icon aria-hidden className="text-accent size-4" strokeWidth={1.75} />
                ) : null}
                {line}
              </li>
            );
          })}
        </ul>

        <ul
          data-enter="lock"
          style={{ "--enter-delay": "540ms" } as React.CSSProperties}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/10 md:grid-cols-4"
        >
          {heroMetrics.map((metric) => (
            <li key={metric.label} className="bg-[#0a1628]/90 backdrop-blur-sm">
              <MetricTile metric={metric} />
            </li>
          ))}
        </ul>

        <div className="border-hairline text-label font-label mt-10 flex flex-wrap items-center justify-between gap-3 border-t pt-5 tracking-[0.18em] text-[#7f93b3] uppercase">
          <span>{site.domain}</span>
          <span className="flex items-center gap-2.5">
            {site.motto.map((word, index) => (
              <span key={word} className="flex items-center gap-2.5">
                {index > 0 ? <ArrowRight aria-hidden className="size-3" /> : null}
                {word}
              </span>
            ))}
          </span>
        </div>
      </Container>
    </div>
  );
}
