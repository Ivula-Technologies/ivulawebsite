import {
  HomeApps,
  HomeCta,
  HomeFounder,
  HomeHero,
  HomeServices,
  HomeWork,
} from "@/components/home/home";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeApps />
      <HomeWork />
      <HomeServices />
      <HomeFounder />
      <HomeCta />
    </>
  );
}
