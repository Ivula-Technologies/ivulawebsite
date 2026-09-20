"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { Magnetic } from "@/components/motion/magnetic";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";
import { flagship } from "@/lib/products";
import { cta, site } from "@/lib/site";

const trustPills = [
  "Founder-led delivery",
  "Product-minded partnership",
  "Nairobi roots, global outlook",
];

const capabilities = [
  { icon: Code2, label: "Software products" },
  { icon: BrainCircuit, label: "AI & automation" },
  { icon: Cloud, label: "Cloud systems" },
];

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
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <AuroraBackground />

      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex max-w-2xl flex-col items-start"
          >
            <motion.div variants={item}>
              <Badge variant="accent" className="uppercase">
                <Sparkles className="size-3.5" />
                Product studio · Nairobi, Kenya
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md"
            >
              Technology that genuinely{" "}
              <span className="text-gradient">serves your business.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              We help ambitious teams clarify ideas, automate difficult work,
              and launch dependable software — from internal platforms and AI
              workflows to full SaaS products.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Button asChild variant="gradient" size="xl">
                  <Link href={cta.projectHref}>
                    {cta.projectLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Button asChild variant="outline" size="xl">
                <a href={cta.canopyHref}>
                  {cta.canopyLabel}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
            >
              {trustPills.map((pill) => (
                <li key={pill} className="inline-flex items-center gap-2">
                  <Check className="size-4 text-cyan-500" />
                  {pill}
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={item}
              className="mt-8 text-sm text-muted-foreground"
            >
              Already have a brief?{" "}
              <a
                href={cta.projectMailto}
                className="inline-flex items-center gap-1.5 font-semibold text-foreground underline-offset-4 hover:underline"
              >
                <Mail className="size-3.5" />
                {site.contact.email}
              </a>
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-3xl"
          >
            <div className="absolute -inset-8 rounded-[2.75rem] bg-brand-gradient opacity-20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/60 bg-white/65 p-3 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-5">
              <div className="mb-4 flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                    Built by Ivula
                  </p>
                  <p className="mt-1 font-display text-lg font-bold">
                    {flagship.fullName}
                  </p>
                </div>
                <a
                  href={cta.canopyHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  Visit Canopy <ArrowRight className="size-4" />
                </a>
              </div>

              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <BrowserFrame
                  src={flagship.screenshot}
                  alt="Ivula Canopy organization dashboard preview"
                  url="canopy.ivulatechnologies.com"
                  priority
                  className="ring-1 ring-black/5 dark:ring-white/10"
                />
              </motion.div>
            </div>

            <div className="relative z-10 mx-4 -mt-4 grid gap-3 sm:mx-8 sm:grid-cols-3">
              {capabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
