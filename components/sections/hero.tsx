"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { Magnetic } from "@/components/motion/magnetic";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";
import { flagship } from "@/lib/products";
import { cta, site } from "@/lib/site";

const trustPills = ["No contract", "Cancel anytime", "Used worldwide"];

export function Hero() {
  const reduce = usePrefersReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <AuroraBackground />

      <div className="container-wide relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <Badge variant="accent" className="uppercase">
              <Sparkles className="size-3.5" />
              A product studio building for the world
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md"
          >
            Manage your members, money, and{" "}
            <span className="text-gradient">momentum</span> — all in one place.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            {flagship.subhead}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Magnetic>
              <Button asChild variant="gradient" size="xl">
                <Link href={cta.trialHref}>
                  {cta.trialLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild variant="outline" size="xl">
              <Link href={cta.demoHref}>{cta.demoLabel}</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {trustPills.map((pill) => (
              <li key={pill} className="inline-flex items-center gap-2">
                <Check className="size-4 text-cyan-500" />
                {pill}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Hero product visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-x-8 -top-8 bottom-0 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-3xl" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrowserFrame
              src={flagship.screenshot}
              alt="Ivula Cannopy dashboard preview"
              className="ring-1 ring-black/5 dark:ring-white/10"
            />
          </motion.div>

          {/* Floating accent card */}
          {!reduce && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border glass p-4 shadow-soft-lg sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Check className="size-5" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold">Contribution recorded</p>
                  <p className="text-xs text-muted-foreground">
                    Momentum, automatically tracked
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Quiet email line (no phone, per brand) */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Questions? Email us at{" "}
          <a
            href={cta.mailto}
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
          >
            <Mail className="size-3.5" />
            {site.contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
