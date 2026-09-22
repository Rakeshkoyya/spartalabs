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
  { value: "4", label: "Sectors served" },
  { value: "8", label: "Specialist pods" },
  { value: "12+", label: "Projects delivered", pending: true },
  { value: "24h", label: "Response time", pending: true },
];
