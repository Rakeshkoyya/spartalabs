import { cn } from "@/lib/utils";

export type RisePart = { text: string; accent?: boolean };

/**
 * A display line that rises word by word out of its own baseline. Each word is
 * clipped by its wrapper and travels on an inner span, so the text stays one
 * continuous string for screen readers and search, and with JavaScript off it
 * simply renders in place (the travel is gated on `html.js`).
 *
 * Pass the accent half of a heading as a separate part to colour it.
 */
export function RiseText({
  parts,
  delay = 0,
  accentClassName = "text-accent-core on-dark:text-accent-bright",
}: {
  parts: RisePart[];
  /** Milliseconds before the first word moves. */
  delay?: number;
  accentClassName?: string;
}) {
  let index = 0;

  return (
    <>
      {parts.map((part, partIndex) => {
        const words = part.text.trim().split(/\s+/);
        return (
          <span key={partIndex} className={cn(part.accent && accentClassName)}>
            {words.map((word, wordIndex) => {
              const w = index++;
              return (
                <span key={wordIndex}>
                  <span
                    className="rise-word"
                    style={
                      {
                        "--w": w,
                        "--enter-delay": `${delay}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <span>{word}</span>
                  </span>{" "}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}
