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
import { SplitWords } from "@/components/motion/split-words";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";
import { flagship } from "@/lib/products";
import { cta, site } from "@/lib/site";

const trustPills = [
  "Free written estimate",
  "Working software every week",
  "You own 100% of the code",
];

/** Verifiable proof points; keep these factual. */
const proof: { value: string; count?: number; label: string }[] = [
  { value: "3", count: 3, label: "platforms live in production" },
  { value: "Own SaaS", label: "we run Ivula Canopy ourselves" },
  { value: "Since 2022", label: "designing and shipping software" },
  { value: "US mornings", label: "live overlap with Eastern time" },
];

/** Scrolling strip of the kinds of things we ship. */
const stack = [
  "SaaS platforms",
  "MVPs for startups",
  "AI agents & assistants",
  "Workflow automation",
  "Customer portals",
  "Internal tools",
  "Mobile-first web apps",
  "APIs & integrations",
  "Dashboards & reporting",
  "Payments & subscriptions",
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
                Product & AI studio for startups and growing teams
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md"
            >
              <SplitWords text="Launch your product faster," delay={0.15} />{" "}
              <motion.span
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: "0.3em", filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-gradient text-gradient-animated">
                  without the agency price tag.
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Ivula is a senior design and engineering team that turns ideas
              into revenue-ready SaaS products, AI automations, and internal
              tools. You get a clear plan and price up front, then working
              software to review every week.
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
                <Link href={cta.workHref}>
                  {cta.workLabel}
                  <ArrowRight className="size-4" />
                </Link>
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
              Rather email?{" "}
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

        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-soft lg:grid-cols-4"
        >
          {proof.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group/proof flex flex-col gap-1 bg-card p-6 transition-colors duration-300 hover:bg-secondary/60"
            >
              <dt className="order-2 text-sm text-muted-foreground">
                {item.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {item.count ? <AnimatedCounter value={item.count} /> : item.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        <div
          className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-label="What we build"
        >
          <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...stack, ...stack].map((label, i) => (
              <li
                key={`${label}-${i}`}
                aria-hidden={i >= stack.length}
                className="whitespace-nowrap rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
