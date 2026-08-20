import en from "./en";
import fr from "./fr";
import ar from "./ar";
import type { Dictionary } from "./en";
import type { Locale } from "../i18n";

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
