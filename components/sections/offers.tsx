import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { StatusBadge } from "@/components/product/status-badge";
import { offers } from "@/lib/offers";

/** Studio, Care Plans and Hosting: the ways to work with Ivula directly. */
export function Offers() {
  return (
    <section id="services" className="scroll-mt-20 border-y border-border bg-secondary/30 py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Work with us"
          title="Build it, host it, look after it."
          description="The team behind our products is available for your project, and the servers that run them can run your website too."
        />
        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {offers.map(({ slug, icon: Icon, ...offer }) => (
            <RevealItem key={slug} className="h-full">
              <SpotlightCard className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <Icon className="size-6" />
                  </span>
                  <StatusBadge status={offer.status} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{offer.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{offer.audience}</p>
                <p className="mt-4 text-pretty text-muted-foreground">{offer.description}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {offer.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <p className="font-display text-2xl font-bold">{offer.price}</p>
                    <p className="text-xs text-muted-foreground">{offer.priceNote}</p>
                  </div>
                  <Link
                    href={offer.href}
                    {...(offer.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-600 dark:text-cyan-400"
                  >
                    {offer.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
