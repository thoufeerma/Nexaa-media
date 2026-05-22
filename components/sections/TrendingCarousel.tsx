"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";
import { WooProduct } from "@/types/woocommerce";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

interface TrendingCarouselProps {
  products: WooProduct[];
}

export function TrendingCarousel({ products }: TrendingCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="py-24 bg-[var(--color-ivory)] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-rich-charcoal)] mb-4">
              Trending Collections
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--color-muted-gray)] max-w-md">
              Discover our most sought-after luxury wedding stationery, crafted to perfection.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2} className="hidden md:block">
          <Link href="/products" className="text-[var(--color-soft-gold)] uppercase tracking-widest text-sm font-medium hover:text-[var(--color-rich-charcoal)] transition-colors">
            View All
          </Link>
        </FadeUp>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[280px] md:min-w-[400px] snap-center group"
            >
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
                
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-white text-[var(--color-rich-charcoal)] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-soft-gold)] hover:text-white shadow-lg z-10"
                >
                  <ShoppingBag size={20} />
                </button>
              </Link>
              
              <Link href={`/products/${product.slug}`}>
                <h3 className="text-xl font-serif text-[var(--color-rich-charcoal)] mb-2 group-hover:text-[var(--color-soft-gold)] transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div 
                className="text-sm text-[var(--color-muted-gray)] mb-3 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
              <p className="text-[var(--color-rich-charcoal)] font-medium">
                ₹{parseFloat(product.price).toFixed(0)}/card
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
