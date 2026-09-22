/**
 * TODO(content): `story` is written from the brief — positioning we know to be
 * true, not founding history, because the founding history has not been
 * supplied. Replace with the real account (who started it, when, and why) and
 * fill `timeline`, which is what carries the human weight on a page that
 * deliberately carries no photographs.
 */
export const story: string[] = [
  "Most organisations do not need more software. They need software that fits how they actually work — and most of what they are sold does the opposite, asking a school, a production house or an agency to rearrange itself around a product built for someone else.",
  "Sparta Labs was built to work the other way round. We start with how the work really happens, not how the org chart says it does, and we build the system to that. It is slower to begin and considerably faster to live with.",
  "The pod model came out of watching why projects fail. They rarely fail on capability. They fail because some layer of the system — the data model, the release process, the thing nobody demoed — had no owner, and the gap only became visible at the point it was expensive. So every engagement gets a specialist for every layer, and a named lead who owns the whole.",
];

export type Value = { title: string; body: string };

/** Values as behaviours. Adjectives are not commitments; these are. */
export const values: Value[] = [
  {
    title: "We flag a slip the week we see it",
    body: "Not the week it lands. A deadline at risk is information you can act on; a deadline that has already moved is only an apology.",
  },
  {
    title: "We turn down work we are wrong for",
    body: "If your problem needs a product you can buy, or a team we are not, we will tell you on the first call rather than scope it anyway.",
  },
  {
    title: "We write down the trade-off, not just the decision",
    body: "Every architecture choice closes doors. You should be able to read which ones, and why, without reverse-engineering it from the code a year later.",
  },
  {
    title: "We leave you able to run it without us",
    body: "Documented, handed over, on your infrastructure if you want it there. A client who cannot leave is not a client, they are a hostage.",
  },
];

export type TimelineEntry = { year: string; title: string; body: string };

/** TODO(content): founding year, first client per sector, team milestones. */
export const timeline: TimelineEntry[] = [];
