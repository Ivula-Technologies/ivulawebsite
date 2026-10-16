import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

/**
 * The Ivula product family. Renders entirely from lib/products.ts; the first
 * product is shown large, and the last slot invites a custom build.
 */
export function ProductsSection({
  showHeading = true,
  className,
}: {
  showHeading?: boolean;
  className?: string;
}) {
  return (
    <section id="products" className={cn("scroll-mt-20 py-20 md:py-28", className)}>
      <div className="container-wide">
        {showHeading && (
          <SectionHeading
            eyebrow="Our products"
            title={
              <>
                Five products, <span className="text-gradient">built and run by us.</span>
              </>
            }
            description="Each one solves a real problem for a specific kind of team. Running them ourselves keeps us honest about reliability, support and what customers will actually pay for."
          />
        )}

        <RevealGroup className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", showHeading && "mt-14")}>
          {products.map((product, i) => (
            <RevealItem
              key={product.slug}
              className={cn("h-full", i === 0 && "md:col-span-2")}
            >
              <ProductCard slug={product.slug} featured={i === 0} />
            </RevealItem>
          ))}
          <RevealItem className="h-full md:col-span-2 lg:col-span-3">
            <Link
              href="/contact#brief"
              className="group flex h-full flex-col gap-6 rounded-[2rem] border border-dashed border-border bg-secondary/30 p-7 transition-colors hover:border-cyan-500/40 hover:bg-secondary/60 sm:flex-row sm:items-center sm:p-9"
            >
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                <Rocket className="size-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  Your product could be next.
                </h3>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  The same team builds custom SaaS, AI automations and internal
                  tools for founders and growing businesses.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                Get a free estimate
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
