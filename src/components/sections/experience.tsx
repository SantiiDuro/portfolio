import type { Dictionary } from "@/content/dictionaries/es";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading>{dictionary.experience.heading}</SectionHeading>

      <ol className="mt-8 flex flex-col gap-6 border-l border-border pl-6">
        {dictionary.experience.entries.map((entry) => (
          <li key={entry.role + entry.period}>
            <Card>
              <p className="text-xs font-medium text-accent">{entry.period}</p>
              <h3 className="mt-1 font-serif text-xl font-medium text-foreground">
                {entry.role} · {entry.org}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
