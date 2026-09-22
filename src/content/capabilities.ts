export type Capability = {
  /** Stable key — the UI maps it to an icon and a place in the bento. */
  key: "platforms" | "web" | "mobile" | "ai" | "brand" | "operate";
  title: string;
  outcome: string;
  items: string[];
};

/** Written as outcomes for a business. Never as a tech stack listing. */
export const capabilities: Capability[] = [
  {
    key: "platforms",
    title: "Custom business platforms",
    outcome:
      "An operating system for your organisation. The tool your team lives in all day: operations, workflows, records and reports, shaped exactly to how you work.",
    items: ["ERP and CRM systems", "Workflow tools", "Dashboards and reports", "Internal tooling"],
  },
  {
    key: "web",
    title: "Websites",
    outcome:
      "Sites that make a serious company look serious, and load fast on any phone, in any signal.",
    items: ["Business websites", "Portals", "Easy-edit CMS"],
  },
  {
    key: "mobile",
    title: "Mobile apps",
    outcome: "iOS and Android apps people keep on their home screen, built once for both.",
    items: ["Customer apps", "Field and staff apps", "Store releases"],
  },
  {
    key: "ai",
    title: "AI solutions and automation",
    outcome:
      "AI pointed at one job it does well, plus automations that remove the repetitive work your team does by hand.",
    items: [
      "AI assistants and chatbots",
      "WhatsApp and email automation",
      "Document data extraction",
      "Smart search",
      "AI tutors",
    ],
  },
  {
    key: "brand",
    title: "Brand and concept",
    outcome:
      "Positioning, identity and product concept, so what we build has something to be true to.",
    items: ["Identity", "Positioning", "Product concept"],
  },
  {
    key: "operate",
    title: "Operate and support",
    outcome:
      "Launch is the middle of the job, not the end. We keep your systems running, secure and improving, with response times you can hold us to.",
    items: ["Monitoring", "Security patching", "Monthly improvements", "Agreed SLA"],
  },
];
