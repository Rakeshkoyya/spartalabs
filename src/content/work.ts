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
};

/**
 * TODO(content): each `client` needs its city and scale appended, and every
 * `metric.value` needs the real figure. A descriptor without scale and a
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
  },
];
