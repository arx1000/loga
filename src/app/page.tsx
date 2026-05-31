import { HeroSection } from "@/components/features/hero-section";
import { FeaturedProducts } from "@/components/features/featured-products";
import { BenefitsSection } from "@/components/features/benefits-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <BenefitsSection />
    </>
  );
}
