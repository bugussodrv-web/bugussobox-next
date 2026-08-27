import HeroSection from "@/components/home/HeroSection";
import ShapeGrid from "@/components/home/ShapeGrid";
import MaterialTabs from "@/components/home/MaterialTabs";
import CTABand from "@/components/home/CTABand";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShapeGrid />
      <MaterialTabs />
      <CTABand />
      <TrustSection />
    </>
  );
}