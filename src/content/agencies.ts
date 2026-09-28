/** For agencies page copy — docs/SITE-BLUEPRINT.md §6. */

import type { LucideIcon } from "lucide-react";
import { Bot, Globe, LayoutDashboard, Plug, Smartphone, Workflow } from "lucide-react";

export type AgencyBuild = {
  title: string;
  /** What it is, in your client's terms. */
  body: string;
  /** Typical requests we take on. */
  examples: string[];
  icon: LucideIcon;
};

export const agencyBuilds: AgencyBuild[] = [
  {
    title: "Websites and stores",
    body: "Fast marketing sites and online stores your client's team can update without a developer.",
    examples: ["Business sites", "Online stores", "Landing pages", "CMS set-up"],
    icon: Globe,
  },
  {
    title: "Client portals and dashboards",
    body: "Log-in areas where your client's customers see orders, reports or progress in one place.",
    examples: ["Customer portals", "Reporting dashboards", "Member areas"],
    icon: LayoutDashboard,
  },
  {
    title: "AI chatbots and automations",
    body: "Assistants and workflows that answer, sort and follow up, so your client's team stops doing it by hand.",
    examples: ["Website chatbots", "WhatsApp automation", "Document reading", "Lead follow-up"],
    icon: Bot,
  },
  {
    title: "CRM and tool integrations",
    body: "The tools your client already pays for, connected so data moves on its own.",
    examples: ["CRM sync", "Payment gateways", "Google Workspace", "Accounting tools"],
    icon: Plug,
  },
  {
    title: "Internal tools and web apps",
    body: "Custom software your client's team runs their day on: records, approvals, bookings and reports.",
    examples: ["Operations dashboards", "Approval flows", "Booking systems"],
    icon: Workflow,
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps built once, published under your client's name.",
    examples: ["Customer apps", "Staff apps", "Store releases"],
    icon: Smartphone,
  },
];

export type AgencyStep = { title: string; body: string };

/** TODO(content): add the quote turnaround in days to step 2 once confirmed. */
export const agencySteps: AgencyStep[] = [
  { title: "You bring the brief.", body: "We join the call, or stay in the background." },
  { title: "We quote, fixed.", body: "A price and timeline you can add your margin to." },
  { title: "We build, you present.", body: "Weekly demos come to you first." },
  { title: "We hand over.", body: "Code, logins and documents go to you or your client." },
  { title: "We stay on.", body: "Optional monthly support, still under your name." },
];

/** TODO(content): add the hours of time-zone overlap to the named-lead promise. */
export const partnerPromises = [
  "NDA signed before you share any client detail.",
  "White-label by default: our name never appears in the work or the code.",
  "We never contact, pitch or accept work from your clients. It's in the agreement.",
  "One named lead who reports to you.",
  "Fixed quotes, so your margin is protected.",
  "All code and IP transfer on payment.",
];

export type WayToWork = { title: string; body: string };

export const waysToWork: WayToWork[] = [
  { title: "Per project", body: "A fixed quote for each client build." },
  { title: "Dedicated pod", body: "Monthly capacity you assign to any client." },
  { title: "Overflow partner", body: "The builds your team has no time for." },
];
