/**
 * Long-form text for the legal pages. Deliberately narrow and quiet — these
 * pages exist to be findable and readable, not designed.
 */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted [&_a]:text-accent [&_h2]:text-h3 [&_h2]:text-ink flex max-w-[70ch] flex-col gap-5 text-base leading-relaxed hover:[&_a]:underline [&_h2]:mt-6 [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
      {children}
    </div>
  );
}
