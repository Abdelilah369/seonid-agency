export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const defaultLocale: Locale = "en";

export function isRtl(locale: string) {
  return locale === "ar";
}

export const siteConfig = {
  name: "SEONID AGENCY",
  tagline: "Websites and growth, built on evidence.",
  url: "https://seonid.agency",
};
