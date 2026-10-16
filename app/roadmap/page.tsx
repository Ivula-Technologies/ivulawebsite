import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { RoadmapBoard } from "@/components/sections/roadmap-board";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What Ivula Technologies has shipped across Canopy, LeadFast AI, ShelfKeeper, ProposalKit, WakiliNivo and Ivula Hosting, and what we are building next.",
  alternates: { canonical: "/roadmap" },
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title={
          <>
            Shipped, building, <span className="text-gradient">and up next.</span>
          </>
        }
        description="Every product and service we are working on, in one place. We update this page as work ships."
      >
        <Button asChild variant="gradient" size="xl">
          <Link href="/products">
            Explore the products <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="xl">
          <a href={`${cta.mailto}?subject=${encodeURIComponent("Product updates")}`}>
            <Mail className="size-4" /> Get product updates
          </a>
        </Button>
      </PageHero>
      <section className="pb-24 pt-8">
        <div className="container-wide">
          <RoadmapBoard />
        </div>
      </section>
    </>
  );
}
