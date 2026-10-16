import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { RoadmapBoard } from "@/components/sections/roadmap-board";

export function RoadmapPreview() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Building in public"
          title="What we are building right now."
          description="We work on all of these at once, and we would rather show you the list than make you guess."
        />
        <RoadmapBoard stages={["building", "next"]} className="mx-auto mt-14 max-w-5xl" />
        <Reveal direction="up" className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/roadmap">
              See the full roadmap <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
