export type EngagementModel = {
  name: string;
  bestFor: string;
  howItWorks: string;
};

/** "How we price" — docs/SITE-BLUEPRINT.md §5. */
export const engagementModels: EngagementModel[] = [
  {
    name: "Fixed scope",
    bestFor: "A clearly defined build",
    howItWorks: "One price after discovery, paid by milestone.",
  },
  {
    name: "Dedicated pod",
    bestFor: "Ongoing product work",
    howItWorks: "Monthly fee, named lead, weekly demos.",
  },
  {
    name: "Retainer and support",
    bestFor: "Live systems",
    howItWorks: "Monthly monitoring, fixes and improvements.",
  },
];
