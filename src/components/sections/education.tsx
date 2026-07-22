import type { Dictionary } from "@/content/dictionaries/es";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading>{dictionary.education.heading}</SectionHeading>

      <dl className="mt-8 flex flex-col gap-4">
        {dictionary.education.entries.map((entry) => (
          <div key={entry.title} className="border-b border-border pb-4 last:border-b-0">
            <dt className="font-serif text-lg font-medium text-foreground">{entry.title}</dt>
            <dd className="mt-1 text-sm text-foreground-muted">{entry.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
