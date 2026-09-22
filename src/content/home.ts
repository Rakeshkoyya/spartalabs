/**
 * Home page copy that has no other home, lifted from the client brochure so the
 * site and the printed piece say the same thing in the same words.
 */

export const painPoints = [
  "Records live in spreadsheets that never quite agree with each other.",
  "Your team types the same information into three different tools.",
  "You bent your process to fit off-the-shelf software, and it still does not fit.",
  "Your website looks dated and does not bring in enquiries.",
  "Simple questions like “how much is outstanding?” take a week to answer.",
];

export const approachSteps = [
  {
    id: "01",
    title: "Understand your operations",
    body: "We sit with the people who do the work, map every workflow from enquiry to invoice, and find where time, money and data are leaking.",
    tags: ["Process mapping", "Stakeholder interviews", "Bottleneck audit"],
  },
  {
    id: "02",
    title: "Draft the solution blueprint",
    body: "A clear, professional plan: the system architecture, key screens, scope, timeline and cost, with the trade-offs written down so there are no surprises later.",
    tags: ["Solution architecture", "Dated delivery plan", "Fixed or flexible budget"],
  },
  {
    id: "03",
    title: "Build the system, piece by piece",
    body: "Then we build what the blueprint calls for: a custom platform, a website, a mobile app, AI and automation, all sharing one source of truth.",
    tags: ["Web and mobile", "AI and automation", "Integrations"],
  },
];

export type HubNode = {
  key: "website" | "mobile" | "assistant" | "automations" | "dashboards" | "integrations";
  title: string;
  body: string;
};

export const hubNodes: HubNode[] = [
  { key: "website", title: "Website", body: "Captures leads straight into your system" },
  { key: "mobile", title: "Mobile app", body: "For customers, staff or field teams" },
  { key: "assistant", title: "AI assistant", body: "Answers, triages and finds records" },
  { key: "automations", title: "Automations", body: "WhatsApp, email, reminders, approvals" },
  { key: "dashboards", title: "Dashboards", body: "Live numbers, not week-old reports" },
  { key: "integrations", title: "Integrations", body: "Payments, accounting and tools you use" },
];

export const examples = [
  {
    key: "schools",
    title: "Schools",
    body: "Admissions, fees, attendance and an AI tutor, across every campus.",
  },
  {
    key: "retail",
    title: "Retail and distribution",
    body: "Orders, stock, billing and a dealer app that syncs in real time.",
  },
  {
    key: "clinics",
    title: "Clinics",
    body: "Appointments, patient records and automatic WhatsApp reminders.",
  },
  {
    key: "services",
    title: "Service firms",
    body: "Leads, quotes, job tracking and invoices in one flow.",
  },
] as const;

export const promises = [
  {
    key: "weekly",
    title: "You see it every week",
    body: "A working demo every Friday, on the real build. You always know exactly where things stand.",
  },
  {
    key: "ip",
    title: "Your code, your IP",
    body: "Full, documented source handover. No licence, no lock-in.",
  },
  {
    key: "warnings",
    title: "Early warnings",
    body: "If a deadline is at risk, you hear the week we see it.",
  },
] as const;

export const approachQuote =
  "We do not start with a template. We start with a walk through how your business actually runs.";
