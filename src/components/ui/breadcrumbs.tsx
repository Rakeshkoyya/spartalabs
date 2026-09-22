import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/content/site";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ label: "Home", href: "/" }, ...trail].map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: `${siteUrl()}${crumb.href === "/" ? "" : crumb.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="text-label text-muted font-label flex flex-wrap items-center gap-2 tracking-[0.12em] uppercase">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          {trail.map((crumb, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {last ? (
                  <span aria-current="page" className="text-accent">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-accent transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
