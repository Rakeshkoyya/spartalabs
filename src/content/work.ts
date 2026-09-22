export type CaseFact = { label: string; value: string };
export type CaseBlock = { title: string; body: string };
export type CaseResult = { value: string | null; label: string; note?: string };

export type CaseStudy = {
  slug: string;
  sector: string;
  /** Anonymised by decision — docs/ACTION-PLAN.md §12, Q2. */
  client: string;
  title: string;
  problem: string;
  outcome: string;
  metric: { value: string | null; label: string };
  featured?: boolean;
  /**
   * "draft" means the long-form body was written from the project brief and has
   * not been checked by the client yet. Nothing marked draft should go live.
   */
  bodyStatus: "draft" | "approved";
  facts: CaseFact[];
  challenge: string[];
  built: CaseBlock[];
  collaboration: string;
  results: CaseResult[];
};

/**
 * TODO(content): every `client` still needs its city and scale appended, every
 * null result needs its real figure, and each `bodyStatus` should move to
 * "approved" once the client has read it. A descriptor without scale and a
 * result without a number are the two things that read as invented.
 */
export const work: CaseStudy[] = [
  {
    slug: "ai-tutor-learning-portal",
    sector: "Education",
    client: "A K-12 school group",
    title: "AI-tutor learning portal",
    problem:
      "Coursework, assessment and per-student support lived in three disconnected places, and teachers could not give individual attention at the scale the group had grown to.",
    outcome:
      "One learning portal with an AI tutor that answers a student at the point they get stuck, and gives teachers a per-student picture they could not assemble by hand.",
    metric: { value: null, label: "students on the platform" },
    featured: true,
    bodyStatus: "draft",
    facts: [
      { label: "Sector", value: "Education" },
      { label: "Engagement", value: "Dedicated pod" },
      { label: "Pods involved", value: "Product, Frontend, Backend, AI/ML, QA" },
      { label: "Status", value: "Live and supported" },
    ],
    challenge: [
      "The group ran coursework in one system, assessment in another and pastoral notes in a third. A teacher wanting to understand why one student had stalled had to reconcile three sources by hand, so in practice nobody did.",
      "The pressure was arithmetic rather than pedagogical. As cohort sizes grew, the amount of individual attention a teacher could give each student fell, and the students who needed it most were the ones least likely to ask.",
    ],
    built: [
      {
        title: "One place for the course",
        body: "Lessons, materials, submissions and grades in a single structure teachers set up once per term rather than per class.",
      },
      {
        title: "An AI tutor with a narrow job",
        body: "It answers a student on the material in front of them, at the moment they stall. It is scoped to the course content deliberately — a general chatbot in a classroom is a liability, not a feature.",
      },
      {
        title: "A per-student picture",
        body: "Progress, submissions, stalls and tutor conversations resolved into one view a teacher can read in under a minute before a class.",
      },
      {
        title: "Assessment that closes the loop",
        body: "Assignments and marking feed the same record the tutor and the teacher view read from, so the picture is current rather than reconstructed.",
      },
    ],
    collaboration:
      "A dedicated pod across product, frontend, backend, AI and QA, with a working demo every Friday for the academic leads — not only the IT contact. Teachers found the things the specification missed, which is the entire argument for showing real software early.",
    results: [
      { value: null, label: "students on the platform" },
      { value: null, label: "teacher hours saved per week" },
      { value: null, label: "tutor questions answered per term" },
    ],
  },
  {
    slug: "school-management-platform",
    sector: "Education",
    client: "A multi-campus school group",
    title: "School management platform",
    problem:
      "Admissions, attendance, fees and staff records ran on spreadsheets that each campus maintained differently, so no two reports agreed.",
    outcome:
      "A single platform across every campus, with one source of truth for each record and reporting the group office can trust.",
    metric: { value: null, label: "campuses running on it" },
    bodyStatus: "draft",
    facts: [
      { label: "Sector", value: "Education" },
      { label: "Engagement", value: "Fixed scope, then retainer" },
      { label: "Pods involved", value: "Product, Frontend, Backend, QA, DevOps" },
      { label: "Status", value: "Live and supported" },
    ],
    challenge: [
      "Every campus kept its own spreadsheets, and every campus had quietly evolved its own column names, its own fee categories and its own definition of what counted as attendance. Each was internally consistent. None of them agreed with each other.",
      "The group office could not answer basic questions — how many students, how much outstanding, how many staff — without a week of manual reconciliation, by which point the answer had moved.",
    ],
    built: [
      {
        title: "One record per student",
        body: "Admissions through to exit on a single record, so a transfer between campuses stops being a re-entry exercise.",
      },
      {
        title: "Attendance that matches across campuses",
        body: "One definition, one flow, one report. The disagreement between campuses was a data-model problem, not a discipline problem.",
      },
      {
        title: "Fees and collections",
        body: "Structures, schedules, receipts and outstanding balances, with the group view derived from the same records the campus works in daily.",
      },
      {
        title: "Reporting the group office can act on",
        body: "Current numbers on demand, rather than a reconciliation exercise that is out of date by the time it finishes.",
      },
    ],
    collaboration:
      "We migrated one campus first and ran it alongside the spreadsheets for a full cycle before touching the others. Rolling out to every campus at once would have been faster to plan and considerably worse to live through.",
    results: [
      { value: null, label: "campuses running on it" },
      { value: null, label: "staff using it daily" },
      { value: null, label: "reporting turnaround, before and after" },
    ],
  },
  {
    slug: "film-production-house",
    sector: "Film & media",
    client: "An independent film production house",
    title: "Two productions, end to end",
    problem:
      "Production scheduling, asset review and client sign-off happened over email and messaging, and approvals went missing between departments.",
    outcome:
      "Two delivered projects with a production system that keeps scheduling, assets and approvals in one place, so a sign-off can always be traced.",
    metric: { value: "2", label: "projects delivered" },
    bodyStatus: "draft",
    facts: [
      { label: "Sector", value: "Film & media" },
      { label: "Engagement", value: "Two projects" },
      { label: "Pods involved", value: "Product, Frontend, Backend, Brand" },
      { label: "Status", value: "Delivered" },
    ],
    challenge: [
      "A production runs on approvals, and the approvals lived in messaging threads. Which cut was signed off, by whom, and against which set of notes was a question that could take an afternoon to answer — usually on the day it mattered most.",
      "Scheduling had the same shape. The plan existed, but it existed in several places at once, and the version a department worked from depended on which message they had seen last.",
    ],
    built: [
      {
        title: "A schedule with one version",
        body: "Shoot days, departments and dependencies in one place, so a change reaches everyone rather than whoever was on the thread.",
      },
      {
        title: "Asset review with a trail",
        body: "Cuts and assets reviewed in context, with notes attached to the version they were made against rather than to a date in a chat log.",
      },
      {
        title: "Sign-off that can be traced",
        body: "Who approved what, when, and against which version. The question that used to take an afternoon now takes a click.",
      },
    ],
    collaboration:
      "Built around how the house already worked rather than around how production software usually assumes people work. The second project reused the system and needed materially less setup than the first.",
    results: [
      { value: "2", label: "projects delivered" },
      { value: null, label: "approval turnaround, before and after" },
    ],
  },
  {
    slug: "advertising-agency-site",
    sector: "Advertising",
    client: "A brand and advertising agency",
    title: "Agency brand showcase",
    problem:
      "The agency was pitching brand work from a site that undersold it — slow, dated, and impossible to update between campaigns.",
    outcome:
      "A brand showcase built around the work itself, fast on mobile, and editable by the agency without a developer in the loop.",
    metric: { value: null, label: "load time on 4G" },
    bodyStatus: "draft",
    facts: [
      { label: "Sector", value: "Advertising" },
      { label: "Engagement", value: "Fixed scope" },
      { label: "Pods involved", value: "Brand, Product, Frontend" },
      { label: "Status", value: "Delivered" },
    ],
    challenge: [
      "An agency that sells brand work is judged on its own brand before a prospect reads a word. Theirs loaded slowly, looked several years old, and needed a developer for every campaign update — so it simply did not get updated.",
      "The work itself was strong. The site was the weakest thing in the pitch.",
    ],
    built: [
      {
        title: "The work, at full size",
        body: "Layouts that give each campaign room instead of compressing it into a uniform grid of thumbnails.",
      },
      {
        title: "Fast on a phone on mobile data",
        body: "Where most of the traffic actually is, and where the old site was losing people before the first image resolved.",
      },
      {
        title: "Editable without us",
        body: "The agency adds a campaign themselves. A showcase nobody can update stops being current within a quarter.",
      },
    ],
    collaboration:
      "Brand and frontend worked as one pod rather than in sequence, because on a project whose entire purpose is presentation, a handoff between the two is where the quality leaks out.",
    results: [
      { value: null, label: "load time on 4G" },
      { value: null, label: "campaigns published by the agency since launch" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return work.find((study) => study.slug === slug);
}

export const sectors = Array.from(new Set(work.map((study) => study.sector)));
