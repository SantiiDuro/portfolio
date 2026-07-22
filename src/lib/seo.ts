import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/content/dictionaries/es";

// TODO Fase 6: confirmar dominio final antes de deploy (afecta metadataBase,
// hreflang absolutos y JSON-LD `url`).
const SITE_URL = "https://example.com";

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale,
      type: "website",
    },
  };
}

// JSON-LD Person — se inyecta en el layout vía <script type="application/ld+json">.
// TODO Fase 6: revisar/ampliar antes de publicar (sameAs, jobTitle final, etc.).
export function buildPersonJsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Santiago Duró Fornaro",
    description: dict.meta.description,
    url: SITE_URL,
    sameAs: [dict.contact.githubUrl, dict.contact.linkedinUrl],
  };
}
