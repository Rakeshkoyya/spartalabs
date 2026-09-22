import {
  Bot,
  BrainCircuit,
  Bug,
  ChartLine,
  Clapperboard,
  CloudCog,
  Database,
  Eye,
  GraduationCap,
  Globe,
  KeyRound,
  LifeBuoy,
  Megaphone,
  PanelsTopLeft,
  PenTool,
  Plug,
  Route,
  Settings,
  Smartphone,
  Stethoscope,
  Store,
  BriefcaseBusiness,
  TriangleAlert,
  Palette,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** One icon per concept, shared by every section so a service always wears the same glyph. */
export const serviceIcons: Record<string, LucideIcon> = {
  Websites: Globe,
  Apps: Smartphone,
  "AI Automations": Zap,
  "AI Solutions": BrainCircuit,
  "Custom Platforms": Workflow,
};

export const capabilityIcons: Record<string, LucideIcon> = {
  platforms: Workflow,
  web: Globe,
  mobile: Smartphone,
  ai: BrainCircuit,
  brand: PenTool,
  operate: LifeBuoy,
};

export const industryIcons: Record<string, LucideIcon> = {
  Education: GraduationCap,
  "Film & media": Clapperboard,
  Advertising: Megaphone,
  Operations: Settings,
};

export const hubIcons: Record<string, LucideIcon> = {
  website: Globe,
  mobile: Smartphone,
  assistant: Bot,
  automations: Zap,
  dashboards: ChartLine,
  integrations: Plug,
};

export const exampleIcons: Record<string, LucideIcon> = {
  schools: GraduationCap,
  retail: Store,
  clinics: Stethoscope,
  services: BriefcaseBusiness,
};

export const podIcons: Record<string, LucideIcon> = {
  "Product & UX": Route,
  Frontend: PanelsTopLeft,
  "Backend & platform": Database,
  Mobile: Smartphone,
  "AI / ML": BrainCircuit,
  "QA & automation": Bug,
  "DevOps & cloud": CloudCog,
  "Brand & design": Palette,
};

export const promiseIcons: Record<string, LucideIcon> = {
  weekly: Eye,
  ip: KeyRound,
  warnings: TriangleAlert,
};

export function IconBox({
  icon: Icon,
  className,
}: {
  icon: LucideIcon | undefined;
  className?: string;
}) {
  if (!Icon) return null;
  return (
    <span aria-hidden className={`icon-box ${className ?? ""}`}>
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}
