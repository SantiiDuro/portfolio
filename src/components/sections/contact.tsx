import type { Dictionary } from "@/content/dictionaries/es";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading>{dictionary.contact.heading}</SectionHeading>
      <p className="mt-3 max-w-xl text-foreground-muted">{dictionary.contact.body}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${dictionary.contact.email}`}>
          {dictionary.contact.emailLabel}
        </ButtonLink>
        <ButtonLink href={dictionary.contact.githubUrl} variant="secondary">
          {dictionary.contact.githubLabel} ↗
        </ButtonLink>
        <ButtonLink href={dictionary.contact.linkedinUrl} variant="secondary">
          {dictionary.contact.linkedinLabel} ↗
        </ButtonLink>
      </div>
    </section>
  );
}
