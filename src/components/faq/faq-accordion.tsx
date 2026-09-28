"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className={cn("card w-full self-start px-6 py-2 sm:px-8", className)}
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="border-hairline border-b last:border-b-0"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group font-display flex w-full items-center justify-between gap-6 py-5 text-left text-[1.0625rem] font-medium">
              {item.question}
              <Plus
                aria-hidden
                className="text-accent bg-accent-wash size-7 shrink-0 rounded-full p-1.5 transition-transform duration-200 ease-[var(--ease-out-expo)] group-data-[state=open]:rotate-45"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content overflow-hidden">
            <p className="text-muted max-w-[58ch] pb-5 text-sm">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
