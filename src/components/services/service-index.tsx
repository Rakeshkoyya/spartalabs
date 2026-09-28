"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { key: string; title: string };

/**
 * Sticky table of contents for the services page. Highlights the service
 * whose panel is crossing the upper third of the viewport.
 */
export function ServiceIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.key);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.key);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Services on this page">
      <ol className="border-hairline flex flex-col border-l">
        {items.map((item, index) => {
          const current = item.key === active;
          return (
            <li key={item.key}>
              <a
                href={`#${item.key}`}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "-ml-px flex min-h-11 items-center gap-3 border-l-2 py-2 pl-5 text-[0.9375rem] transition-colors duration-200",
                  current
                    ? "border-accent-core text-ink font-semibold"
                    : "text-muted hover:text-ink border-transparent",
                )}
              >
                <span className="text-accent font-mono text-[0.75rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
