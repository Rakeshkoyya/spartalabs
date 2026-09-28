import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { serviceLines, site } from "@/content/site";
import { FlowLines } from "@/components/brand/flow-lines";
import { serviceIcons } from "@/components/brand/icons";
import { RiseText } from "@/components/motion/rise-text";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroOrbit } from "./hero-orbit";

/**
 * The brochure cover as a full-viewport opener. The headline rises word by
 * word, then the crest locks in at the hub of one system with the five service
 * lines wired to it — the site's single lead animation.
 *
 * On wide screens the hero pins and the next section slides over it as a
 * sheet, while the content here recedes underneath (motion.css, "SECTION
 * TRANSITIONS"). Everything plays from first paint via `data-enter`.
 */
export function Hero() {
  return (
    <div className="hero-pin">
      <section
        id="top"
        data-spine-label="Top"
        aria-labelledby="hero-title"
        className="band-dark relative flex min-h-svh flex-col overflow-hidden"
      >
        <FlowLines className="bottom-0 h-[46%] min-h-56" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[18%] -right-[10%] aspect-square w-[min(900px,110vw)]"
          style={{ background: "radial-gradient(circle, var(--glow), transparent 62%)" }}
        />
        <Image
          src="/brand/logo-mark-white.png"
          alt=""
          aria-hidden
          width={600}
          height={693}
          className="pointer-events-none absolute top-24 -right-20 w-[62vw] max-w-[360px] opacity-[0.08] lg:hidden"
        />

        <Container className="hero-recede relative flex flex-1 flex-col justify-center pt-28 pb-16 lg:pt-24 lg:pb-12">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-6">
            <div>
              <p
                data-enter="lock"
                className="border-hairline text-muted font-label inline-flex items-center gap-2.5 rounded-full border bg-white/[0.04] px-3.5 py-1.5 text-[0.6875rem] leading-snug tracking-[0.12em] whitespace-nowrap uppercase sm:text-xs sm:tracking-[0.18em]"
              >
                <span
                  aria-hidden
                  className="bg-accent size-1.5 rounded-full shadow-[0_0_10px_var(--accent)]"
                />
                IT services company · Hyderabad, India
              </p>

              <h1
                id="hero-title"
                className="text-display font-display mt-7 max-w-[13ch] font-semibold text-white"
              >
                <RiseText
                  delay={80}
                  parts={[
                    { text: "Software built around" },
                    { text: "how your business", accent: true },
                    { text: "actually runs." },
                  ]}
                />
              </h1>

              <p
                data-enter="lock"
                style={{ "--enter-delay": "520ms" } as React.CSSProperties}
                className="mt-7 max-w-[48ch] text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-relaxed text-[#c3d0e4]"
              >
                We study your operations first, then design and build the system your team needs.
                Websites, apps, AI and automation, under one plan.
              </p>

              <div
                data-enter="lock"
                style={{ "--enter-delay": "620ms" } as React.CSSProperties}
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

              {/* The orbit carries these on wide screens; the list stays for everyone else. */}
              <ul
                data-enter="lock"
                style={{ "--enter-delay": "720ms" } as React.CSSProperties}
                className="mt-10 flex flex-wrap gap-2 lg:sr-only"
                aria-label="What we build"
              >
                {serviceLines.map((line) => {
                  const Icon = serviceIcons[line];
                  return (
                    <li
                      key={line}
                      className="border-hairline text-ink inline-flex items-center gap-2 rounded-full border bg-white/[0.04] px-3.5 py-2 text-sm font-medium"
                    >
                      {Icon ? (
                        <Icon aria-hidden className="text-accent size-4" strokeWidth={1.75} />
                      ) : null}
                      {line}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[540px] lg:block">
              <HeroOrbit />
            </div>
          </div>
        </Container>

        <Container className="relative pb-[calc(var(--sheet-radius)+1.25rem)]">
          <div
            data-enter="fade"
            style={{ "--enter-delay": "1100ms" } as React.CSSProperties}
            className="border-hairline text-label font-label flex items-center justify-between gap-4 border-t pt-5 tracking-[0.18em] text-[#8ea1bf] uppercase"
          >
            <a
              href="#about"
              className="inline-flex min-h-6 items-center gap-2.5 transition-colors duration-200 hover:text-white"
            >
              <ArrowDown aria-hidden className="size-3.5" />
              Scroll to explore
            </a>
            <span className="hidden items-center gap-2.5 sm:flex">
              {site.motto.map((word, index) => (
                <span key={word} className="flex items-center gap-2.5">
                  {index > 0 ? <ArrowRight aria-hidden className="size-3" /> : null}
                  {word}
                </span>
              ))}
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}
