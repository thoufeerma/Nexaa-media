"use client";

import { useState, useMemo } from "react";
import { WooProduct } from "@/types/woocommerce";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/shared/Button";
import { ShoppingBag } from "lucide-react";
import { PricingTable } from "./PricingTable";
import { QuantitySelector } from "./QuantitySelector";
import { EstimatedTotal } from "./EstimatedTotal";

interface ProductActionsProps {
  product: WooProduct;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(100); // Default to a realistic invitation quantity
  const addItem = useCartStore((state) => state.addItem);

  // Calculate dynamic unit price based on volume pricing
  const unitPrice = useMemo(() => {
    if (!product.volume_pricing || product.volume_pricing.length === 0) {
      return parseFloat(product.price);
    }
    
    // Find the applicable tier
    const applicableTier = product.volume_pricing.find((tier) => {
      const withinMin = quantity >= tier.min_quantity;
      const withinMax = tier.max_quantity === null || quantity <= tier.max_quantity;
      return withinMin && withinMax;
    });

    return applicableTier ? parseFloat(applicableTier.price) : parseFloat(product.price);
  }, [quantity, product.volume_pricing, product.price]);

  const estimatedTotal = unitPrice * quantity;

  const handleAddToCart = () => {
    // We would ideally pass the calculated unit price to the cart, but for demo we just use the base price if we aren't modifying the store heavily.
    // However, to make it accurate:
    const productToAdd = { ...product, price: unitPrice.toString() };
    addItem(productToAdd, quantity);
  };

  return (
    <div className="space-y-8">
      {product.volume_pricing && product.volume_pricing.length > 0 && (
        <PricingTable tiers={product.volume_pricing} />
      )}

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} min={50} />

      <EstimatedTotal unitPrice={unitPrice} quantity={quantity} total={estimatedTotal} />

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleAddToCart} size="lg" variant="brand-accent" className="flex-1 gap-2 shadow-xl shadow-[#8b181b]/10">
          <ShoppingBag size={20} />
          Add to Cart
        </Button>
        <Button size="lg" variant="whatsapp" className="flex-1 font-medium">
          Order on WhatsApp
        </Button>
      </div>
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-[var(--color-matte-beige)] z-50 flex gap-3 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">
        <Button onClick={handleAddToCart} size="lg" variant="brand-accent" className="flex-1 shadow-xl shadow-[#8b181b]/10 text-sm px-0">
          Add to Cart
        </Button>
        <Button size="lg" variant="whatsapp" className="flex-1 font-medium text-sm px-0">
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
