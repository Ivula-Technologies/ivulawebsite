"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { hostingPlans, type Currency } from "@/lib/offers";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Self-serve hosting plans with a USD / KES (M-Pesa) switch. */
export function HostingPlans() {
  const [currency, setCurrency] = React.useState<Currency>("usd");

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex justify-center">
        <div
          className="inline-flex rounded-full border border-border bg-card p-1 shadow-soft"
          role="radiogroup"
          aria-label="Currency"
        >
          {(
            [
              { id: "usd", label: "US dollars (card)" },
              { id: "kes", label: "Kenya shillings (M-Pesa)" },
            ] as const
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={currency === option.id}
              onClick={() => setCurrency(option.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                currency === option.id
                  ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {hostingPlans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col rounded-3xl border bg-card p-7 shadow-soft",
              plan.featured ? "border-cyan-500/40 shadow-glow" : "border-border"
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {plan.name}
            </p>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight">
              {plan.price[currency]}
              <span className="text-base font-medium text-muted-foreground">/yr</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {currency === "usd"
                ? `or ${plan.monthlyUsd}/mo billed monthly`
                : "Paid yearly with M-Pesa"}
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
              <li className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                {plan.sites === 1 ? "1 website" : `${plan.sites} websites`}
              </li>
              <li className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                {plan.disk} SSD storage
              </li>
              <li className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-cyan-500" />
                Same price at renewal
              </li>
            </ul>
            <a
              href={site.hosting}
              className={cn(
                "mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors",
                plan.featured
                  ? "bg-brand-gradient text-white"
                  : "border border-border hover:bg-secondary"
              )}
            >
              Get {plan.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
