"use client";

import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <FadeUp delay={0.2}>
            <span className="text-[var(--color-muted-olive)] font-medium tracking-widest uppercase text-sm mb-4 block">
              An Inspiring Mind
            </span>
          </FadeUp>
          <FadeUp delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-rich-charcoal)] leading-tight mb-6">
              Crafting Invitations That Feel <span className="italic text-[var(--color-soft-gold)]">Personal</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="text-lg text-[var(--color-muted-gray)] mb-10 max-w-lg leading-relaxed">
              Luxury wedding invitations and premium stationery crafted with timeless elegance for modern celebrations.
            </p>
          </FadeUp>
          <FadeUp delay={0.5} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
            <Link href="/products">
              <Button size="lg">Explore Collection</Button>
            </Link>
            <Button size="lg" variant="outline">Chat on WhatsApp</Button>
          </FadeUp>
          <FadeUp delay={0.6}>
            <p className="text-sm font-medium tracking-wide text-[var(--color-rich-charcoal)] uppercase">
              500+ Happy Clients • Fully Customized • PAN India Delivery
            </p>
          </FadeUp>
        </div>

        <motion.div 
          style={{ y, opacity }} 
          className="relative h-[600px] w-full hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-soft-beige)] to-transparent rounded-full blur-3xl opacity-50" />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute right-0 top-10 w-[450px] h-[550px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero_mockup.png"
              alt="Luxury Wedding Invitation Mockup"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
