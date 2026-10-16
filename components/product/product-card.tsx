"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getProduct } from "@/lib/products";
import { ProductMark } from "@/components/product/product-mark";
import { StatusBadge } from "@/components/product/status-badge";
import { cn } from "@/lib/utils";

/**
 * Product card with a screenshot, logo, status and starting price. Resolves
 * the product from lib/products.ts by slug so no function-valued props
 * (Lucide icons) cross the server/client boundary.
 */
export function ProductCard({
  slug,
  featured = false,
  className,
}: {
  slug: string;
  featured?: boolean;
  className?: string;
}) {
  const product = getProduct(slug);
  if (!product) return null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group block h-full rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-shadow hover:shadow-card-hover"
      >
        <div
          className={cn(
            "relative overflow-hidden border-b border-border px-5 pt-5 sm:px-7 sm:pt-7",
            featured ? "aspect-[16/9]" : "aspect-[16/10]"
          )}
          style={{
            background: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`,
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-20" />
          <div className="relative h-full overflow-hidden rounded-t-xl border border-white/20 border-b-0 bg-white shadow-2xl">
            <Image
              src={product.screenshot}
              alt={`${product.fullName} preview`}
              fill
              sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <StatusBadge
            status={product.status}
            className="absolute right-3 top-3 bg-background/95 shadow-soft backdrop-blur"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <ProductMark slug={product.slug} size="sm" />
            <div className="min-w-0">
              <h3 className="truncate font-display text-xl font-bold tracking-tight">
                {product.fullName}
              </h3>
              <p className="truncate text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {product.category}
              </p>
            </div>
          </div>
          <p className={cn("mt-4 flex-1 text-pretty text-muted-foreground", featured ? "text-base sm:text-lg" : "text-sm")}>
            {product.tagline}
          </p>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
            <span className="text-sm font-semibold">{product.priceFrom}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
              {product.status === "coming-soon" ? "Join the waitlist" : `Explore ${product.name}`}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
