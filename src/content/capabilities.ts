export type Capability = {
  title: string;
  outcome: string;
  items: string[];
};

/** Written as outcomes for an organisation. Never as a tech stack listing. */
export const capabilities: Capability[] = [
  {
    title: "Custom platforms",
    outcome:
      "An operating system for your organisation — the tool your team lives in all day, not a dashboard nobody opens twice.",
    items: ["Operations and workflow systems", "Internal tooling", "Integrations with what you already run"],
  },
  {
    title: "Web & digital presence",
    outcome:
      "Sites that make a serious company look serious, and load in under two seconds on a phone in a bad signal area.",
    items: ["Marketing sites", "Portals and microsites", "Content systems your team can actually edit"],
  },
  {
    title: "Mobile applications",
    outcome:
      "iOS and Android products people keep on the home screen, built once and shipped to both.",
    items: ["Customer apps", "Field and operations apps", "Release and store management"],
  },
  {
    title: "AI & intelligent systems",
    outcome:
      "AI pointed at one job it does well — tutoring a student, triaging a queue, reading a document, finding the right record.",
    items: ["AI tutors and assistants", "Document and data extraction", "Search and recommendation"],
  },
  {
    title: "Brand & concept development",
    outcome:
      "Positioning, identity and product concept — so the thing we build has something to be true to.",
    items: ["Naming and positioning", "Identity systems", "Product concept and art direction"],
  },
  {
    title: "Operate & support",
    outcome:
      "We keep it running. Monitoring, patching, iteration, and response times you can hold us to.",
    items: ["Monitoring and incident response", "Security patching", "Continuous iteration"],
  },
];
