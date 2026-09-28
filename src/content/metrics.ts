export type Metric = {
  value: string;
  label: string;
  /**
   * True where the figure has not been confirmed. Pending metrics are not
   * rendered at all: every number on the site must be true on launch day.
   */
  pending?: boolean;
};

/** The home proof strip, under the hero. Figures supplied by the client, 2026-09-28. */
export const proofMetrics: Metric[] = [
  { value: "30+", label: "Projects delivered" },
  { value: "4", label: "Industries served" },
  { value: "10+", label: "Expert engineers on the team" },
];
