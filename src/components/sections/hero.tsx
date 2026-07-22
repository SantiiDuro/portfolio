import type { Dictionary } from "@/content/dictionaries/es";
import { ButtonLink } from "@/components/ui/button";

// Hero tipográfico (sin foto) — decisión del wireframe Fase 1: slot para sumar
// una foto tratada queda reservado para más adelante, no bloquea el MVP.
export function Hero({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        {dictionary.hero.eyebrow}
      </p>

      <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
        {dictionary.hero.heading}
      </h1>

      <p className="max-w-2xl text-lg text-foreground-muted">{dictionary.hero.subhead}</p>

      <div className="mt-2 flex flex-wrap gap-3">
        <ButtonLink href="#projects">{dictionary.hero.ctaPrimary}</ButtonLink>
        <ButtonLink href="#contact" variant="secondary">
          {dictionary.hero.ctaSecondary}
        </ButtonLink>
      </div>
    </section>
  );
}
