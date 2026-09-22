"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A route change while the overlay is open would otherwise leave it stuck.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color] duration-300 ease-[var(--ease-out-expo)]",
          scrolled
            ? "border-hairline bg-page/80 border-b backdrop-blur-xl"
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
            <Link
              href="/"
              className="font-display flex items-center gap-2.5 text-base font-bold tracking-[-0.02em]"
            >
              <ChevronMark className="text-accent-core" />
              {site.name}
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "hover:text-ink text-sm transition-colors duration-200",
                      active ? "text-ink" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
                className="border-hairline-strong text-muted grid size-9 place-items-center rounded-[var(--radius-control)] border md:hidden"
              >
                <Menu aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {open ? (
        <div className="bg-page fixed inset-0 z-[60] flex flex-col md:hidden">
          <Container>
            <div className="flex h-[72px] items-center justify-between">
              <span className="font-display flex items-center gap-2.5 text-base font-bold tracking-[-0.02em]">
                <ChevronMark className="text-accent-core" />
                {site.name}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="border-hairline-strong text-muted grid size-9 place-items-center rounded-[var(--radius-control)] border"
              >
                <X aria-hidden className="size-4" />
              </button>
            </div>
          </Container>

          <Container className="flex flex-1 flex-col justify-between pb-10">
            <nav aria-label="Mobile" className="flex flex-col pt-6">
              {nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-h3 border-hairline font-display flex items-baseline gap-4 border-b py-5 font-semibold"
                >
                  <span className="text-label text-accent font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href={primaryCta.href} onClick={() => setOpen(false)} className="mt-10 w-full">
              {primaryCta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </>
  );
}
