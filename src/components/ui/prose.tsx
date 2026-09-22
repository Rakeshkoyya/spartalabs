/**
 * Long-form text for the legal pages. Deliberately narrow and quiet — these
 * pages exist to be findable and readable, not designed.
 */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-[70ch] flex-col gap-5 text-[0.9375rem] leading-relaxed text-muted [&_a]:text-accent hover:[&_a]:underline [&_h2]:mt-6 [&_h2]:text-h3 [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
      {children}
    </div>
  );
}
