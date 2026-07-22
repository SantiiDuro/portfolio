import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries/es";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n-config";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";

export function ProjectCaseStudy({
  project,
  dictionary,
  locale,
}: {
  project: Project;
  dictionary: Dictionary;
  locale: Locale;
}) {
  const content = project.content[locale];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href={`/${locale}#projects`} className="text-sm text-accent hover:underline">
        ← {dictionary.projects.backLink}
      </Link>

      <p className="mt-6 text-xs text-foreground-muted">
        {project.org} · {project.year} · {project.team}
      </p>
      <h1 className="mt-1 font-serif text-3xl font-medium text-foreground sm:text-4xl">
        {project.name}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>

      {!project.hasLiveDemo && (
        <p className="mt-4 text-sm italic text-foreground-muted">
          {dictionary.projects.noDemoNote}
        </p>
      )}

      <Card className="mt-8">
        <h2 className="font-serif text-lg font-medium text-foreground">
          {dictionary.projects.problemLabel}
        </h2>
        <p className="mt-2 text-sm text-foreground-muted">{content.problem}</p>
      </Card>

      <Card className="mt-4">
        <h2 className="font-serif text-lg font-medium text-foreground">
          {dictionary.projects.decisionsLabel}
        </h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-foreground-muted">
          {content.decisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </Card>

      <Card className="mt-4">
        <h2 className="font-serif text-lg font-medium text-foreground">
          {dictionary.projects.learningLabel}
        </h2>
        {content.learning ? (
          <p className="mt-2 text-sm text-foreground-muted">{content.learning}</p>
        ) : (
          <p className="mt-2 text-sm italic text-foreground-muted">
            [COMPLETAR — pendiente en content-draft.md]
          </p>
        )}
      </Card>

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm text-accent hover:underline"
        >
          {dictionary.projects.repoLink} ↗
        </a>
      )}
    </article>
  );
}
