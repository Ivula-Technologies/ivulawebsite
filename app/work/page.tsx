import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { WorkGrid } from "@/components/sections/selected-work";
import { HomeCta } from "@/components/home/home";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Websites, apps and platforms Ivula has built for clients: Vemi Logistics, VLC Logistics, ACK Aqua Hub, Demosh Designs, Code Joy Academy and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        video="code"
        eyebrow="Our work"
        title="What we have built for clients."
        description="Websites, apps and platforms for businesses in Kenya and beyond. For each one: what they needed, what we built, and where it is today."
      >
        <Button asChild variant="gradient" size="xl">
          <Link href="/products">
            See our own apps <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>
      <WorkGrid />
      <HomeCta />
    </>
  );
}
