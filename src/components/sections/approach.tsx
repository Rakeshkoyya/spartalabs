import Image from "next/image";
import { Check } from "lucide-react";
import { approachQuote, approachSteps } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * Brochure page three, the difference in one line: business first, software
 * second. The claim holds still on the left while the three steps pass on the
 * right, along a rail that fills as you read down it.
 */
export function Approach() {
  return (
    <Section id="approach" label="The Sparta approach" tone="navy" flow>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            index="02"
            kicker="The Sparta approach"
            title="Business first."
            highlight="Software second."
            lede="Our difference is simple. Before anyone writes a line of code, we understand your operations and draft a professional solution. The website, the app and the automation come after, and they all fit together."
          />

          <figure data-lock="" className="border-hairline mt-12 border-l-2 pl-6">
            <blockquote className="font-display text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] leading-snug tracking-[-0.015em] text-ink">
              &ldquo;{approachQuote}&rdquo;
            </blockquote>
            <figcaption className="text-muted mt-4 flex items-center gap-3 text-sm">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                aria-hidden
                width={600}
                height={693}
                className="h-auto w-6"
              />
              How every Sparta engagement begins
            </figcaption>
          </figure>
        </div>

        <ol className="rail-host relative pl-10 md:pl-14">
          <span aria-hidden className="bg-hairline absolute top-2 bottom-2 left-[0.6875rem] w-px" />
          <span
            aria-hidden
            className="rail-fill absolute top-2 bottom-2 left-[0.6875rem] w-px bg-linear-to-b from-cyan-400 via-blue-400 to-blue-600"
          />
          {approachSteps.map((step, index) => (
            <li
              key={step.id}
              data-lock=""
              style={{ "--m-delay": `${index * 90}ms` } as React.CSSProperties}
              className="relative pb-16 last:pb-0"
            >
              <span
                aria-hidden
                className="bg-page absolute top-1.5 -left-10 grid size-6 place-items-center rounded-full border border-accent-core/50 md:-left-14"
              >
                <span className="size-2 rounded-full bg-accent-core shadow-[0_0_12px_var(--glow)]" />
              </span>
              <span
                aria-hidden
                className="font-display block text-[clamp(3.5rem,2.6rem+3vw,5.5rem)] leading-[0.85] font-light text-transparent [-webkit-text-stroke:1.5px_var(--accent-core)]"
              >
                {step.id}
              </span>
              <h3 className="text-h3 mt-4 font-semibold text-ink">{step.title}</h3>
              <p className="text-muted mt-3 max-w-[52ch]">{step.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-ink inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-3 py-1.5 text-sm"
                  >
                    <Check aria-hidden className="text-accent size-3.5" />
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
