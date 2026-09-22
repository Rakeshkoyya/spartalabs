import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-display font-medium leading-none tracking-[-0.005em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-[var(--ease-out-expo)] motion-safe:hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-blue-600 to-blue-400 text-white shadow-[0_10px_28px_-10px_rgb(10_108_240/0.7)] hover:shadow-[0_14px_34px_-10px_rgb(10_108_240/0.85)] hover:brightness-110",
  secondary:
    "border-hairline-strong text-ink bg-surface/40 hover:border-accent hover:text-accent backdrop-blur-sm",
  /** The brochure's back-cover button: white on navy. */
  light: "bg-white text-navy-950 hover:bg-ice shadow-[0_12px_32px_-12px_rgb(0_0_0/0.5)]",
  ghost: "text-muted hover:text-accent",
};

const sizes: Record<Variant, Record<Size, string>> = {
  primary: { sm: "px-4.5 py-2.5 text-sm", md: "px-6 py-3.5 text-base" },
  secondary: { sm: "px-4.5 py-2.5 text-sm", md: "px-6 py-3.5 text-base" },
  light: { sm: "px-4.5 py-2.5 text-sm", md: "px-6 py-3.5 text-base" },
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
