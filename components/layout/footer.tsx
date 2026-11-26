import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/shared/logo";
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
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
