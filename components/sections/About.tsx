import Image from "next/image";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/shared/Button";

export function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <FadeUp className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl" yOffset={50}>
          <Image
            src="/about_image.png"
            alt="Designed Around Your Story"
            fill
            className="object-cover"
          />
        </FadeUp>
        
        <div className="max-w-xl">
          <FadeUp delay={0.2}>
            <span className="text-[var(--color-muted-olive)] font-medium tracking-widest uppercase text-sm mb-6 block">
              Our Philosophy
            </span>
          </FadeUp>
          <FadeUp delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-rich-charcoal)] leading-tight mb-8">
              Designed Around <br /> <span className="italic text-[var(--color-soft-gold)]">Your Story</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="space-y-6 text-lg text-[var(--color-muted-gray)] leading-relaxed mb-10">
              <p>
                At Nexaa Media, we believe that an invitation is more than just paper—it is the prelude to your most cherished memories. It sets the tone, tells your story, and creates anticipation.
              </p>
              <p>
                Our premium stationery is meticulously crafted with the finest materials, elegant typography, and a touch of modern luxury. From minimal ivory suites to rich floral collections, every piece is designed to reflect your unique vision.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.5}>
            <Button variant="outline" size="lg">Discover Our Process</Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
