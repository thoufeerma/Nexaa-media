"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart-store";
import { useCartHydration } from "@/hooks/useStoreHydration";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const getCartCount = useCartStore((state) => state.getCartCount);
  const hydrated = useCartHydration();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "bg-[var(--color-warm-white)]/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 z-50 relative h-10 w-40">
            {/* The Logo uploaded by user */}
            <Image
              src="/logo.jpeg"
              alt="Nexaa Media"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-[var(--color-rich-charcoal)] hover:text-[var(--color-soft-gold)] transition-colors text-sm uppercase tracking-widest">
              Home
            </Link>
            <Link href="/products" className="text-[var(--color-rich-charcoal)] hover:text-[var(--color-soft-gold)] transition-colors text-sm uppercase tracking-widest">
              Collections
            </Link>
            <Link href="/#about" className="text-[var(--color-rich-charcoal)] hover:text-[var(--color-soft-gold)] transition-colors text-sm uppercase tracking-widest">
              Our Story
            </Link>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <button
              onClick={toggleCart}
              className="relative p-2 text-[var(--color-rich-charcoal)] hover:text-[var(--color-soft-gold)] transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
              {hydrated && getCartCount() > 0 && (
                <span className="absolute top-1 right-1 bg-[var(--color-soft-gold)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-[var(--color-rich-charcoal)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[var(--color-warm-white)] shadow-md border-t border-[var(--color-soft-beige)] py-6 px-6 flex flex-col gap-6 md:hidden"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-rich-charcoal)] text-lg">Home</Link>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-rich-charcoal)] text-lg">Collections</Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-rich-charcoal)] text-lg">Our Story</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
