interface EstimatedTotalProps {
  unitPrice: number;
  quantity: number;
  total: number;
}

export function EstimatedTotal({ unitPrice, quantity, total }: EstimatedTotalProps) {
  return (
    <div className="bg-[var(--color-ivory)] rounded-2xl p-6 border border-[var(--color-matte-beige)] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] mb-8">
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-[var(--color-matte-beige)]">
        <span className="text-[var(--color-warm-gray)]">Unit Price</span>
        <span className="font-serif text-[var(--color-rich-charcoal)]">₹{unitPrice.toFixed(0)}/card</span>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <span className="block text-sm text-[var(--color-warm-gray)] mb-1">Estimated Total</span>
          <span className="block text-xs text-[var(--color-warm-gray)]">({quantity} cards)</span>
        </div>
        <span className="font-serif text-3xl text-[var(--color-rich-charcoal)] font-medium">
          ₹{total.toFixed(0)}
        </span>
      </div>
      
      <p className="text-xs text-[var(--color-warm-gray)] mt-4 text-center">
        Shipping calculated at checkout.
      </p>
    </div>
  );
}
