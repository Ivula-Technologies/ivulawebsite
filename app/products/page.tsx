import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ProductsSection } from "@/components/sections/products-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Ivula product family: Canopy for churches and nonprofits, LeadFast AI for contractors, ShelfKeeper for homeschooling families, ProposalKit for freelancers and WakiliNivo for law firms.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={
          <>
            A growing family of <span className="text-gradient">focused products</span>
          </>
        }
        description="Each product solves one real problem for one kind of team. Some are live, some are opening to early customers, and one is on its way."
      >
        <Button asChild variant="gradient" size="xl">
          <Link href="/roadmap">
            See the roadmap <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="xl">
          <Link href="/pricing">Compare all prices</Link>
        </Button>
      </PageHero>
      <ProductsSection showHeading={false} className="pt-8 md:pt-8" />
    </>
  );
}
