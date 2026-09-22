import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge has no way to know that `text-h2` is a font size while
 * `text-muted` is a colour — both match its generic `text-*` pattern, so it
 * classifies them into the same group and silently drops the first one.
 * Registering the custom scales from globals.css keeps size and colour
 * independent.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "lede", "label"] }],
      "text-color": [
        {
          text: [
            "ink",
            "muted",
            "accent",
            "accent-core",
            "accent-contrast",
            "accent-wash",
            "signal",
            "page",
            "surface",
            "raised",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
