import { HeroSection } from "@/components/features/hero-section";
import { FeaturedProducts } from "@/components/features/featured-products";
import { BenefitsSection } from "@/components/features/benefits-section";
import { GlitterOverlay } from "@/components/features/glitter-overlay";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <BenefitsSection />
      <GlitterOverlay />
    </>
  );
}
