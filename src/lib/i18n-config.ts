// Configuración central de locales soportados. Único punto de verdad para
// middleware.ts, layouts, dictionaries y cualquier componente que necesite
// tipar o validar un locale.
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
