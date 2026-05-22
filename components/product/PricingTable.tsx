import { VolumePricingTier } from "@/types/woocommerce";

export function PricingTable({ tiers }: { tiers: VolumePricingTier[] }) {
  if (!tiers || tiers.length === 0) return null;

  return (
    <div className="mb-8 p-6 bg-[var(--color-matte-beige)] rounded-2xl border border-[var(--color-soft-cream)]">
      <h3 className="text-sm font-serif text-[var(--color-rich-charcoal)] mb-4 uppercase tracking-widest font-medium">
        Volume Pricing
      </h3>
      <div className="space-y-3">
        <div className="grid grid-cols-2 text-xs uppercase tracking-wider text-[var(--color-warm-gray)] border-b border-black/5 pb-2">
          <span>Quantity</span>
          <span className="text-right">Price / Card</span>
        </div>
        {tiers.map((tier, idx) => (
          <div key={idx} className="grid grid-cols-2 text-sm text-[var(--color-rich-charcoal)] items-center">
            <span className="font-medium">
              {tier.max_quantity ? `${tier.min_quantity} – ${tier.max_quantity} Cards` : `${tier.min_quantity}+ Cards`}
            </span>
            <span className="text-right text-[var(--color-deep-red)] font-serif text-lg">
              ₹{parseFloat(tier.price).toFixed(0)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
