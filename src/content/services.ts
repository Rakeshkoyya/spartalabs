import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Globe, LifeBuoy, PenTool, Smartphone, Workflow } from "lucide-react";

export type CoreService = {
  key: "ai" | "web" | "internal";
  title: string;
  /** One line, used on the home card. */
  short: string;
  /** The service page headline for the block. */
  oneLiner: string;
  forWho: string;
  weBuild: string[];
  youGet: string;
  icon: LucideIcon;
};

/** The three services we lead with — docs/SITE-BLUEPRINT.md §5. */
export const coreServices: CoreService[] = [
  {
    key: "ai",
    title: "AI automations",
    short: "Take the repetitive work off your team.",
    oneLiner: "Take the repetitive work off your team.",
    forWho: "Teams losing hours to copy-paste, follow-ups and chasing documents.",
    weBuild: [
      "AI assistants trained on your documents",
      "WhatsApp and email automation",
      "Document and invoice reading",
      "Lead follow-up and CRM updates",
      "Smart search",
      "AI tutors",
    ],
    youGet: "A working automation wired into your tools, a short team guide, and monitoring.",
    icon: BrainCircuit,
  },
  {
    key: "web",
    title: "Websites and e-commerce",
    short: "Fast sites your team can update without us.",
    oneLiner: "A site that makes a serious business look serious.",
    forWho:
      "Businesses with a slow, dated or hard-to-update site, and brands ready to sell online.",
    weBuild: [
      "Business websites",
      "Online stores",
      "Booking and enquiry flows",
      "Customer portals",
      "Editable content",
    ],
    youGet: "A fast, mobile-first site with SEO basics, analytics and team training.",
    icon: Globe,
  },
  {
    key: "internal",
    title: "Internal software",
    short: "The one tool your team lives in all day.",
    oneLiner: "One system for the way your team actually works.",
    forWho: "Teams running on spreadsheets and disconnected tools, where no two reports agree.",
    weBuild: [
      "Operations platforms",
      "CRMs and ERPs",
      "Approval workflows",
      "Dashboards",
      "Staff and field apps",
      "Integrations",
    ],
    youGet: "One source of truth, role-based access and full code ownership.",
    icon: Workflow,
  },
];

export type SupportingService = Omit<CoreService, "key"> & {
  key: "mobile" | "brand" | "operate";
};

export const supportingServices: SupportingService[] = [
  {
    key: "mobile",
    title: "Mobile apps",
    short: "iOS and Android apps people keep on their home screen.",
    oneLiner: "Built once, shipped to both stores.",
    forWho: "Businesses whose customers or field staff live on their phones.",
    weBuild: ["Customer apps", "Field and staff apps", "Booking and ordering", "Store releases"],
    youGet: "Apps live on the App Store and Google Play, with updates handled for you.",
    icon: Smartphone,
  },
  {
    key: "brand",
    title: "Brand and product concept",
    short: "Give what we build something clear to be true to.",
    oneLiner: "Identity and concept before code.",
    forWho: "New products and businesses that need a clear look and message.",
    weBuild: ["Logo and identity", "Positioning", "Product concept", "UI design system"],
    youGet: "A brand kit and clickable designs your team can build on.",
    icon: PenTool,
  },
  {
    key: "operate",
    title: "Operate and support",
    short: "Keep live systems running, secure and improving.",
    oneLiner: "Launch is the middle of the job, not the end.",
    forWho: "Any live system: one we built or one you inherited.",
    weBuild: ["Monitoring", "Security patches", "Backups", "Monthly improvements"],
    youGet: "Agreed response times and a monthly budget for changes.",
    icon: LifeBuoy,
  },
];

/** All six, core first — the home "What we build" grid. */
export const allServices = [...coreServices, ...supportingServices];

/** The compact "Also available" row on the services page. */
export const alsoAvailable = supportingServices.map((service) => ({
  title: service.title,
  body: service.short,
  icon: service.icon,
}));

/** Footer "Services" column. Every entry lands on the services page. */
export const footerServices = [
  "AI automations",
  "Websites and e-commerce",
  "Internal software",
  "Mobile apps",
  "Support",
] as const;

/**
 * TODO(content): the tools actually used, e.g. React, Next.js, Node.js,
 * Python, Flutter, PostgreSQL, AWS. The row stays hidden while empty.
 */
export const techStack: string[] = [];
