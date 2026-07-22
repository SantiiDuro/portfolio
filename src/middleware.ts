import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale, type Locale } from "@/lib/i18n-config";

const LOCALE_COOKIE = "locale";

// Deriva un locale soportado a partir del header Accept-Language, sin sumar
// dependencias (negotiator / @formatjs/intl-localematcher son overkill para
// dos locales) — ver plan Fase 0, punto 3: "sin librería runtime pesada".
function localeFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const tag of preferred) {
    const short = tag.split("-")[0];
    if (isLocale(short)) return short;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : localeFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Excluye assets internos de Next, la carpeta public y archivos con extensión.
    "/((?!_next|favicon.ico|.*\\..*).*)",
  ],
};
