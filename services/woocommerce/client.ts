import { MOCK_PRODUCTS } from "./mock-data";

/**
 * WooCommerce Mock Client
 * This simulates the exact response shape of the WooCommerce REST API.
 */

export const getProducts = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS;
};

export const getProductBySlug = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return MOCK_PRODUCTS.find((p) => p.slug === slug) || null;
};
