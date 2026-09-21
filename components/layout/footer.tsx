import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { site, footerNav, cta } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/30">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {site.description}
            </p>
            <a
              href={cta.mailto}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <Mail className="size-4" />
              {site.contact.email}
            </a>
            <p className="text-xs text-muted-foreground">{site.origin}</p>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold">{heading}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 rounded-3xl border border-border bg-brand-gradient p-8 text-white shadow-glow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Have a software challenge worth solving?
            </h3>
            <p className="mt-1 text-sm text-white/80">
              Share the problem, the outcome you need, and where your current tools are falling short.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href={cta.projectHref}>{cta.projectLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              <a href={cta.projectMailto}>
                Email us <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <a
              href={site.social.linkedin}
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
