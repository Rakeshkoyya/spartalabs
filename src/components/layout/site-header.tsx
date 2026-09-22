"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, primaryCta, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { ChevronMark } from "@/components/ui/chevron-mark";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color] duration-300 ease-[var(--ease-out-expo)]",
        scrolled
          ? "border-b border-hairline bg-page/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-6 transition-[height] duration-300 ease-[var(--ease-out-expo)]",
            scrolled ? "h-[60px]" : "h-[72px]",
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-base font-bold tracking-[-0.02em]"
          >
            <ChevronMark className="text-accent-core" />
            {site.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Button href={primaryCta.href} size="sm" className="hidden sm:inline-flex">
              {primaryCta.label}
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-[var(--radius-control)] border border-hairline-strong text-muted md:hidden"
            >
              <Menu aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-page md:hidden">
          <Container>
            <div className="flex h-[72px] items-center justify-between">
              <span className="flex items-center gap-2.5 font-display text-base font-bold tracking-[-0.02em]">
                <ChevronMark className="text-accent-core" />
                {site.name}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-[var(--radius-control)] border border-hairline-strong text-muted"
              >
                <X aria-hidden className="size-4" />
              </button>
            </div>
          </Container>

          <Container className="flex flex-1 flex-col justify-between pb-10">
            <nav aria-label="Mobile" className="flex flex-col pt-6">
              {nav.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-hairline py-5 font-display text-h3 font-semibold"
                >
                  <span className="text-label font-mono text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
            <Button href={primaryCta.href} onClick={() => setOpen(false)} className="mt-10 w-full">
              {primaryCta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
