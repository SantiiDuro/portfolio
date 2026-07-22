import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { locales, isLocale, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata, buildPersonJsonLd } from "@/lib/seo";
import { ThemeProvider, themeNoFlashScript } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SkipLink } from "@/components/layout/skip-link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Fraunces (serif expresiva, títulos) + Hanken Grotesk (grotesca humanista
// cálida, cuerpo) — deliberadamente NO Inter/Geist (CLAUDE.md). Candidatas a
// confirmar en Fase 2; funcionales desde ya para no bloquear el layout.
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dict = getDictionary(locale);
  return buildMetadata(locale, dict);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);
  const personJsonLd = buildPersonJsonLd(dict);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${hankenGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Evita flash de tema incorrecto antes de hidratar (theme-provider.tsx). */}
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider>
          <MotionProvider>
            <SkipLink label={dict.a11y.skipToContent} />
            <Header dictionary={dict} locale={locale} />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer dictionary={dict} />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
