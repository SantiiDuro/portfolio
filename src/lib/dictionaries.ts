import type { Locale } from "@/lib/i18n-config";
import { es, type Dictionary } from "@/content/dictionaries/es";
import { en } from "@/content/dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}

export type { Dictionary };
