import { ArrowDown, ArrowRight } from "lucide-react";
import { RiseText } from "@/components/motion/rise-text";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroParticles } from "./hero-particles";
import { HeroPin } from "./hero-pin";

/**
 * A clean, minimal opener: the headline, one line of support, two actions —
 * and the crest drawn in particles that scatter from the pointer and gather
 * again. Behind it a slow aurora and a faint blueprint grid.
 *
 * On wide screens the hero pins and the next section slides over it as a
 * sheet (motion.css, "SECTION TRANSITIONS"); `HeroPin` makes sure it only
 * pins once all of it, buttons included, has been in view.
 */
export function Hero() {
  return (
    <HeroPin>
      <section
        id="top"
        aria-labelledby="hero-title"
        className="band-tint relative flex min-h-svh flex-col overflow-clip"
      >
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-clip">
          <span className="aurora aurora-a" />
          <span className="aurora aurora-b" />
        </div>
        <HeroParticles />

        <Container className="hero-recede relative flex flex-1 flex-col justify-center pt-24 pb-10 lg:pt-20">
          <div className="max-w-[40rem] lg:max-w-[54%]">
            {/* Sized by width and height alike, so the whole hero fits a short laptop screen. */}
            <h1
              id="hero-title"
              className="font-display text-[clamp(2.5rem,min(5.4vw,9svh),6.25rem)] leading-[0.98] font-semibold tracking-[-0.035em]"
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
              className="text-muted mt-6 max-w-[44ch] text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-relaxed"
            >
              We study your operations first, then design and build the system your team needs.
              Websites, apps, AI and automation, under one plan.
            </p>

            <div
              data-enter="lock"
              style={{ "--enter-delay": "620ms" } as React.CSSProperties}
              className="mt-8 flex flex-wrap gap-3"
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
        </Container>

        <Container className="relative pb-[calc(var(--sheet-radius)+1.25rem)]">
          <a
            href="#about"
            data-enter="fade"
            style={{ "--enter-delay": "1100ms" } as React.CSSProperties}
            className="text-label font-label text-muted hover:text-ink inline-flex min-h-9 items-center gap-2.5 tracking-[0.18em] uppercase transition-colors duration-200"
          >
            <ArrowDown aria-hidden className="size-3.5" />
            Scroll to explore
          </a>
        </Container>
      </section>
    </HeroPin>
  );
}
