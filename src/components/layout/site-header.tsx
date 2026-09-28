"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, primaryCta } from "@/content/site";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The pill takes the tone of whatever band is under it: dark glass over the
  // navy hero and bands, the page's own surface over paper.
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const probe = document
        .elementsFromPoint(window.innerWidth / 2, 40)
        .find((el) => !el.closest("header"));
      setOverDark(Boolean(probe?.closest(".band-dark")));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

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
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
        {/*
          Every page opens on a navy band, so the bar reads as navy until it
          leaves it; then it lifts into a floating pill on the page's surface.
        */}
        <div
          className={cn(
            "mx-auto max-w-[1240px] rounded-full border transition-[background-color,border-color,box-shadow] duration-300 ease-[var(--ease-out)]",
            overDark && "tone-dark",
            !scrolled && "border-transparent",
            scrolled &&
              overDark &&
              "border-white/10 bg-[#0b1627]/70 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.7)] backdrop-blur-xl",
            scrolled &&
              !overDark &&
              "border-hairline bg-page/80 shadow-[0_18px_40px_-24px_rgb(11_40_90/0.45)] backdrop-blur-xl",
          )}
        >
          <div className="flex h-14 items-center justify-between gap-6 pr-2 pl-5 lg:pl-6">
            <Link href="/" aria-label="Sparta Labs home" className="flex items-center">
              <Logo variant="wordmark" priority className="w-[132px] md:w-[148px]" />
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
                      "font-display hover:text-ink relative text-[0.9375rem] font-medium transition-colors duration-200",
                      "after:bg-accent-bright after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:rounded-full after:transition-transform after:duration-300",
                      active ? "text-ink after:scale-x-100" : "text-muted after:scale-x-0",
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
                className="border-hairline-strong text-muted grid size-9 place-items-center rounded-full border md:hidden"
              >
                <Menu aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {open ? (
        <div className="band-dark menu-sheet fixed inset-0 z-[60] flex flex-col md:hidden">
          <Container>
            <div className="flex h-[80px] items-center justify-between px-2">
              <Logo variant="wordmark" className="w-[132px]" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="border-hairline-strong text-muted grid size-9 place-items-center rounded-full border"
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
                  data-enter="lock"
                  style={{ "--enter-delay": `${120 + index * 60}ms` } as React.CSSProperties}
                  className="text-h3 border-hairline font-display flex items-baseline gap-4 border-b py-5 font-semibold"
                >
                  <span className="text-accent font-mono text-[0.8125rem]">
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
