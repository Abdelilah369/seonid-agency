import { pageGraph, homeLabels } from "@/lib/jsonld";
import type { Locale } from "@/lib/i18n";

/**
 * Renders the full SEONID entity graph (ProfessionalService + Organization +
 * WebSite + WebPage + BreadcrumbList) for a page, linked by @id.
 *
 * relPath: path relative to /<locale>, e.g. "/services"
 * breadcrumb: e.g. [{ name: "Services", relPath: "/services" }]
 * title: the page's human title (used for WebPage.name)
 */
export default function PageSchema({
  locale,
  relPath,
  title,
  breadcrumb = [],
}: {
  locale: Locale;
  relPath: string;
  title: string;
  breadcrumb?: { name: string; relPath?: string }[];
}) {
  // `pageGraph` prepends the localized Home crumb as position 1;
  // pass only the trailing trail here (e.g. Services › SEO).
  const graph = pageGraph(
    { locale, relPath, title, breadcrumb },
    homeLabels[locale]
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
