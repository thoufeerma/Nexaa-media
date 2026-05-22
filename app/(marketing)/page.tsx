import { Hero } from "@/components/sections/Hero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { TrendingCarousel } from "@/components/sections/TrendingCarousel";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { getProducts } from "@/services/woocommerce/client";

// This is a Server Component, meaning we can fetch data directly here
export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <FeatureStrip />
      <TrendingCarousel products={products} />
      <About />
      <CTA />
    </>
  );
}
