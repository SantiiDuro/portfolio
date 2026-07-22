import Link from "next/link";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/content/dictionaries/es";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MotionToggle } from "@/components/layout/motion-toggle";
import { LangToggle } from "@/components/layout/lang-toggle";

const NAV_ANCHORS = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#stack", key: "stack" },
  { href: "#contact", key: "contact" },
] as const;

export function Header({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href={`/${locale}`} className="font-serif text-lg font-medium text-foreground">
          SD
        </Link>

        {/* Nav de escritorio */}
        <nav aria-label="Principal" className="hidden gap-6 text-sm md:flex">
          {NAV_ANCHORS.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="text-foreground-muted transition-colors hover:text-foreground"
            >
              {dictionary.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle locale={locale} dictionary={dictionary} />
          <ThemeToggle dictionary={dictionary} />
          <MotionToggle dictionary={dictionary} />

          {/* Menú mobile — <details>/<summary> nativo: accesible y sin JS extra. */}
          <details className="relative md:hidden">
            <summary
              className="list-none rounded-full border border-border p-2 text-foreground [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menú"
            >
              <span aria-hidden="true">☰</span>
            </summary>
            <nav
              aria-label="Principal (mobile)"
              className="absolute right-0 top-full mt-2 flex w-48 flex-col gap-1 rounded-xl border border-border bg-background-elevated p-3 text-sm shadow-lg"
            >
              {NAV_ANCHORS.map(({ href, key }) => (
                <a key={key} href={href} className="rounded-md px-2 py-1.5 hover:bg-background">
                  {dictionary.nav[key]}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
