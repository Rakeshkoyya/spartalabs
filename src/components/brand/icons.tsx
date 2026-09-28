import {
  BrainCircuit,
  Clapperboard,
  GraduationCap,
  Globe,
  LifeBuoy,
  Megaphone,
  PenTool,
  Settings,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** One icon per concept, shared by every section so a service always wears the same glyph. */
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
  "Film and media": Clapperboard,
  Advertising: Megaphone,
  Operations: Settings,
  AI: BrainCircuit,
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
