"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { flagship } from "@/lib/products";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

export function HowItWorks() {
  const reduce = usePrefersReducedMotion();
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-border bg-secondary/30 py-20 md:py-28"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="60-second how-it-works"
          title="From spreadsheet chaos to clarity, fast"
          description="No IT department required. Cannopy gets your organization organized in three simple steps."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {flagship.steps.map((step, i) => (
            <Reveal key={step.title} direction="up" delay={i * 0.12}>
              <div className="relative flex h-full flex-col gap-4">
                {/* Connector line */}
                {i < flagship.steps.length - 1 && (
                  <span className="absolute left-7 top-7 hidden h-px w-[calc(100%+2rem)] bg-gradient-to-r from-cyan-500/40 to-transparent md:block" />
                )}
                <motion.span
                  whileHover={reduce ? undefined : { scale: 1.08, rotate: -3 }}
                  className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-white shadow-glow"
                >
                  {i + 1}
                </motion.span>
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="mt-14 flex items-center justify-center">
            <button
              type="button"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-cyan-500 text-white transition-transform group-hover:scale-110">
                <Play className="size-4 fill-current" />
              </span>
              Watch the 60-second tour
              <span className="text-muted-foreground">(placeholder)</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
