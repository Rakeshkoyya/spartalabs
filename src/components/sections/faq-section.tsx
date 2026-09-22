"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import { Section, SectionHeader } from "@/components/ui/section";

export function FaqSection() {
  return (
    <Section id="faq" className="border-t border-hairline">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        <SectionHeader
          kicker="Questions"
          title="The things people ask before they email us."
          lede="Including the ones most agencies leave you to find out later."
        />

        <Accordion.Root type="single" collapsible defaultValue="item-0" className="w-full">
          {faq.map((item, index) => (
            <Accordion.Item
              key={item.question}
              value={`item-${index}`}
              className="border-b border-hairline first:border-t"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-4 text-left text-[0.9375rem] font-medium">
                  {item.question}
                  <Plus
                    aria-hidden
                    className="size-4 shrink-0 text-accent transition-transform duration-200 ease-[var(--ease-out-expo)] group-data-[state=open]:rotate-45"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content overflow-hidden">
                <p className="max-w-[58ch] pb-5 text-sm text-muted">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
