import { cn } from "@/lib/utils";

/** 1240px content shell with the 24 / 32px gutter. Never set page padding elsewhere. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-6 lg:px-8", className)}>{children}</div>;
}
