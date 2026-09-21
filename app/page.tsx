import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { Vision } from "@/components/sections/vision";
import { Faq } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <SelectedWork />
      <HowItWorks />
      <Vision />
      <Faq />
    </>
  );
}
