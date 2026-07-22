import type { Dictionary } from "@/content/dictionaries/es";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n-config";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export function Projects({
  dictionary,
  projects,
  locale,
}: {
  dictionary: Dictionary;
  projects: Project[];
  locale: Locale;
}) {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading>{dictionary.projects.heading}</SectionHeading>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const content = project.content[locale];
          return (
            <Card key={project.slug} className="flex flex-col">
              <p className="text-xs text-foreground-muted">
                {project.org} · {project.year} · {project.team}
              </p>
              <h3 className="mt-1 font-serif text-xl font-medium text-foreground">
                {project.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground-muted">{content.problem}</p>

              {!project.hasLiveDemo && (
                <p className="mt-3 text-xs italic text-foreground-muted">
                  {dictionary.projects.noDemoNote}
                </p>
              )}

              <div className="mt-auto pt-4">
                <ButtonLink href={`/${locale}/proyectos/${project.slug}`} variant="secondary">
                  {dictionary.projects.viewCase}
                </ButtonLink>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
