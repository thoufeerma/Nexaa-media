import { getProducts } from "@/services/woocommerce/client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Nexaa Media",
  description: "Explore our premium collections of luxury wedding invitations and elegant stationery.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-rich-charcoal)] mb-6">
              Our Collections
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--color-muted-gray)] text-lg">
              Explore our meticulously curated selection of premium wedding stationery, designed to set the perfect tone for your celebration.
            </p>
          </FadeUp>
        </div>

        {/* Filter Architecture - Simplified for demo */}
        <FadeUp delay={0.2} className="flex justify-center gap-4 mb-16 flex-wrap">
          <button className="px-6 py-2 rounded-full bg-[var(--color-rich-charcoal)] text-white text-sm font-medium transition-colors">
            All Collections
          </button>
          <button className="px-6 py-2 rounded-full border border-[var(--color-soft-beige)] text-[var(--color-muted-gray)] hover:bg-[var(--color-soft-beige)] text-sm font-medium transition-colors">
            Minimal Elegance
          </button>
          <button className="px-6 py-2 rounded-full border border-[var(--color-soft-beige)] text-[var(--color-muted-gray)] hover:bg-[var(--color-soft-beige)] text-sm font-medium transition-colors">
            Wax Seals
          </button>
          <button className="px-6 py-2 rounded-full border border-[var(--color-soft-beige)] text-[var(--color-muted-gray)] hover:bg-[var(--color-soft-beige)] text-sm font-medium transition-colors">
            Acrylic Luxury
          </button>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <StaggerItem key={product.id} className="group">
              <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] bg-[var(--color-soft-beige)] rounded-2xl overflow-hidden mb-6">
                {product.images[0] && (
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* We won't add directly from here to keep it simple, but we can if we want */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white text-[var(--color-rich-charcoal)] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-soft-gold)] hover:text-white shadow-lg z-10">
                  <ShoppingBag size={20} />
                </div>
              </Link>
              
              <Link href={`/products/${product.slug}`}>
                <h2 className="text-xl font-serif text-[var(--color-rich-charcoal)] mb-2 group-hover:text-[var(--color-soft-gold)] transition-colors">
                  {product.name}
                </h2>
              </Link>
              <div 
                className="text-sm text-[var(--color-muted-gray)] mb-3 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
              <p className="text-[var(--color-rich-charcoal)] font-medium">
                ₹{parseFloat(product.price).toFixed(0)}/card
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
