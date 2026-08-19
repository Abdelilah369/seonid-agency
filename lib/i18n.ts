// Locales that are actually live (fully written, real content).
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

// Locales the architecture supports but that don't have real (non-machine)
// translations yet. Shown disabled in the language switcher rather than
// shipped as fake/placeholder translations — see build-brief.md section 8.
export const plannedLocales = [
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
] as const;

export const defaultLocale: Locale = "en";

export function isRtl(_locale: string) {
  // No RTL locale is live yet (Arabic is planned). Kept as a real function,
  // not a stub, so /ar can flip this to true the day its dictionary ships.
  return false;
}

export const siteConfig = {
  name: "SEONID AGENCY",
  tagline: "Websites and growth, built on evidence.",
  url: "https://seonid.agency",
};
