import type { Dictionary } from "@/content/dictionaries/es";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";

// Agrupado por dominio, no un grid de logos — señal > volumen (CLAUDE.md).
export function Stack({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading>{dictionary.stack.heading}</SectionHeading>

      <div className="mt-8 flex flex-col gap-5">
        {dictionary.stack.groups.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:items-baseline">
            <p className="text-sm font-medium text-foreground-muted">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
