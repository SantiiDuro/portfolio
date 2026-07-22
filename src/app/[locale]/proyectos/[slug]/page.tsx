import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { projects, getProjectBySlug } from "@/content/projects";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dict = getDictionary(locale);

  return <ProjectCaseStudy project={project} dictionary={dict} locale={locale} />;
}
