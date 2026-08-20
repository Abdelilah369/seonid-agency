import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const routes = ["", "/services", "/process", "/about", "/audit", "/blog", "/contact"];
const baseUrl = "https://seonid.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    }))
  );
}
