export type ProcessStep = {
  id: string;
  title: string;
  happens: string;
  youGet: string;
  weNeed: string;
};

/** Runs in this order on every engagement — docs/SITE-BLUEPRINT.md §8. */
export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discover",
    happens: "We map how the work really happens, workarounds included.",
    youGet: "A workflow map and a list of what to fix first.",
    weNeed: "2–3 short sessions with the people who do the work.",
  },
  {
    id: "02",
    title: "Blueprint",
    happens: "We design the system and plan the build.",
    youGet: "Screens, a dated plan and a fixed price or monthly plan.",
    weNeed: "Sign-off on scope.",
  },
  {
    id: "03",
    title: "Build",
    happens: "We build in two-week sprints.",
    youGet: "A live demo every week and a version you can click.",
    weNeed: "30 minutes a week for feedback.",
  },
  {
    id: "04",
    title: "Launch",
    happens: "Security checks, testing, data migration and team training.",
    youGet: "A live system your team knows how to use.",
    weNeed: "A go-live date and final approval.",
  },
  {
    id: "05",
    title: "Operate",
    happens: "Monitoring, patching and monthly improvements. Optional.",
    youGet: "A system that keeps up as you grow.",
    weNeed: "Priorities for the next month.",
  },
];

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  {
    title: "Early warnings, not late surprises.",
    body: "If something will slip, you hear it the week we know.",
  },
  {
    title: "We say no to the wrong work.",
    body: "If off-the-shelf software fits you better, we'll tell you.",
  },
  {
    title: "Decisions are written down.",
    body: "So your next developer understands why.",
  },
  {
    title: "You leave independent.",
    body: "Code, documents and accounts are handed over. No lock-in.",
  },
];
