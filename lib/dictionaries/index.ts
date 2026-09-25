import en from "./en";
import fr from "./fr";
import ar from "./ar";
import type { Dictionary } from "./en";
import { defaultLocale, type Locale } from "../i18n";

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

// The `[locale]` route segment matches any single path component, including
// scanner/bot noise like /wp-login.php or /.env (these bypass the proxy's
// locale redirect because they contain a dot). `locale` isn't narrowed to a
// real Locale at the type level in that case, so fall back instead of
// crashing every caller on an undefined dictionary lookup.
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { Dictionary };
