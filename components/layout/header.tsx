"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { mainNav, cta, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border glass shadow-soft"
          : "border-b border-transparent"
      )}
    >
      <nav
        className="container-wide flex h-16 items-center justify-between gap-4 md:h-18"
        aria-label="Main"
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const href = item.href as string;
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {item.title}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={cta.mailto}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
            aria-label={`Email ${site.contact.email}`}
          >
            <Mail className="size-4" />
            <span className="hidden xl:inline">{site.contact.email}</span>
          </a>
          <ThemeToggle />
          <Magnetic className="hidden sm:block">
            <Button asChild variant="gradient" size="sm">
              <Link href={cta.projectHref}>{cta.projectLabel}</Link>
            </Button>
          </Magnetic>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border glass md:hidden"
          >
            <div className="container-wide flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary"
                >
                  {item.title}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button asChild variant="gradient" size="lg">
                  <Link href={cta.projectHref} onClick={() => setOpen(false)}>
                    {cta.projectLabel}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={cta.workHref} onClick={() => setOpen(false)}>
                    {cta.workLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
