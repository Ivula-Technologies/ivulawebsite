"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Button } from "@/components/ui/button";
import { carePlans, type Billing } from "@/lib/care-plans";
import { cn } from "@/lib/utils";

/** Tier cards with a monthly / annual switch. */
export function PlanPricing() {
  const [billing, setBilling] = React.useState<Billing>("monthly");

  return (
    <div>
      <div className="flex justify-center">
        <div
          role="radiogroup"
          aria-label="Billing cycle"
          className="inline-flex rounded-full border border-border bg-secondary/50 p-1"
        >
          {(["monthly", "annual"] as const).map((cycle) => (
            <button
              key={cycle}
              type="button"
              role="radio"
              aria-checked={billing === cycle}
              onClick={() => setBilling(cycle)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                billing === cycle
                  ? "bg-card text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cycle === "monthly" ? "Monthly" : "Yearly · 2 months free"}
            </button>
          ))}
        </div>
      </div>

      <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        {carePlans.map((plan) => {
          const price = billing === "monthly" ? plan.monthly : plan.annual;
          const checkout = plan.checkout[billing];
          return (
            <RevealItem key={plan.slug} className="h-full">
              <SpotlightCard
                className={cn(
                  "flex h-full flex-col gap-6 rounded-3xl border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                  plan.featured
                    ? "border-cyan-500/50 ring-1 ring-cyan-500/30"
                    : "border-border"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 z-10 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
                </div>
                <p className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold">${price}</span>
                  <span className="text-sm text-muted-foreground">
                    per site / {billing === "monthly" ? "month" : "year"}
                  </span>
                </p>
                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.featured ? "gradient" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {checkout ? (
                    <a href={checkout}>
                      Start {plan.name} <ArrowRight className="size-4" />
                    </a>
                  ) : (
                    <a href={`?plan=${plan.slug}#start`}>
                      Choose {plan.name} <ArrowRight className="size-4" />
                    </a>
                  )}
                </Button>
              </SpotlightCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
