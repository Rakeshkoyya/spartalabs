import { industries } from "@/content/industries";
import { Container } from "@/components/ui/container";

/**
 * Sector labels rather than client logos, by decision (ACTION-PLAN §12, Q2).
 * Set with this much typographic discipline it reads as deliberate, not as a
 * row of logos that failed to load.
 */
export function TrustStrip() {
  return (
    <div className="border-hairline border-b">
      <Container>
        <div className="flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-10">
          <span className="text-label text-muted shrink-0 font-mono tracking-[0.15em] uppercase">
            Delivering for teams in
          </span>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2.5">
            {industries.map((industry) => (
              <li
                key={industry.name}
                className="font-display text-base font-semibold tracking-[-0.01em]"
              >
                {industry.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
