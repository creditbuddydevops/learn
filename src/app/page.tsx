import { Hero } from "@/components/extrafazant/Hero";
import { IntroCollage } from "@/components/extrafazant/IntroCollage";
import { FeaturedStack } from "@/components/extrafazant/FeaturedStack";
import { ServicesCards } from "@/components/extrafazant/ServicesCards";
import { TeamParallax } from "@/components/extrafazant/TeamParallax";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroCollage />
      <FeaturedStack />
      <ServicesCards />
      <TeamParallax />
    </>
  );
}
