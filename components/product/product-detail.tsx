"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Check, Globe2 } from "lucide-react";
import { getProduct } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ProductMark } from "@/components/product/product-mark";
import { StatusBadge } from "@/components/product/status-badge";
import { Magnetic } from "@/components/motion/magnetic";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";
import { cta as siteCta } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Reusable product-detail template. Every product in lib/products.ts renders
 * through this single component — adding product #2 needs zero new layout code.
 */
export function ProductDetail({ slug }: { slug: string }) {
  const product = getProduct(slug);
  const reduce = usePrefersReducedMotion();
  if (!product) return null;

  return (
    <article className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <AuroraBackground />
        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <Reveal direction="up">
                <div className="flex flex-wrap items-center gap-3">
                  <ProductMark slug={product.slug} size="md" />
                  <div>
                    <p className="font-display text-lg font-bold leading-tight">{product.fullName}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{product.category}</p>
                  </div>
                  <StatusBadge status={product.status} className="ml-1" />
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.05}>
                <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md">
                  {product.headline}
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <p className="max-w-xl text-pretty text-lg text-muted-foreground">
                  {product.subhead}
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <div className="flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <Button asChild variant="gradient" size="xl">
                      {product.cta.primaryHref.startsWith("/") ? (
                        <Link href={product.cta.primaryHref}>
                          {product.cta.primaryLabel}
                          <ArrowRight className="size-4" />
                        </Link>
                      ) : (
                        <a href={product.cta.primaryHref}>
                          {product.cta.primaryLabel}
                          <ArrowRight className="size-4" />
                        </a>
                      )}
                    </Button>
                  </Magnetic>
                  <Button asChild variant="outline" size="xl">
                    {product.cta.secondaryHref.startsWith("/") ? (
                      <Link href={product.cta.secondaryHref}>
                        {product.cta.secondaryLabel}
                      </Link>
                    ) : (
                      <a href={product.cta.secondaryHref}>
                        {product.cta.secondaryLabel}
                      </a>
                    )}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
                <motion.div
                  animate={reduce ? undefined : { y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <BrowserFrame
                    src={product.screenshot}
                    alt={`${product.fullName} product screenshot`}
                    url={product.domain}
                    priority
                  />
                </motion.div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ---------- WHO IT'S FOR ---------- */}
      {product.audiences.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container-wide">
            <SectionHeading eyebrow="Who it's for" title={product.audienceTitle} />
            <RevealGroup
              className={cn(
                "mt-14 grid gap-6 sm:grid-cols-2",
                product.audiences.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              )}
            >
              {product.audiences.map((aud) => {
                const A = aud.icon;
                return (
                  <RevealItem key={aud.label} className="h-full">
                    <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <A className="size-6" />
                      </span>
                      <h3 className="font-display text-lg font-bold">
                        {aud.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {aud.pain}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ---------- HOW IT WORKS ---------- */}
      {product.steps.length > 0 && (
        <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-20 md:py-28">
          <div className="container-wide">
            <SectionHeading eyebrow="Simple rollout" title="How it works" />
            <div
              className={cn(
                "mt-14 grid gap-6 md:grid-cols-2",
                product.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              )}
            >
              {product.steps.map((step, i) => (
                <Reveal key={step.title} direction="up" delay={i * 0.1}>
                  <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-soft">
                    <span className="font-display text-5xl font-bold text-cyan-500/30">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- FEATURES ---------- */}
      {product.features.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Features"
              title={`What ${product.name} does for you`}
            />
            <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => {
                const F = feature.icon;
                return (
                  <RevealItem key={feature.title} className="h-full">
                    <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                        <F className="size-6" />
                      </span>
                      <h3 className="font-display text-lg font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ---------- PRICING ---------- */}
      <section className="border-t border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow={product.status === "coming-soon" ? "Launch pricing" : "Pricing"}
            title={product.plans.length ? "Simple monthly plans" : "Pricing for your firm"}
            description={product.pricingNote}
          />
          {product.plans.length > 0 && (
            <RevealGroup
              className={cn(
                "mx-auto mt-14 grid max-w-4xl gap-6",
                product.plans.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              )}
            >
              {product.plans.map((plan) => (
                <RevealItem key={plan.name} className="h-full">
                  <div
                    className={cn(
                      "flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft",
                      plan.featured ? "border-cyan-500/40 shadow-glow" : "border-border"
                    )}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {plan.name}
                    </p>
                    <p className="mt-4 font-display text-4xl font-bold tracking-tight">
                      {plan.price}
                      {plan.period && (
                        <span className="text-base font-medium text-muted-foreground">{plan.period}</span>
                      )}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
          <Reveal direction="up" className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <Globe2 className="size-4" /> Available in: {product.market}
          </Reveal>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="py-20 md:py-24">
        <div className="container-wide">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy-900 px-8 py-16 text-center text-white shadow-soft-lg md:px-16 md:py-20">
              <AuroraBackground withGrid={false} />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
                <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-display-sm">
                  {product.closing.title}
                </h2>
                <p className="text-pretty text-white/80">{product.closing.body}</p>
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
                  {product.closing.points.map(
                    (item) => (
                      <li key={item} className="inline-flex items-center gap-2">
                        <Check className="size-4 text-cyan-400" /> {item}
                      </li>
                    )
                  )}
                </ul>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Magnetic>
                    <Button asChild variant="accent" size="xl">
                      <a href={product.cta.primaryHref}>
                        {product.cta.primaryLabel}
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </Magnetic>
                  <Button
                    asChild
                    size="xl"
                    className="bg-white/10 text-white hover:bg-white/20"
                  >
                    <Link href={`${siteCta.bookHref}?about=${product.slug}`}>
                      <CalendarClock className="size-4" /> Book a call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
