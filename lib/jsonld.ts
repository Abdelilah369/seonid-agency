import type { Locale } from "@/lib/i18n";

const BASE = "https://seonid.agency";

/**
 * Builders for the SEONID JSON-LD entity graph (SEO agent spec, §9.3).
 * Uses linked @id references: ProfessionalService + Organization + WebSite
 * + (per-page) WebPage + BreadcrumbList. ProfessionalService is a
 * differentiator — none of the benchmarked agencies use it.
 */

interface PageRef {
  locale: Locale;
  relPath: string; // e.g. "/services" or "/blog/some-post" (no trailing concerns; builder adds)
  title: string;
  breadcrumb: { name: string; relPath?: string }[];
}

const url = (locale: Locale, relPath: string) =>
  `${BASE}/${locale}${relPath.replace(/\/+$/, "")}/`;

const orgName = "SEONID";

/** The shared Organization/ProfessionalService nodes (once per page). */
export function baseEntityGraph() {
  return [
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#professional-service`,
      name: orgName,
      description:
        "SEO, web development and AI automation studio in Casablanca, Morocco — trilingual (EN/FR/AR).",
      url: BASE + "/",
      logo: `${BASE}/logo.png`,
      image: `${BASE}/og-default.jpg`,
      telephone: "+212 6 00 00 00 00",
      email: "hello@seonid.agency",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.5731, longitude: -7.5898 },
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "Country", name: "Morocco" },
        { "@type": "Country", name: "France" },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO & Performance",
            url: `${BASE}/en/services/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design & Build",
            url: `${BASE}/en/services/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Automation",
            url: `${BASE}/en/services/`,
          },
        },
      ],
      sameAs: ["https://www.linkedin.com/in/abdelilah-karroumi-consultant"],
    },
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: orgName,
      url: BASE + "/",
      logo: `${BASE}/logo.png`,
      foundingDate: "2024",
      address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@seonid.agency",
        availableLanguage: ["en", "fr", "ar"],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE}/#founder`,
      name: "Abdelilah Karroumi",
      jobTitle: "Principal Solutions Architect",
      worksFor: { "@id": `${BASE}/#organization` },
      founderOf: { "@id": `${BASE}/#organization` },
      sameAs: ["https://www.linkedin.com/in/abdelilah-karroumi-consultant"],
      url: `${BASE}/about/`,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      name: orgName,
      url: BASE + "/",
      inLanguage: ["en", "fr", "ar"],
      publisher: { "@id": `${BASE}/#organization` },
    },
  ];
}

/** Per-page WebPage + BreadcrumbList, linked into the base graph. */
export function pageEntityGraph(p: PageRef, homeLabel = "Home") {
  const { locale, relPath, title, breadcrumb } = p;
  const pageUrl = url(locale, relPath);
  // Schema.org nodes; typed loosely because the graph mixes WebPage + BreadcrumbList shapes.
  const nodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      inLanguage: locale,
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#professional-service` },
      ...(breadcrumb.length
        ? { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } }
        : {}),
    },
  ];
  if (breadcrumb.length) {
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeLabel, item: url(locale, "") },
        ...breadcrumb.map((b, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: b.name,
          ...(b.relPath ? { item: url(locale, b.relPath) } : {}),
        })),
      ],
    });
  }
  return nodes;
}

/** Full graph for a page: base entities + page nodes. */
export function pageGraph(p: PageRef, homeLabel = "Home") {
  return [...baseEntityGraph(), ...pageEntityGraph(p, homeLabel)];
}

/** FAQPage schema — makes the homepage FAQ eligible for Google rich results. */
export function faqSchema(locale: Locale, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
    inLanguage: locale,
  };
}

/** Victorious-grade Article schema for blog posts (author/publisher = org). */
export function articleSchema({
  locale,
  slug,
  headline,
  description,
  datePublished,
  image,
}: {
  locale: Locale;
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
}) {
  const art = url(locale, `/blog/${slug}`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${art}#article`,
      headline,
      description,
      image: [image || `${BASE}/og-default.jpg`],
      author: { "@id": `${BASE}/#organization` },
      publisher: { "@id": `${BASE}/#organization` },
      datePublished,
      inLanguage: locale,
      mainEntityOfPage: { "@id": `${art}#webpage` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["#summary", "h1"] },
    },
  ];
}

/** Localize breadcrumb home label per language. */
export const homeLabels: Record<Locale, string> = {
  en: "Home",
  fr: "Accueil",
  ar: "الرئيسية",
};
