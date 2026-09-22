import Image from "next/image";
import { cn } from "@/lib/utils";

const sources = {
  wordmark: {
    light: "/brand/logo-wordmark.png",
    dark: "/brand/logo-wordmark-white.png",
    w: 900,
    h: 199,
  },
  mark: { light: "/brand/logo-mark.png", dark: "/brand/logo-mark-white.png", w: 600, h: 693 },
  full: { light: "/brand/logo-full.png", dark: "/brand/logo-full-white.png", w: 900, h: 854 },
} as const;

/**
 * The Sparta Labs logo, in its navy and white variants. Both render and CSS
 * shows the one that suits the surrounding surface — paper or navy — so a logo
 * inside a dark band is right in either theme, with no client-side switching.
 */
export function Logo({
  variant = "wordmark",
  tone = "auto",
  className,
  priority = false,
  alt = "Sparta Labs",
}: {
  variant?: keyof typeof sources;
  /** Force one variant; `auto` follows the surface. */
  tone?: "auto" | "light" | "dark";
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  const src = sources[variant];
  const common = { width: src.w, height: src.h, priority, sizes: "(max-width: 768px) 60vw, 480px" };

  if (tone !== "auto") {
    return (
      <Image
        {...common}
        src={tone === "dark" ? src.dark : src.light}
        alt={alt}
        className={cn("h-auto", className)}
      />
    );
  }

  return (
    <>
      <Image
        {...common}
        src={src.light}
        alt={alt}
        className={cn("on-dark:hidden h-auto", className)}
      />
      <Image
        {...common}
        src={src.dark}
        alt={alt}
        className={cn("on-dark:block hidden h-auto", className)}
      />
    </>
  );
}
