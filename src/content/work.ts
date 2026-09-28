export type CaseStatus = "Live" | "Delivered" | "In build";

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short name for cards and the "next project" link. */
  shortTitle: string;
  /** The first sector is the primary one; the rest feed the filter tabs. */
  sectors: string[];
  status: CaseStatus;
  /** One outcome line for cards. */
  oneLine: string;
  situation: string;
  built: string;
  /** `null` until a real result is confirmed — the section is hidden, never faked. */
  changed: string | null;
  /** `null` until confirmed; the "Built with" row is hidden while empty. */
  stack: string[] | null;
  link?: { label: string; href: string };
  /** Shown on the home page, in this order. */
  featured?: boolean;
};

/** The filter tabs, in order. Tabs with no case study are not rendered. */
export const sectorTabs = ["Education", "Film and media", "Advertising", "Operations", "AI"];

/**
 * Every case follows Situation → What we built → What changed → Built with —
 * docs/SITE-BLUEPRINT.md §7.
 *
 * TODO(content): one real metric per case (`changed`), the stack for each,
 * and confirmation of whether the multi-campus platform is TrackBit — if it
 * is, merge the two entries.
 */
export const work: CaseStudy[] = [
  {
    slug: "trackbit",
    title: "TrackBit, a school operating system",
    shortTitle: "TrackBit",
    sectors: ["Education", "AI"],
    status: "Live",
    oneLine: "A 10-module school OS. Teachers close a period in one tap.",
    situation:
      "Schools track attendance, syllabus, exams and fees across registers, spreadsheets and messaging groups. Directors can't see what's happening until the term is over.",
    built:
      "An AI-powered school platform with 10 modules: attendance, syllabus planning, teacher load, student records, exams, support bands, tasks, fees, events and a parent portal.",
    changed:
      "Teachers close a period in one tap, in under 30 seconds. Directors see attendance, syllabus and fees live, and parents see progress without calling the school.",
    stack: null,
    link: { label: "trackbit.in", href: "https://trackbit.in/" },
    featured: true,
  },
  {
    slug: "school-management-platform",
    title: "Multi-campus school platform",
    shortTitle: "Multi-campus school platform",
    sectors: ["Education"],
    status: "Live",
    oneLine: "Every campus on one system, with reports that finally agree.",
    situation:
      "Admissions, attendance, fees and staff records ran on spreadsheets each campus kept differently, so no two reports agreed.",
    built:
      "One platform for every campus, with shared records, role-based access and group-level reports.",
    changed: null,
    stack: null,
    featured: true,
  },
  {
    slug: "ai-learning-platform",
    title: "AI learning platform, a personal university",
    shortTitle: "AI learning platform",
    sectors: ["AI", "Education"],
    status: "In build",
    oneLine: "Pick any subject; an AI tutor builds and teaches the path.",
    situation:
      "Online courses are fixed. Learners who want something specific end up stitching together videos, articles and chat answers.",
    built:
      "A platform where anyone picks what they want to learn, and an AI tutor builds the curriculum, teaches it, tests understanding and adapts to their pace.",
    changed: null,
    stack: null,
    featured: true,
  },
  {
    slug: "film-production-house",
    title: "Production management for a film house",
    shortTitle: "Film production system",
    sectors: ["Film and media"],
    status: "Delivered",
    oneLine: "Schedules, asset review and sign-off in one place.",
    situation:
      "Scheduling, asset review and client sign-off happened over email and messaging, and approvals went missing between departments.",
    built:
      "A production management system covering schedules, asset review and sign-off in one place.",
    changed: "Two projects delivered for the same client, with every approval traceable.",
    stack: null,
  },
  {
    slug: "advertising-agency-site",
    title: "Brand showcase site for an ad agency",
    shortTitle: "Agency showcase site",
    sectors: ["Advertising"],
    status: "Delivered",
    oneLine: "A fast showcase the agency updates after every campaign.",
    situation:
      "The agency pitched brand work from a site that undersold it: slow, dated and hard to update between campaigns.",
    built: "A fast showcase site the agency's own team updates after every campaign.",
    changed: null,
    stack: null,
  },
];

export function getCaseStudy(slug: string) {
  return work.find((study) => study.slug === slug);
}

export const activeSectors = sectorTabs.filter((tab) =>
  work.some((study) => study.sectors.includes(tab)),
);
