"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/content/dictionaries/es";

function swapLocaleInPath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/");
  segments[1] = nextLocale; // segments[0] === "" por el leading slash
  return segments.join("/") || "/";
}

export function LangToggle({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={dictionary.langToggle.label} className="flex items-center gap-1 text-sm">
      {locales.map((candidate) => {
        const isActive = candidate === locale;
        return (
          <Link
            key={candidate}
            href={swapLocaleInPath(pathname, candidate)}
            onClick={() => {
              document.cookie = `locale=${candidate}; path=/; max-age=31536000`;
            }}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-2 py-1 uppercase transition-colors ${
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            {candidate}
          </Link>
        );
      })}
    </div>
  );
}
