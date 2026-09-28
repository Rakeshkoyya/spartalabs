import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { allServices } from "@/content/services";
import { IconBox } from "@/components/brand/icons";
import { Section, SectionHeader } from "@/components/ui/section";

/** A glimpse of all six services; the full detail lives on /services. */
export function WhatWeBuild() {
  return (
    <Section id="services" label="What we build">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          index="02"
          kicker="What we build"
          title="Everything your business runs on, from one team."
          className="flex-1"
        />
        <Link
          href="/services"
          className="text-accent font-display group border-hairline-strong hover:border-accent flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-200"
        >
          All services
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service, index) => (
          <li
            key={service.key}
            data-lock=""
            style={{ "--m-delay": `${(index % 3) * 70}ms` } as React.CSSProperties}
          >
            <Link
              href={`/services#${service.key}`}
              className="card spotlight group flex h-full items-start gap-4 p-6 transition-transform duration-300 ease-[var(--ease-out-expo)] motion-safe:hover:-translate-y-1 sm:p-7"
            >
              <IconBox icon={service.icon} />
              <span className="min-w-0 flex-1">
                <span className="font-display group-hover:text-accent block text-[1.1875rem] font-semibold tracking-[-0.015em] transition-colors">
                  {service.title}
                </span>
                <span className="text-muted mt-1 block text-[0.9375rem]">{service.short}</span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="text-muted group-hover:text-accent mt-1 size-4 shrink-0 transition-colors"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
