import { cn } from "@/lib/utils";

type Tag = "div" | "li" | "span" | "p" | "article" | "section";

type Props = {
  /** Milliseconds after the element enters view. Keep sequences under ~400ms total. */
  delay?: number;
  as?: Tag;
  className?: string;
  children: React.ReactNode;
};

function styleFor(delay?: number) {
  return delay ? ({ "--m-delay": `${delay}ms` } as React.CSSProperties) : undefined;
}

/**
 * The first beat of a sequence: a hairline drawn from its left edge. Put this on
 * the rule itself, not on a wrapper.
 */
export function Draw({ delay, as: Tag = "span", className, children }: Props) {
  return (
    <Tag data-draw="" style={styleFor(delay)} className={cn(className)}>
      {children}
    </Tag>
  );
}

/**
 * A heading revealed by a passing edge. Reads as drawn rather than faded, which
 * is the whole point — see the MOTION block in globals.css.
 */
export function Wipe({ delay, as: Tag = "div", className, children }: Props) {
  return (
    <Tag data-wipe="" style={styleFor(delay)} className={cn(className)}>
      {children}
    </Tag>
  );
}

/** A block locking into alignment from the edge it aligns to. */
export function Lock({ delay, as: Tag = "div", className, children }: Props) {
  return (
    <Tag data-lock="" style={styleFor(delay)} className={cn(className)}>
      {children}
    </Tag>
  );
}
