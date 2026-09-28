import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { paths } from "@/content/home";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/** Splits the two buyers in one click: businesses to services, agencies to /agencies. */
export function TwoPaths() {
  return (
    <Section id="paths" label="Who we work with" className="topo">
      <SectionHeader index="03" kicker="Who we work with" title="Two ways in." />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {paths.map((path, index) => {
          const dark = index === 1;
          return (
            <li
              key={path.audience}
              data-lock=""
              style={{ "--m-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <Link
                href={path.cta.href}
                className={cn(
                  "spotlight group flex h-full flex-col gap-6 rounded-[var(--radius-card)] p-7 transition-transform duration-300 ease-[var(--ease-out-expo)] motion-safe:hover:-translate-y-1 sm:p-9",
                  dark
                    ? "tone-dark crest-deep shadow-[0_24px_50px_-24px_rgb(0_40_120/0.6)]"
                    : "card hover:shadow-[var(--shadow-lift)]",
                )}
              >
                <span
                  className={cn(
                    "text-label font-label tracking-[0.2em] uppercase",
                    dark ? "text-accent-bright" : "text-accent",
                  )}
                >
                  {path.audience}
                </span>
                <p
                  className={cn(
                    "font-display text-[clamp(1.375rem,1.1rem+1vw,1.875rem)] leading-snug font-semibold tracking-[-0.015em]",
                    dark && "text-white",
                  )}
                >
                  {path.body}
                </p>
                <span
                  className={cn(
                    "font-display mt-auto inline-flex items-center gap-2 font-semibold",
                    dark ? "text-white" : "text-accent",
                  )}
                >
                  {path.cta.label}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
