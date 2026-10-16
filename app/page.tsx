import { Hero } from "@/components/sections/hero";
import { ProductsSection } from "@/components/sections/products-section";
import { Offers } from "@/components/sections/offers";
import { SelectedWork } from "@/components/sections/selected-work";
import { Engagements } from "@/components/sections/engagements";
import { HowItWorks } from "@/components/sections/how-it-works";
import { RoadmapPreview } from "@/components/sections/roadmap-preview";
import { Founder } from "@/components/sections/founder";
import { Faq } from "@/components/sections/faq";
import { LeadCapture } from "@/components/sections/lead-capture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <Offers />
      <SelectedWork />
      <Engagements />
      <HowItWorks />
      <RoadmapPreview />
      <Founder />
      <Faq />
      <LeadCapture />
    </>
  );
}
