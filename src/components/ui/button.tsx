import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] border border-transparent font-medium leading-none transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-[var(--ease-out-expo)] motion-safe:hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-core text-accent-contrast font-semibold hover:bg-bronze-400 hover:shadow-[0_8px_24px_-8px_var(--glow)]",
  secondary: "border-hairline-strong text-ink hover:border-accent-core hover:text-accent",
  ghost: "text-muted hover:text-accent",
};

const sizes: Record<Variant, Record<Size, string>> = {
  primary: { sm: "px-4 py-2.5 text-sm", md: "px-5 py-3.5 text-base" },
  secondary: { sm: "px-4 py-2.5 text-sm", md: "px-5 py-3.5 text-base" },
  ghost: { sm: "px-1 py-1 text-sm", md: "px-1 py-1 text-base" },
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  };

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

/** Renders an anchor when given `href`, a button otherwise. Same visual contract either way. */
export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[variant][size], className);

  if (rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
