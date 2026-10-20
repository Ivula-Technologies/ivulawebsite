import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CreditCard, RefreshCcw, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { ProductMark } from "@/components/product/product-mark";
import { StatusBadge } from "@/components/product/status-badge";
import { products } from "@/lib/products";
import { carePlans } from "@/lib/care-plans";
import { hostingPlans } from "@/lib/offers";
import { cta, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Every Ivula price in one place: Canopy, LeadFast AI, ProposalKit, ShelfKeeper, WakiliNivo, custom builds, care plans and web hosting. Free trials, no card needed.",
  alternates: { canonical: "/pricing" },
};

const promises = [
  {
    icon: CreditCard,
    title: "Free trials, no card",
    description: "Canopy, LeadFast AI and ProposalKit start with 14 days free. ShelfKeeper is free to join.",
  },
  {
    icon: RefreshCcw,
    title: "Same price when you renew",
    description: "No teaser rates. What you pay in year one is what you pay in year two.",
  },
  {
    icon: ShieldCheck,
    title: "Cancel any time",
    description: "Monthly plans have no long-term contract. Stop whenever you like.",
  },
];

/** Every product, service and hosting plan with its price, on one page. */
export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear prices for{" "}
            <span className="text-gradient">everything we make.</span>
          </>
        }
        description="Our products, custom builds, website care and hosting, with what each plan includes. Prices are in US dollars unless marked KES."
      >
        <Magnetic>
          <Button asChild variant="gradient" size="xl">
            <Link href="#products">
              See product plans <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Magnetic>
        <Button asChild variant="outline" size="xl">
          <Link href="#services">Services and hosting</Link>
        </Button>
      </PageHero>

      <section className="pb-6">
        <div className="container-wide">
          <RevealGroup className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
            {promises.map(({ icon: Icon, title, description }) => (
              <RevealItem key={title}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
                  <Icon className="mt-0.5 size-5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Products"
            title="Our products and their plans"
            description="Monthly plans per organization. Each product page has the full feature list."
          />
          <RevealGroup className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {products.map((product) => (
              <RevealItem key={product.slug} className="h-full min-w-0">
                <div className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <ProductMark slug={product.slug} size="sm" />
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-bold">{product.fullName}</h3>
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                          {product.category}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={product.status} />
                  </div>

                  {product.plans.length > 0 ? (
                    <ul className="mt-6 divide-y divide-border rounded-2xl border border-border">
                      {product.plans.map((plan) => (
                        <li
                          key={plan.name}
                          className={cn(
                            "flex items-center justify-between gap-4 px-4 py-3",
                            plan.featured && "bg-cyan-500/5"
                          )}
                        >
                          <div className="min-w-0">
                            <p className="font-semibold">
                              {plan.name}
                              {plan.featured && (
                                <span className="ml-2 rounded-full bg-cyan-500/15 px-2 py-0.5 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300">
                                  Popular
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                          </div>
                          <p className="shrink-0 text-right font-display text-xl font-bold">
                            {plan.price}
                            {plan.period && (
                              <span className="text-sm font-medium text-muted-foreground">{plan.period}</span>
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 rounded-2xl border border-dashed border-border px-4 py-5 text-center font-semibold">
                      Priced per firm
                    </p>
                  )}

                  <p className="mt-4 flex-1 text-sm text-muted-foreground">{product.pricingNote}</p>
                  <Button asChild variant="outline" size="sm" className="mt-6 w-fit">
                    <Link href={`/products/${product.slug}`}>
                      About {product.name} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-border bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Services and hosting"
            title="Custom builds, website care and hosting"
            description="The same team that builds our products builds, looks after and hosts yours."
          />

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            <Reveal direction="up" className="h-full">
              <div className="flex h-full flex-col rounded-[2rem] border border-cyan-500/30 bg-card p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
                  Ivula Studio
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">Custom software</h3>
                <p className="mt-4 font-display text-4xl font-bold">
                  $7,500<span className="text-base font-medium text-muted-foreground"> and up</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Fixed price per project, 50% to start</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {[
                    "Free written estimate within one business day",
                    "Working software to review every week",
                    "You own all the code, designs and accounts",
                  ].map((point) => (
                    <li key={point} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="gradient" size="lg" className="mt-8">
                  <Link href={cta.projectHref}>{cta.projectLabel}</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.05} className="h-full">
              <div className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
                  Ivula Care Plans
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">Managed website care</h3>
                <ul className="mt-6 divide-y divide-border rounded-2xl border border-border">
                  {carePlans.map((plan) => (
                    <li key={plan.slug} className="flex items-center justify-between gap-4 px-4 py-3">
                      <div className="min-w-0">
                        <p className="font-semibold">{plan.name}</p>
                        <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                      </div>
                      <p className="shrink-0 font-display text-xl font-bold">
                        ${plan.monthly}
                        <span className="text-sm font-medium text-muted-foreground">/mo</span>
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">
                  Per site. Pay yearly and get two months free. Free migration, no long-term contract.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-8">
                  <Link href="/care-plans">See care plans</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1} className="h-full">
              <div className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
                  Ivula Hosting
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">cPanel web hosting</h3>
                <ul className="mt-6 divide-y divide-border rounded-2xl border border-border">
                  {hostingPlans.map((plan) => (
                    <li key={plan.name} className="flex items-center justify-between gap-4 px-4 py-3">
                      <div className="min-w-0">
                        <p className="font-semibold">{plan.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {plan.sites} {plan.sites === 1 ? "site" : "sites"}, {plan.disk}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-display text-xl font-bold">
                          {plan.price.usd}
                          <span className="text-sm font-medium text-muted-foreground">/yr</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{plan.price.kes}/yr</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">
                  Free SSL, business email and daily backups. Pay by card, or with M-Pesa in Kenya.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-8">
                  <a href={site.hosting}>Order hosting</a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              Need something that is not listed, or a price for a team or nonprofit?{" "}
              <Link href="/contact" className="font-semibold text-foreground underline underline-offset-4">
                Ask us
              </Link>{" "}
              and we will reply within one business day.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
