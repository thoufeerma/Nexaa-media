"use client";

import { useCartStore } from "@/store/cart-store";
import { useCartHydration } from "@/hooks/useStoreHydration";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { FadeUp } from "@/components/animations/FadeUp";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getCartTotal } = useCartStore();
  const hydrated = useCartHydration();

  if (!hydrated) return null;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeUp>
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-rich-charcoal)] mb-12">
            Shopping Cart
          </h1>
        </FadeUp>

        {items.length === 0 ? (
          <FadeUp delay={0.1} className="text-center py-20 bg-white rounded-2xl shadow-sm border border-[var(--color-soft-beige)]">
            <div className="w-24 h-24 mx-auto bg-[var(--color-ivory)] rounded-full flex items-center justify-center text-[var(--color-muted-olive)] mb-6">
              <ShoppingBag size={48} strokeWidth={1} />
            </div>
            <h2 className="text-2xl font-serif text-[var(--color-rich-charcoal)] mb-4">Your cart is empty</h2>
            <p className="text-[var(--color-muted-gray)] mb-8">Looks like you haven&apos;t added any luxury stationery yet.</p>
            <Link href="/products">
              <Button size="lg">Explore Collections</Button>
            </Link>
          </FadeUp>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-soft-beige)] overflow-hidden">
                <div className="hidden md:grid grid-cols-6 gap-4 p-6 border-b border-[var(--color-soft-beige)] bg-[var(--color-ivory)] text-sm font-medium uppercase tracking-wider text-[var(--color-muted-gray)]">
                  <div className="col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>

                <div className="divide-y divide-[var(--color-soft-beige)]">
                  {items.map((item, idx) => (
                    <FadeUp key={item.id} delay={idx * 0.1} className="grid grid-cols-1 md:grid-cols-6 gap-6 p-6 items-center">
                      <div className="col-span-1 md:col-span-3 flex gap-6 items-center">
                        <div className="relative w-24 h-24 bg-[var(--color-soft-beige)] rounded-lg overflow-hidden flex-shrink-0">
                          {item.images[0] && (
                            <Image
                              src={item.images[0].src}
                              alt={item.images[0].alt}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <Link href={`/products/${item.slug}`}>
                            <h3 className="font-serif text-[var(--color-rich-charcoal)] font-medium text-lg hover:text-[var(--color-soft-gold)] transition-colors mb-1">
                              {item.name}
                            </h3>
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-[var(--color-muted-gray)] hover:text-red-500 underline underline-offset-2 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="hidden md:block text-center font-medium text-[var(--color-rich-charcoal)]">
                        Rs. {parseFloat(item.price).toFixed(2)}
                      </div>

                      <div className="flex justify-between md:justify-center items-center">
                        <div className="md:hidden font-medium text-[var(--color-rich-charcoal)]">
                          Rs. {parseFloat(item.price).toFixed(2)}
                        </div>
                        <div className="flex items-center border border-[var(--color-soft-beige)] rounded-md overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-soft-beige)] transition-colors text-[var(--color-muted-gray)]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center font-medium text-[var(--color-rich-charcoal)] text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-soft-beige)] transition-colors text-[var(--color-muted-gray)]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="text-right font-serif text-lg font-medium text-[var(--color-rich-charcoal)]">
                        Rs. {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>

            <FadeUp delay={0.3} className="w-full lg:w-1/3">
              <div className="bg-[var(--color-ivory)] rounded-2xl p-8 border border-[var(--color-soft-beige)] sticky top-32">
                <h2 className="text-2xl font-serif text-[var(--color-rich-charcoal)] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-[var(--color-rich-charcoal)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted-gray)]">Subtotal</span>
                    <span className="font-medium">Rs. {getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted-gray)]">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-soft-beige)] flex justify-between items-center">
                    <span className="font-serif text-xl">Total</span>
                    <span className="font-serif text-2xl font-medium">Rs. {getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full flex items-center justify-between group">
                  Proceed to Checkout
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-6 text-center text-sm text-[var(--color-muted-gray)]">
                  <p>Secure checkout powered by WooCommerce.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        )}
      </div>
    </div>
  );
}
