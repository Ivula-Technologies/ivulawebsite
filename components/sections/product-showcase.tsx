"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductMark } from "@/components/product/product-mark";
import { StatusBadge } from "@/components/product/status-badge";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

/**
 * Hero product switcher: a browser frame that cycles through every product's
 * screenshot, with a tab per product. Auto-advances until the visitor picks
 * a tab or hovers, and never moves for reduced-motion users.
 */
export function ProductShowcase() {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const product = products[index];

  React.useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % products.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  return (
    <div
      className="relative rounded-[2rem] border border-white/60 bg-white/65 p-3 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-4 flex items-center justify-between gap-3 px-1">
        <div className="flex min-w-0 items-center gap-3">
          <ProductMark slug={product.slug} size="sm" />
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-bold leading-tight">
              {product.fullName}
            </p>
            <p className="truncate text-xs text-muted-foreground">{product.category}</p>
          </div>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft-lg ring-1 ring-black/5 dark:ring-white/10">
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <div className="ml-3 hidden flex-1 sm:block">
            <div className="mx-auto w-fit rounded-md bg-background/70 px-3 py-1 text-xs text-muted-foreground">
              {product.domain}
            </div>
          </div>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-[16/10] w-full bg-white"
          aria-label={`Explore ${product.fullName}`}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={product.slug}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={product.screenshot}
                alt={`${product.fullName} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </Link>
      </div>

      <div
        className="mt-4 grid grid-cols-5 gap-2"
        role="tablist"
        aria-label="Ivula products"
      >
        {products.map((p, i) => {
          const active = i === index;
          return (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={p.fullName}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
              className={cn(
                "group relative flex flex-col items-center gap-2 overflow-hidden rounded-xl border px-1 py-2.5 text-[11px] font-semibold transition-colors sm:text-xs",
                active
                  ? "border-cyan-500/40 bg-card text-foreground shadow-soft"
                  : "border-transparent text-muted-foreground hover:bg-card/70 hover:text-foreground"
              )}
            >
              <ProductMark slug={p.slug} size="sm" className={cn(!active && "opacity-80")} />
              <span className="hidden truncate sm:block">{p.name}</span>
              {active && !reduce && !paused && (
                <motion.span
                  key={`bar-${index}`}
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-gradient"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex justify-end px-1">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          {product.priceFrom} · Learn more <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
