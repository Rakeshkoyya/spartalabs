export type Metric = {
  value: string;
  label: string;
  /**
   * True where the figure has not been confirmed by the client. Pending metrics
   * render visibly de-emphasised so they cannot quietly ship as fact — see
   * docs/ACTION-PLAN.md §12, which makes real numbers the last hard blocker.
   */
  pending?: boolean;
};

export const heroMetrics: Metric[] = [
  { value: "4", label: "Industries served, from education to film and media" },
  { value: "8", label: "Specialist pods covering every layer of a system" },
  { value: "1", label: "Named lead who owns your project end to end" },
  { value: "100%", label: "Source code and IP handed over to you" },
];
