import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { articleSlugs } from "./[locale]/blog/[slug]/page";

const routes = ["", "/services", "/process", "/about", "/audit", "/blog", "/contact", "/terms", "/privacy"];
const baseUrl = "https://seonid.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    }))
  );

  const articleEntries = locales.flatMap((locale) =>
    articleSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...articleEntries];
}
