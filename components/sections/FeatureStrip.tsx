import { ShieldCheck, Truck, Palette, Clock } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const features = [
  { icon: Palette, title: "Fully Customized", desc: "Tailored to your story" },
  { icon: ShieldCheck, title: "Premium Materials", desc: "Highest quality papers" },
  { icon: Clock, title: "Fast Support", desc: "Dedicated assistance" },
  { icon: Truck, title: "Nationwide Delivery", desc: "Secure PAN India shipping" },
];

export function FeatureStrip() {
  return (
    <section className="py-12 bg-[var(--color-ivory)] border-y border-[var(--color-soft-beige)]">
      <div className="container mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <StaggerItem key={idx} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-4 rounded-full bg-[var(--color-warm-white)] flex items-center justify-center text-[var(--color-soft-gold)] shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-[var(--color-rich-charcoal)] mb-1">{feature.title}</h3>
              <p className="text-sm text-[var(--color-muted-gray)]">{feature.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
