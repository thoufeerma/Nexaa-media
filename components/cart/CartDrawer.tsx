"use client";

import { useCartStore } from "@/store/cart-store";
import { useCartHydration } from "@/hooks/useStoreHydration";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const hydrated = useCartHydration();

  if (!hydrated) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--color-warm-white)] z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-soft-beige)]">
              <h2 className="text-2xl font-serif text-[var(--color-rich-charcoal)] flex items-center gap-2">
                <ShoppingBag size={24} /> Your Cart
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-muted-gray)] hover:text-[var(--color-rich-charcoal)] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-20 h-20 bg-[var(--color-soft-beige)] rounded-full flex items-center justify-center text-[var(--color-muted-gray)]">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="text-[var(--color-muted-gray)] text-lg">Your cart is beautifully empty.</p>
                  <Button onClick={() => setIsOpen(false)} variant="outline">
                    Explore Collections
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-[var(--color-soft-beige)] pb-6 last:border-0">
                    <div className="relative w-24 h-24 bg-[var(--color-soft-beige)] rounded-md overflow-hidden flex-shrink-0">
                      {item.images[0] && (
                        <Image
                          src={item.images[0].src}
                          alt={item.images[0].alt}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-[var(--color-rich-charcoal)] font-medium leading-tight mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[var(--color-soft-gold)] font-medium">
                          Rs. {parseFloat(item.price).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[var(--color-muted-gray)] rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 px-2 hover:bg-[var(--color-soft-beige)] transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm px-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-[var(--color-soft-beige)] transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-[var(--color-muted-gray)] hover:text-red-500 underline underline-offset-2 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-[var(--color-soft-beige)] bg-[var(--color-warm-white)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-[var(--color-rich-charcoal)]">Subtotal</span>
                  <span className="text-xl font-serif text-[var(--color-rich-charcoal)] font-medium">
                    Rs. {getCartTotal().toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-muted-gray)] mb-6">
                  Shipping & taxes calculated at checkout.
                </p>
                <Link href="/cart" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
