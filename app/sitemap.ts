import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { articleSlugs } from "./[locale]/blog/[slug]/page";

const routes = ["", "/services", "/process", "/about", "/audit", "/blog", "/contact", "/terms", "/privacy", "/geo", "/promo"];
const baseUrl = "https://seonid.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  // For each canonical (locale,route) pair we also declare the other locales'
  // equivalents via `alternates.languages` — Google's per-language sitemap hint
  // (the Prism model, done on a single sitemap rather than a locale index).
  const langAlt = (route: string) =>
    Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${route}`])) as Record<
      string,
      string
    >;

  const staticEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: { languages: langAlt(route) },
    }))
  );

  const articleEntries = locales.flatMap((locale) =>
    articleSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: langAlt(`/blog/${slug}`) },
    }))
  );

  return [...staticEntries, ...articleEntries];
}
