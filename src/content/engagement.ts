export type EngagementModel = {
  name: string;
  fitsWhen: string;
  pricing: string;
  includes: string[];
};

export const engagementModels: EngagementModel[] = [
  {
    name: "Fixed scope",
    fitsWhen:
      "The requirement is genuinely settled and you need a defined thing delivered by a defined date — a site, a launch, a migration.",
    pricing: "One price, agreed after discovery, staged against milestones.",
    includes: ["A dated plan", "Milestone demos", "Handover and documentation", "30 days of post-launch fixes"],
  },
  {
    name: "Dedicated pod",
    fitsWhen:
      "The product will evolve as you learn from it, which is true of almost every platform. Scoping it up front would only be guessing expensively.",
    pricing: "A monthly rate for a named pod. Scale up or down with a month's notice.",
    includes: ["A named engagement lead", "Two-week sprints", "A working demo every Friday", "Priorities you set each sprint"],
  },
  {
    name: "Retainer & managed",
    fitsWhen:
      "The system is live and needs to stay that way — yours or one you inherited from someone else.",
    pricing: "A monthly retainer sized to the system, with response times written into it.",
    includes: ["Monitoring and incident response", "Security patching", "A budget of change each month", "An agreed response SLA"],
  },
];

export type SprintDay = { label: string; body: string };

/** What a fortnight actually looks like, because "agile" on its own tells a buyer nothing. */
export const sprintShape: SprintDay[] = [
  { label: "Monday, week one", body: "Sprint planning. You set the priorities; we say what fits and what it displaces." },
  { label: "Through week one", body: "Build, with questions raised the day they come up rather than saved for a status call." },
  { label: "Friday, week one", body: "Internal review and a build you can click if you want to." },
  { label: "Through week two", body: "Build continues. Mid-sprint changes are possible and we will tell you their cost before taking them." },
  { label: "Friday, week two", body: "Demo on the real product, then a written note of what shipped, what did not, and why." },
];
