import Image from "next/image";
import { capabilities, type Capability } from "@/content/capabilities";
import { capabilityIcons, IconBox } from "@/components/brand/icons";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/**
 * Brochure page four's bento: the platform and the operate tiles carry the
 * crest gradient, AI stands tall down the right edge, and the smaller
 * services sit on white cards between them.
 */
const layout: Record<Capability["key"], { area: string; dark?: "crest" | "deep" }> = {
  platforms: { area: "lg:col-span-2", dark: "crest" },
  ai: { area: "lg:row-span-2 lg:col-start-3 lg:row-start-1", dark: "deep" },
  web: { area: "" },
  mobile: { area: "" },
  brand: { area: "" },
  operate: { area: "lg:col-span-2", dark: "deep" },
};

export function Capabilities() {
  return (
    <Section id="capabilities" label="What we build">
      <SectionHeader
        kicker="What we build"
        title="Everything your business runs on, from one team."
        lede="Framed as what it does for your organisation, not as a list of the technologies underneath. The stack is our problem."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => {
          const { area, dark } = layout[capability.key];
          const big = capability.key === "platforms";
          return (
            <li
              key={capability.key}
              data-lock=""
              style={{ "--m-delay": `${index * 70}ms` } as React.CSSProperties}
              className={cn(
                area,
                big && "sm:col-span-2",
                capability.key === "operate" && "sm:col-span-2",
              )}
            >
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] p-6 transition-transform duration-300 ease-[var(--ease-out-expo)] motion-safe:hover:-translate-y-1 sm:p-7",
                  dark
                    ? cn(
                        "tone-dark shadow-[0_24px_50px_-24px_rgb(0_40_120/0.6)]",
                        dark === "crest" ? "crest" : "crest-deep",
                      )
                    : "card hover:shadow-[var(--shadow-lift)]",
                )}
              >
                {capability.key === "ai" ? (
                  <Image
                    src="/brand/net-blue.png"
                    alt=""
                    aria-hidden
                    width={900}
                    height={675}
                    className="pointer-events-none absolute top-10 -right-8 w-[130%] max-w-none opacity-70"
                  />
                ) : null}
                <div className="relative flex h-full flex-col">
                  <IconBox
                    icon={capabilityIcons[capability.key]}
                    className={dark ? "!bg-white/95 !text-blue-600 !shadow-none" : ""}
                  />
                  <h3
                    className={cn(
                      "font-display mt-5 font-semibold tracking-[-0.015em]",
                      big ? "text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)]" : "text-h3",
                      dark && "text-white",
                    )}
                  >
                    {capability.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-[0.9375rem] leading-relaxed",
                      dark ? "text-[#c3d0e4]" : "text-muted",
                      big && "max-w-[52ch] text-base",
                    )}
                  >
                    {capability.outcome}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          dark
                            ? "border border-white/12 bg-white/8 text-[#d6e3f5]"
                            : "bg-accent-wash text-accent-wash-ink",
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
