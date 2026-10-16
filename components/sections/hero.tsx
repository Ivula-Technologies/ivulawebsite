"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { Magnetic } from "@/components/motion/magnetic";
import { SplitWords } from "@/components/motion/split-words";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";
import { cta, site } from "@/lib/site";

const trustPills = [
  "Fixed-price estimates",
  "You own 100% of the code",
  "Live overlap with US mornings",
];

/** Verifiable proof points; keep these factual. */
const proof: { value: string; count?: number; label: string }[] = [
  { value: "5", count: 5, label: "products we build and run" },
  { value: "US + Kenya", label: "card, PayPal and M-Pesa billing" },
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
  "Stripe, PayPal & M-Pesa billing",
  "Dashboards & reporting",
  "Managed hosting",
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
                Ivula Technologies · Product studio
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md"
            >
              <SplitWords text="We build software products," delay={0.15} />{" "}
              <motion.span
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: "0.3em", filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-gradient text-gradient-animated">
                  and the team to build yours.
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Ivula makes and runs five products for churches, contractors,
              homeschooling families, freelancers and law firms. The same senior team
              designs, builds and hosts custom SaaS, AI automations and
              internal tools for founders and growing businesses.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Button asChild variant="gradient" size="xl">
                  <Link href="/#products">
                    Explore our products
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Button asChild variant="outline" size="xl">
                <Link href={cta.projectHref}>
                  {cta.projectLabel}
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
            <ProductShowcase />
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
