import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-soft-cream)] text-[var(--color-rich-charcoal)] py-20 px-6 border-t border-[var(--color-matte-beige)]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[var(--color-matte-beige)] pb-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif mb-6 tracking-wide text-gradient-brand">
            Nexaa Media
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-sm mb-8 leading-relaxed">
            Crafting luxury wedding invitations and premium stationery with timeless elegance for modern celebrations. An Inspiring Mind.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-deep-red)] transition-colors text-sm uppercase tracking-wider font-medium">
              Instagram
            </a>
            <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-deep-red)] transition-colors text-sm uppercase tracking-wider font-medium">
              Facebook
            </a>
            <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-deep-red)] transition-colors text-sm uppercase tracking-wider font-medium">
              Pinterest
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-6 text-[var(--color-rich-charcoal)]">Collections</h3>
          <ul className="space-y-4 text-[var(--color-warm-gray)]">
            <li><Link href="/products?category=minimal" className="hover:text-[var(--color-deep-red)] transition-colors">Minimal Elegance</Link></li>
            <li><Link href="/products?category=wax-seal" className="hover:text-[var(--color-deep-red)] transition-colors">Wax Seal Collection</Link></li>
            <li><Link href="/products?category=acrylic" className="hover:text-[var(--color-deep-red)] transition-colors">Acrylic Luxury</Link></li>
            <li><Link href="/products?category=floral" className="hover:text-[var(--color-deep-red)] transition-colors">Floral Collection</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-6 text-[var(--color-rich-charcoal)]">Quick Links</h3>
          <ul className="space-y-4 text-[var(--color-warm-gray)]">
            <li><Link href="/#about" className="hover:text-[var(--color-deep-red)] transition-colors">Our Story</Link></li>
            <li><Link href="/#process" className="hover:text-[var(--color-deep-red)] transition-colors">The Process</Link></li>
            <li><Link href="/#faq" className="hover:text-[var(--color-deep-red)] transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-deep-red)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-warm-gray)]">
        <p>© {new Date().getFullYear()} Nexaa Media. Premium Invitations Crafted with Elegance.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-[var(--color-rich-charcoal)] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--color-rich-charcoal)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
