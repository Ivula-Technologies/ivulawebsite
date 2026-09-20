import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

/**
 * "Our products" — renders entirely from lib/products.ts.
 * Add a product there and it appears here automatically, including the
 * "coming soon" roadmap teaser slot.
 */
export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="We build what we believe in"
          title="Products informed by real operations"
          description="Running our own software keeps us close to the realities of adoption, reliability, support, and continuous improvement. Ivula Canopy is our flagship product."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <RevealItem key={product.slug} className="h-full">
              <ProductCard slug={product.slug} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal direction="up" className="mt-12 flex justify-center">
          <Button asChild variant="ghost" size="lg">
            <Link href="/products">
              Explore our products <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
