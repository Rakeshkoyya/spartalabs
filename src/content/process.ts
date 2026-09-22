export type ProcessStep = {
  id: string;
  title: string;
  body: string;
};

/**
 * The numbering here is real: these run in order on every engagement. Numbered
 * markers are only used where order carries information a reader needs.
 */
export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discover",
    body: "We sit with the people who will use the thing and map how the work actually happens — not how the org chart says it does.",
  },
  {
    id: "02",
    title: "Blueprint & scope",
    body: "Architecture, screens and a scope you can hold us to, with the trade-offs written down rather than discovered in month three.",
  },
  {
    id: "03",
    title: "Build in sprints",
    body: "Two-week sprints against a working build. Every Friday you see the real product, not a status deck.",
  },
  {
    id: "04",
    title: "Harden & launch",
    body: "Load, security and edge cases before launch day, then migration and go-live with a rollback plan that exists on paper.",
  },
  {
    id: "05",
    title: "Operate & evolve",
    body: "Monitoring, patching and the next round of changes. The system keeps working after the invoice clears.",
  },
];

export type Guarantee = {
  title: string;
  body: string;
};

/** The pod model made concrete. This is what answers "will my project get lost?". */
export const guarantees: Guarantee[] = [
  {
    title: "One pod, one owner",
    body: "A named engagement lead from the first call to the day after launch. You never explain your project to a new person.",
  },
  {
    title: "You see it every week",
    body: "A working demo every Friday, on the real build. No black-box months, no surprise at the end.",
  },
  {
    title: "Your code, your IP",
    body: "Full source handover, documented, on your infrastructure if you want it there. No licence, no lock-in.",
  },
];

export type Expectation = { title: string; body: string };

/**
 * Stated plainly because it is disarming, and because the projects that go
 * wrong are almost always the ones where these were assumed rather than agreed.
 */
export const whatWeNeed: Expectation[] = [
  {
    title: "One decision-maker",
    body: "Someone who can settle a question in a day. Not a committee that meets fortnightly — that is where two-week sprints go to die.",
  },
  {
    title: "Access to the people who do the work",
    body: "An hour with the person who actually runs admissions, or the schedule, is worth more than a month of requirements documents written above them.",
  },
  {
    title: "Honesty about the current mess",
    body: "Every organisation has workarounds it is slightly embarrassed by. Show us those first. They are the requirements.",
  },
  {
    title: "Attention at the demo",
    body: "Thirty minutes every second Friday. Feedback at the demo is cheap; feedback after launch is not.",
  },
];
