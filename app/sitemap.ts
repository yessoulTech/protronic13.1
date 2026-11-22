import type { MetadataRoute } from "next"; import { SITE } from "@/lib/config"; import { PRODUCTS } from "@/lib/products";
export default function sitemap(): MetadataRoute.Sitemap {
  return [...["", "/store", "/services", "/about", "/devis", "/contact"], ...PRODUCTS.map(p => `/store/${p.slug}`)].map(r => ({ url: SITE.url + r }));
}
