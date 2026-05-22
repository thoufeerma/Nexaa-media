import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/shared/Button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 bg-[var(--color-ivory)] relative overflow-hidden border-t border-[var(--color-matte-beige)]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50 pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <FadeUp>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-rich-charcoal)] mb-8 leading-tight">
            Let’s Create Something <span className="italic text-gradient-brand pr-2">Beautiful</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-xl text-[var(--color-warm-gray)] mb-12 max-w-2xl mx-auto">
            Your love story deserves to be told with elegance. Begin your custom stationery journey with us today.
          </p>
        </FadeUp>
        <FadeUp delay={0.3} className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/products">
            <Button size="lg" variant="brand-accent">
              Start Your Order
            </Button>
          </Link>
          <Button size="lg" variant="whatsapp">
            Chat on WhatsApp
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
