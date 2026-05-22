import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (q: number) => void;
  min?: number;
}

export function QuantitySelector({ quantity, setQuantity, min = 1 }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-6 mb-8">
      <span className="text-sm uppercase tracking-wider font-medium text-[var(--color-warm-gray)]">
        Quantity
      </span>
      <div className="flex items-center bg-[var(--color-soft-cream)] rounded-full p-1 border border-[var(--color-matte-beige)]">
        <button
          onClick={() => setQuantity(Math.max(min, quantity - 10))}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-[var(--color-rich-charcoal)]"
        >
          <Minus size={16} />
        </button>
        <span className="w-16 text-center font-serif text-lg text-[var(--color-rich-charcoal)] font-medium">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 10)}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-[var(--color-rich-charcoal)]"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
