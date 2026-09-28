"use client";

import { useState } from "react";
import { faq, faqGroups, type FaqGroup } from "@/content/faq";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "./faq-accordion";

/**
 * Two tabs, businesses and agencies. Both panels stay in the document (the
 * inactive one is `hidden`), so every answer is there for search and for
 * visitors without JavaScript to read in the source order.
 */
export function FaqTabs() {
  const [active, setActive] = useState<FaqGroup>("business");

  return (
    <div>
      <div role="tablist" aria-label="Questions by audience" className="flex flex-wrap gap-2.5">
        {faqGroups.map((group) => {
          const selected = group.key === active;
          return (
            <button
              key={group.key}
              type="button"
              role="tab"
              id={`faq-tab-${group.key}`}
              aria-selected={selected}
              aria-controls={`faq-panel-${group.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(group.key)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                const next = faqGroups.find((g) => g.key !== group.key);
                if (!next) return;
                setActive(next.key);
                document.getElementById(`faq-tab-${next.key}`)?.focus();
              }}
              className={cn(
                "font-display min-h-11 rounded-full border px-5 text-sm font-medium transition-colors duration-200",
                selected
                  ? "border-accent-core bg-accent-core text-white"
                  : "border-hairline-strong bg-surface text-muted hover:border-accent hover:text-accent",
              )}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      {faqGroups.map((group) => (
        <div
          key={group.key}
          role="tabpanel"
          id={`faq-panel-${group.key}`}
          aria-labelledby={`faq-tab-${group.key}`}
          hidden={group.key !== active}
          className="mt-8"
        >
          <FaqAccordion items={faq.filter((item) => item.group === group.key)} />
        </div>
      ))}
    </div>
  );
}
