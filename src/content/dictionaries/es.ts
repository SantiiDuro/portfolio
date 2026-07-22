// Diccionario ES — locale por defecto. Texto MÍNIMO para poder revisar el layout
// (Fase 0/1). El copy final y su pulido de tono salen de content-draft.md en
// Fase 3, con revisión humana obligatoria en Fase 5. No inventar datos nuevos acá.

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  a11y: {
    skipToContent: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    stack: string;
    education: string;
    contact: string;
  };
  themeToggle: {
    switchToLight: string;
    switchToDark: string;
  };
  motionToggle: {
    disable: string;
    enable: string;
  };
  langToggle: {
    label: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    pillars: Array<{ title: string; body: string }>;
    accent: { title: string; caption: string };
  };
  experience: {
    heading: string;
    entries: Array<{
      role: string;
      org: string;
      period: string;
      stack: string[];
      bullets: string[];
    }>;
  };
  projects: {
    heading: string;
    viewCase: string;
    repoLink: string;
    noDemoNote: string;
    problemLabel: string;
    decisionsLabel: string;
    learningLabel: string;
    backLink: string;
  };
  stack: {
    heading: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  education: {
    heading: string;
    entries: Array<{ title: string; body: string }>;
  };
  contact: {
    heading: string;
    body: string;
    email: string;
    emailLabel: string;
    githubUrl: string;
    githubLabel: string;
    linkedinUrl: string;
    linkedinLabel: string;
  };
  footer: {
    madeWith: string;
    easterEggHint: string;
  };
}

export const es: Dictionary = {
  meta: {
    title: "Santiago Duró Fornaro — Portfolio",
    description:
      "Estudiante avanzado de Ingeniería en Sistemas (ORT Uruguay). Full-stack developer con base en .NET y Angular, construyendo con agentes de IA.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    stack: "Stack",
    education: "Educación",
    contact: "Contacto",
  },
  themeToggle: {
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
  },
  motionToggle: {
    disable: "Desactivar animaciones",
    enable: "Activar animaciones",
  },
  langToggle: {
    label: "Cambiar idioma",
  },
  hero: {
    eyebrow: "Santiago Duró Fornaro",
    heading: "Backend que se sostiene. Ahora también con agentes de IA.",
    subhead:
      "Estudiante avanzado de Ingeniería en Sistemas (ORT Uruguay). Full-stack developer con base en .NET y Angular, ahora también construyendo con agentes de IA.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contacto",
  },
  about: {
    heading: "Cómo pienso",
    pillars: [
      {
        title: "Amplitud con propósito",
        body: "Curiosidad ancha (matemática, cerebro, fotografía) → Ingeniería en Sistemas por ser la carrera lo bastante amplia como para no cerrar esa lista.",
      },
      {
        title: "Rigor silencioso",
        body: "No me conformo con que algo funcione — necesito entender por qué. De ahí TDD, Clean Architecture y pedir explicaciones antes de aceptar una decisión.",
      },
    ],
    accent: {
      title: "Calidez en confianza",
      caption: "[placeholder — franja de piano interactivo, Fase 4]",
    },
  },
  experience: {
    heading: "Experiencia",
    entries: [
      {
        role: "Fullstack Developer",
        org: "Startup de IA en etapa temprana",
        period: "2026 – Presente",
        stack: ["Next.js", "TypeScript", "Supabase", "Claude API"],
        bullets: [
          "Plataforma web con IA sobre el agent framework de Anthropic para automatizar flujos de trabajo.",
          "Features fullstack: autenticación, diseño de base de datos, integración de APIs.",
          "3 juniors decidiendo arquitectura, stack y agentes (SDK, skills, MCP, hooks) sin un senior que revise antes de que la decisión importe.",
        ],
      },
    ],
  },
  projects: {
    heading: "Proyectos",
    viewCase: "Ver caso",
    repoLink: "Repo",
    noDemoNote: "Demo en camino — hoy corre local",
    problemLabel: "Problema",
    decisionsLabel: "Decisiones clave",
    learningLabel: "Aprendizaje",
    backLink: "Volver a proyectos",
  },
  stack: {
    heading: "Stack",
    groups: [
      { label: "Backend", items: [".NET Core 8", "C#", "Entity Framework", "SQL Server"] },
      { label: "Frontend", items: ["Angular", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "IA / Agentes", items: ["Claude API", "Agent SDK", "MCP", "Skills", "Hooks"] },
      { label: "Prácticas", items: ["Clean Architecture", "TDD", "JWT", "Scrum / Azure DevOps", "Docker"] },
    ],
  },
  education: {
    heading: "Educación",
    entries: [
      { title: "Ing. en Sistemas — ORT Uruguay", body: "Estudiante avanzado." },
      { title: "Intercambio en Sevilla", body: "El quiebre: independencia, gratitud." },
      { title: "Cursos de Anthropic", body: "Base para el rol actual trabajando con agentes." },
    ],
  },
  contact: {
    heading: "¿Charlamos?",
    body: "Buscando mi próximo rol backend/fullstack.",
    // Fuente: content-draft.md. Discrepancia abierta con el email de la sesión —
    // confirmar con Santiago antes de publicar (ver plan Fase 1, sección Contacto).
    email: "santiagodurofornaro@gmail.com",
    emailLabel: "Mail",
    githubUrl: "https://github.com/SantiiDuro",
    githubLabel: "GitHub",
    linkedinUrl: "https://linkedin.com/in/santiago-duro-fornaro",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    madeWith: "Hecho con Next.js",
    easterEggHint: "psst — probá escribir `help`",
  },
};

export default es;
