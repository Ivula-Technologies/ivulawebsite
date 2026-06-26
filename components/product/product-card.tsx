"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { getAnyProduct } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Generic product card. Resolves the product from lib/products.ts by slug so
 * no function-valued props (Lucide icons) cross the server/client boundary.
 * "coming-soon" products render as a non-clickable teaser.
 */
export function ProductCard({ slug }: { slug: string }) {
  const product = getAnyProduct(slug);
  if (!product) return null;
  const Icon = product.icon;
  const isSoon = product.status === "coming-soon";

  const inner = (
    <motion.div
      whileHover={isSoon ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow",
        !isSoon && "hover:shadow-card-hover",
        isSoon && "border-dashed bg-secondary/30"
      )}
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`,
        }}
      />

      <div className="flex items-center justify-between">
        <span
          className="inline-flex size-12 items-center justify-center rounded-2xl text-white shadow-soft"
          style={{
            background: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`,
          }}
        >
          <Icon className="size-6" />
        </span>
        {product.status === "live" && <Badge variant="live">Live</Badge>}
        {product.status === "beta" && <Badge variant="accent">Beta</Badge>}
        {isSoon && (
          <Badge variant="soon">
            <Sparkles className="size-3" /> Coming soon
          </Badge>
        )}
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
        {isSoon ? product.fullName : product.fullName}
      </h3>
      <p className="mt-3 flex-1 text-pretty text-muted-foreground">
        {product.tagline}
      </p>

      {!isSoon ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
          Explore {product.name}
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      ) : (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
          On the roadmap
        </span>
      )}
    </motion.div>
  );

  if (isSoon) {
    return inner;
  }

  return (
    <Link href={`/products/${product.slug}`} className="block h-full">
      {inner}
    </Link>
  );
}
