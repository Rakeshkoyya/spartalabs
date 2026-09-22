import { capabilities } from "@/content/capabilities";
import { ChevronMark } from "@/components/ui/chevron-mark";
import { Section, SectionHeader } from "@/components/ui/section";

export function Capabilities() {
  return (
    <Section id="capabilities" label="What we build">
      <SectionHeader
        kicker="What we build"
        title="Six things, done properly."
        lede="Framed as what it does for your organisation, not as a list of the technologies underneath. The stack is our problem."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <li key={capability.title}>
            <article className="before:bg-accent-core border-hairline bg-surface hover:border-accent-core/55 relative flex h-full flex-col gap-3 overflow-hidden rounded-[var(--radius-card)] border p-6 transition-[border-color,transform] duration-200 ease-[var(--ease-out-expo)] before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-[var(--ease-out-expo)] before:content-[''] hover:before:scale-x-100 motion-safe:hover:-translate-y-0.5">
              <ChevronMark className="text-accent-core mb-1" />
              <h3 className="text-h3 font-semibold">{capability.title}</h3>
              <p className="text-muted text-base">{capability.outcome}</p>
              <ul className="border-hairline mt-auto flex flex-col gap-1.5 border-t pt-4">
                {capability.items.map((item) => (
                  <li key={item} className="text-muted text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
