import Link from "next/link";
import { industries } from "@/content/industries";
import { Section, SectionHeader } from "@/components/ui/section";

export function Industries() {
  return (
    <Section id="industries" label="Industries">
      <SectionHeader
        kicker="Industries"
        title="Where we have already done this."
        lede="Four sectors with delivered systems behind them. Each one taught us something the next client did not have to pay to learn."
      />

      <ul className="border-hairline mt-12 grid border-t md:grid-cols-4">
        {industries.map((industry) => (
          <li
            key={industry.name}
            className="group border-hairline border-b md:border-r md:last:border-r-0"
          >
            <Link
              href={`/work?sector=${encodeURIComponent(industry.name)}`}
              className="block py-6 md:px-6 md:group-first:pl-0 md:group-last:pr-0"
            >
              <h3 className="text-h3 group-hover:text-accent font-semibold transition-colors duration-200">
                {industry.name}
              </h3>
              <p className="text-muted mt-2.5 text-[0.9375rem]">{industry.proof}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
