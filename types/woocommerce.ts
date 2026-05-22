export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_modified: string;
  type: "simple" | "variable";
  status: "publish" | "draft";
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  manage_stock: boolean;
  stock_quantity: number | null;
  stock_status: "instock" | "outofstock" | "onbackorder";
  categories: WooCategory[];
  tags: WooTag[];
  images: WooImage[];
  attributes: WooAttribute[];
  volume_pricing?: VolumePricingTier[];
}

export interface VolumePricingTier {
  min_quantity: number;
  max_quantity: number | null; // null means infinite
  price: string;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WooTag {
  id: number;
  name: string;
  slug: string;
}

export interface WooImage {
  id: number;
  date_created: string;
  date_modified: string;
  src: string;
  name: string;
  alt: string;
}

export interface WooAttribute {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}
