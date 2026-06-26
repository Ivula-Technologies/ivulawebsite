import { Hero } from "@/components/sections/hero";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { ProductsSection } from "@/components/sections/products-section";
import { FoundingMember } from "@/components/sections/founding-member";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { Vision } from "@/components/sections/vision";
import { Faq } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <HowItWorks />
      <Features />
      <ProductsSection />
      <FoundingMember />
      <ServicesTeaser />
      <Vision />
      <Faq />
    </>
  );
}
