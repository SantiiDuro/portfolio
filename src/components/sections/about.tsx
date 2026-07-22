import type { Dictionary } from "@/content/dictionaries/es";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function About({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading>{dictionary.about.heading}</SectionHeading>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {dictionary.about.pillars.map((pillar, index) => (
          <Card key={pillar.title}>
            <p className="text-xs font-medium text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">{pillar.body}</p>
          </Card>
        ))}
      </div>

      {/* 3er "pilar" (Calidez) — se muestra, no se cuenta: franja del piano
          interactivo. Placeholder discreto hasta que exista el componente
          real (Fase 4). Ver plan Fase 1, sección "Sobre mí". */}
      <Card className="mt-4 border-dashed text-center text-sm text-foreground-muted">
        {dictionary.about.accent.title} — {dictionary.about.accent.caption}
      </Card>
    </section>
  );
}
