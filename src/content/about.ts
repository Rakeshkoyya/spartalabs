/** About page copy — docs/SITE-BLUEPRINT.md §9. */

export const founded = "2025";

export const nameStory = {
  sparta:
    "Small, disciplined teams that held their own against far bigger forces. Spartan: nothing unnecessary.",
  labs: "Labs is how we get there: we test, prototype and show you something working every week.",
};

/** TODO(content): check both lines against what really happened. */
export const story: string[] = [
  "We started with a school drowning in spreadsheets and a production house losing approvals in chats. The problem was never a lack of software. It was software that didn't fit.",
  "That habit of watching the work first became our method, and one of those builds became TrackBit.",
];

export type Founder = {
  name: string;
  role: string;
  /** TODO(content): one line of background. */
  bio: string | null;
  linkedin: string | null;
  /** Path under /public, e.g. "/team/salman.jpg". Initials render while null. */
  photo: string | null;
};

export const founders: Founder[] = [
  { name: "Salman", role: "Founder", bio: null, linkedin: null, photo: null },
  { name: "Rakesh", role: "Co-founder", bio: null, linkedin: null, photo: null },
];

export const beliefs: string[] = [
  "You hear bad news early.",
  "We turn down work we're wrong for.",
  "We write down every decision.",
  "You never depend on us.",
];

/** Team size supplied by the client, 2026-09-28. */
export const teamSize = "10+";

export const specialists = [
  "Product and UX",
  "Frontend",
  "Backend",
  "Mobile",
  "AI",
  "QA",
  "DevOps",
  "Design",
];
