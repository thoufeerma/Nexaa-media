import { getProductBySlug } from "@/services/woocommerce/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ProductActions } from "@/components/product/ProductActions";
import { ShareButton } from "@/components/product/ShareButton";
import { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    return { title: "Product Not Found | Nexaa Media" };
  }

  return {
    title: `${product.name} | Nexaa Media`,
    description: product.short_description.replace(/<[^>]+>/g, ""),
  };
}

export default async function SingleProductPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-[var(--color-warm-white)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT SIDE: Premium Product Gallery */}
          <div className="w-full lg:w-3/5">
            <div className="sticky top-32 space-y-6">
              {product.images.map((img, idx) => (
                <div 
                  key={img.id} 
                  className={`relative bg-[var(--color-matte-beige)] rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group ${idx === 0 ? "aspect-[4/5] md:aspect-auto md:h-[80vh]" : "aspect-square w-full md:w-1/2 inline-block mr-6 align-top"}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  {/* Subtle lighting overlay for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Product Details */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-32">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  {product.categories.map((c) => (
                    <span key={c.id} className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-red)] font-medium bg-[var(--color-light-champagne)] px-3 py-1 rounded-full">
                      {c.name}
                    </span>
                  ))}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-warm-gray)] border border-[var(--color-matte-beige)] px-3 py-1 rounded-full">
                    SKU: {product.sku || "NEX-" + product.id}
                  </span>
                </div>
                
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-rich-charcoal)] leading-[1.1] tracking-tight">
                    {product.name}
                  </h1>
                  <ShareButton title={product.name} />
                </div>
                
                <p className="text-xl font-serif text-[var(--color-warm-gray)]">
                  Starting at <span className="text-[var(--color-rich-charcoal)]">₹{parseFloat(product.price).toFixed(0)}/card</span>
                </p>
              </div>

              <div className="prose prose-stone mb-10 max-w-none text-[var(--color-warm-gray)] leading-relaxed text-lg font-light">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>

              <div className="mb-12">
                <ProductActions product={product} />
              </div>

              {product.attributes.length > 0 && (
                <div className="border-t border-[var(--color-matte-beige)] pt-8 mt-12">
                  <h3 className="font-serif text-xl text-[var(--color-rich-charcoal)] mb-6">Product Specifications</h3>
                  <dl className="space-y-4">
                    {product.attributes.map((attr) => (
                      <div key={attr.id} className="grid grid-cols-3 py-3 border-b border-[var(--color-soft-cream)] last:border-0">
                        <dt className="text-[var(--color-rich-charcoal)] text-sm font-medium uppercase tracking-wider">{attr.name}</dt>
                        <dd className="col-span-2 text-[var(--color-warm-gray)] font-light">{attr.options.join(", ")}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
