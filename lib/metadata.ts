import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

const BASE = "https://seonid.agency";

/**
 * Build the `alternates` block (canonical + per-locale hreflang) for a
 * static page. Pass the locale and the page's path relative to the locale
 * root, e.g. makeAlternates("en", "/services") for /en/services.
 *
 * This keeps pages statically prerendered (no headers()/dynamic), and fixes
 * the previous bug where the layout hardcoded every subpage's canonical to
 * the homepage.
 */
export function makeAlternates(locale: Locale, relPath = ""): NonNullable<Metadata["alternates"]> {
  return {
    canonical: `${BASE}/${locale}${relPath}`,
    languages: {
      en: `${BASE}/en${relPath}`,
      fr: `${BASE}/fr${relPath}`,
      ar: `${BASE}/ar${relPath}`,
      "x-default": `${BASE}/en${relPath}`, // EN is the default/fallback locale
    },
  };
}