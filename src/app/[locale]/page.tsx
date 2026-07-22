import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { projects } from "@/content/projects";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dictionary={dict} />
      <About dictionary={dict} />
      <Experience dictionary={dict} />
      <Projects dictionary={dict} projects={projects} locale={locale} />
      <Stack dictionary={dict} />
      <Education dictionary={dict} />
      <Contact dictionary={dict} />
    </>
  );
}
