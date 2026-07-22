// Diccionario EN — arranca como copia estructural de es.ts con cada string
// marcado "[TRANSLATE]". Traducción real = trabajo de copy con revisión humana
// (Fase 3/5), nunca traducción automática publicada. Ver plan Fase 0, punto 3.
import type { Dictionary } from "./es";

const t = (value: string) => `[TRANSLATE] ${value}`;

export const en: Dictionary = {
  meta: {
    title: t("Santiago Duró Fornaro — Portfolio"),
    description: t(
      "Estudiante avanzado de Ingeniería en Sistemas (ORT Uruguay). Full-stack developer con base en .NET y Angular, construyendo con agentes de IA."
    ),
  },
  a11y: {
    skipToContent: t("Saltar al contenido"),
  },
  nav: {
    about: t("Sobre mí"),
    experience: t("Experiencia"),
    projects: t("Proyectos"),
    stack: t("Stack"),
    education: t("Educación"),
    contact: t("Contacto"),
  },
  themeToggle: {
    switchToLight: t("Cambiar a modo claro"),
    switchToDark: t("Cambiar a modo oscuro"),
  },
  motionToggle: {
    disable: t("Desactivar animaciones"),
    enable: t("Activar animaciones"),
  },
  langToggle: {
    label: t("Cambiar idioma"),
  },
  hero: {
    eyebrow: t("Santiago Duró Fornaro"),
    heading: t("Backend que se sostiene. Ahora también con agentes de IA."),
    subhead: t(
      "Estudiante avanzado de Ingeniería en Sistemas (ORT Uruguay). Full-stack developer con base en .NET y Angular, ahora también construyendo con agentes de IA."
    ),
    ctaPrimary: t("Ver proyectos"),
    ctaSecondary: t("Contacto"),
  },
  about: {
    heading: t("Cómo pienso"),
    pillars: [
      {
        title: t("Amplitud con propósito"),
        body: t(
          "Curiosidad ancha (matemática, cerebro, fotografía) → Ingeniería en Sistemas por ser la carrera lo bastante amplia como para no cerrar esa lista."
        ),
      },
      {
        title: t("Rigor silencioso"),
        body: t(
          "No me conformo con que algo funcione — necesito entender por qué. De ahí TDD, Clean Architecture y pedir explicaciones antes de aceptar una decisión."
        ),
      },
    ],
    accent: {
      title: t("Calidez en confianza"),
      caption: t("[placeholder — franja de piano interactivo, Fase 4]"),
    },
  },
  experience: {
    heading: t("Experiencia"),
    entries: [
      {
        role: t("Fullstack Developer"),
        org: t("Startup de IA en etapa temprana"),
        period: t("2026 – Presente"),
        stack: ["Next.js", "TypeScript", "Supabase", "Claude API"],
        bullets: [
          t(
            "Plataforma web con IA sobre el agent framework de Anthropic para automatizar flujos de trabajo."
          ),
          t("Features fullstack: autenticación, diseño de base de datos, integración de APIs."),
          t(
            "3 juniors decidiendo arquitectura, stack y agentes (SDK, skills, MCP, hooks) sin un senior que revise antes de que la decisión importe."
          ),
        ],
      },
    ],
  },
  projects: {
    heading: t("Proyectos"),
    viewCase: t("Ver caso"),
    repoLink: t("Repo"),
    noDemoNote: t("Demo en camino — hoy corre local"),
    problemLabel: t("Problema"),
    decisionsLabel: t("Decisiones clave"),
    learningLabel: t("Aprendizaje"),
    backLink: t("Volver a proyectos"),
  },
  stack: {
    heading: t("Stack"),
    groups: [
      { label: t("Backend"), items: [".NET Core 8", "C#", "Entity Framework", "SQL Server"] },
      { label: t("Frontend"), items: ["Angular", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: t("IA / Agentes"), items: ["Claude API", "Agent SDK", "MCP", "Skills", "Hooks"] },
      {
        label: t("Prácticas"),
        items: ["Clean Architecture", "TDD", "JWT", "Scrum / Azure DevOps", "Docker"],
      },
    ],
  },
  education: {
    heading: t("Educación"),
    entries: [
      { title: t("Ing. en Sistemas — ORT Uruguay"), body: t("Estudiante avanzado.") },
      { title: t("Intercambio en Sevilla"), body: t("El quiebre: independencia, gratitud.") },
      {
        title: t("Cursos de Anthropic"),
        body: t("Base para el rol actual trabajando con agentes."),
      },
    ],
  },
  contact: {
    heading: t("¿Charlamos?"),
    body: t("Buscando mi próximo rol backend/fullstack."),
    email: "santiagodurofornaro@gmail.com",
    emailLabel: t("Mail"),
    githubUrl: "https://github.com/SantiiDuro",
    githubLabel: "GitHub",
    linkedinUrl: "https://linkedin.com/in/santiago-duro-fornaro",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    madeWith: t("Hecho con Next.js"),
    easterEggHint: t("psst — probá escribir `help`"),
  },
};

export default en;
