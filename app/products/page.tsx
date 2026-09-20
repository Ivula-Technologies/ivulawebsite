import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ProductCard } from "@/components/product/product-card";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Ivula's product portfolio, starting with Ivula Canopy — organization-management software for nonprofits, churches, and community teams.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={
          <>
            A growing family of <span className="text-gradient">products</span>
          </>
        }
        description="We build software around real operational problems. Ivula Canopy is our flagship today — and the first of a growing family of focused products."
      >
        <Button asChild variant="gradient" size="xl">
          <a href={cta.trialHref}>
            {cta.trialLabel} <ArrowRight className="size-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="xl">
          <a href={cta.mailto}>
            <Mail className="size-4" /> Get product updates
          </a>
        </Button>
      </PageHero>

      <section className="pb-24 pt-8">
        <div className="container-wide">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <RevealItem key={product.slug} className="h-full">
                <ProductCard slug={product.slug} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal direction="up" className="mt-16">
            <div className="rounded-3xl border border-dashed border-border bg-secondary/30 p-10 text-center">
              <h2 className="font-display text-2xl font-bold">
                Building something for organizations?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We also build custom software for businesses worldwide. If you
                have an idea that needs the right team, let&apos;s talk.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild variant="default" size="lg">
                  <Link href="/services">
                    Explore services <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={cta.mailto}>Email us</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
