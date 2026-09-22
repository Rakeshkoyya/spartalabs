import Image from "next/image";
import { Check } from "lucide-react";
import { approachQuote, approachSteps } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/section";

/** Brochure page three, the difference in one line: business first, software second. */
export function Approach() {
  return (
    <Section id="approach" label="The Sparta approach" tone="navy" flow>
      <SectionHeader
        kicker="The Sparta approach"
        title="Business first."
        highlight="Software second."
        lede="Our difference is simple. Before anyone writes a line of code, we understand your operations and draft a professional solution. The website, the app and the automation come after, and they all fit together."
      />

      <ol className="mt-14">
        {approachSteps.map((step, index) => (
          <li
            key={step.id}
            data-lock=""
            style={{ "--m-delay": `${index * 90}ms` } as React.CSSProperties}
            className="border-hairline grid gap-4 border-t py-8 md:grid-cols-[7rem_1fr_16rem] md:gap-8"
          >
            <span
              aria-hidden
              className="font-display text-[3.5rem] leading-[0.9] font-light text-transparent [-webkit-text-stroke:1px_rgb(25_190_255/0.7)]"
            >
              {step.id}
            </span>
            <div>
              <h3 className="text-h3 font-semibold text-white">{step.title}</h3>
              <p className="text-muted mt-2 max-w-[52ch]">{step.body}</p>
            </div>
            <ul className="flex flex-col gap-2 pt-1">
              {step.tags.map((tag) => (
                <li key={tag} className="text-ink flex items-center gap-2.5 text-sm">
                  <Check aria-hidden className="text-accent size-4" />
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <figure
        data-lock=""
        className="glass mt-10 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7"
      >
        <Image
          src="/brand/logo-mark-white.png"
          alt=""
          aria-hidden
          width={600}
          height={693}
          className="h-auto w-12 shrink-0"
        />
        <blockquote className="font-display text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] leading-snug tracking-[-0.01em] text-white">
          &ldquo;{approachQuote}&rdquo;
        </blockquote>
      </figure>
    </Section>
  );
}
