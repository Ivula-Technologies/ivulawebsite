import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { Vision } from "@/components/sections/vision";
import { Founder } from "@/components/sections/founder";
import { Faq } from "@/components/sections/faq";
import { Engagements } from "@/components/sections/engagements";
import { LeadCapture } from "@/components/sections/lead-capture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ServicesTeaser />
      <Engagements />
      <HowItWorks />
      <Vision />
      <Founder />
      <Faq />
      <LeadCapture />
    </>
  );
}
