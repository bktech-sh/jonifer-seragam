import type { MetadataRoute } from "next";
import { getProductCategories } from "@/data/catalog";
import { artikelData } from "@/data/artikel";

const baseUrl = "https://joniferseragam.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await getProductCategories();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/toko",
    "/profil",
    "/artikel",
    "/faq",
    "/cara-pemesanan",
    "/portofolio",
    "/katalog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const katalogRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/katalog/${category.id}`,
    lastModified: new Date(),
  }));

  const artikelRoutes: MetadataRoute.Sitemap = artikelData.map((item) => ({
    url: `${baseUrl}/artikel/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...katalogRoutes, ...artikelRoutes];
}
