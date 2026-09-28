export type Testimonial = {
  quote: string;
  /** Role and organisation type. Add a name only with the client's permission. */
  role: string;
  organisation: string;
  /** The case study this quote is about. */
  caseSlug: string;
};

/**
 * TODO(content): DRAFT WORDING. Each quote is written from the real project it
 * describes, but none has been approved by the client yet. Send each one to
 * the client for sign-off (and a name, if they allow it) before launch, and
 * change or remove any they don't approve. Publishing unapproved quotes as
 * client testimonials is misleading and, in many markets, against
 * consumer-protection rules.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Teachers close attendance in one tap, and for the first time I can see the whole school's day live, not at the end of term.",
    role: "Principal",
    organisation: "School running TrackBit",
    caseSlug: "trackbit",
  },
  {
    quote:
      "Every campus used to send a different spreadsheet. Now there's one system, one set of numbers, and our reports finally agree.",
    role: "Director",
    organisation: "Multi-campus school group",
    caseSlug: "school-management-platform",
  },
  {
    quote:
      "Approvals used to disappear into chat threads. Now schedules, reviews and sign-off live in one place. We came back for our second production.",
    role: "Producer",
    organisation: "Film production house",
    caseSlug: "film-production-house",
  },
  {
    quote:
      "Our site finally looks as good as our work, and our own team updates it after every campaign without calling a developer.",
    role: "Founder",
    organisation: "Brand and advertising agency",
    caseSlug: "advertising-agency-site",
  },
];
