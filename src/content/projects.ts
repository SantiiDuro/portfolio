// Datos estructurados de proyectos, derivados de content-draft.md. Campos de
// texto (problem/decisions/learning) son bilingües; metadata (slug, stack,
// fechas) no. Copy condensado a nivel "bullet" (Fase 0/1) — el desarrollo
// completo de cada decisión con su porqué se ajusta en Fase 3 sobre el draft.
//
// TODO abiertos (no inventar, confirmar con Santiago):
// - Smart Home: falta el aprendizaje ([COMPLETAR] en el draft).
// - Ningún proyecto tiene demo en vivo hoy (hasLiveDemo: false para ambos).

export interface ProjectContent {
  problem: string;
  decisions: string[];
  /** null = todavía no escrito en el draft ([COMPLETAR]) — no inventar. */
  learning: string | null;
}

export interface Project {
  slug: string;
  name: string;
  org: string;
  year: string;
  team: string;
  stack: string[];
  repoUrl: string | null;
  hasLiveDemo: boolean;
  content: {
    es: ProjectContent;
    en: ProjectContent;
  };
}

const t = (value: string) => `[TRANSLATE] ${value}`;

export const projects: Project[] = [
  {
    slug: "smart-home-management",
    name: "Smart Home Management System",
    org: "ORT Uruguay",
    year: "2024",
    team: "Equipo de 3",
    stack: [".NET Core 8", "Angular SPA", "SQL Server", "Entity Framework", "Docker"],
    repoUrl: "https://github.com/SantiiDuro/smarthome-fullstack-app",
    hasLiveDemo: false,
    content: {
      es: {
        problem:
          "Gestión centralizada de dispositivos smart-home con distintos niveles de permiso (empresa, dueño de casa) y la necesidad de que terceros integraran nuevos formatos de dispositivo sin tocar el código base.",
        decisions: [
          "JWT con 3 niveles de rol apilables (Admin, Company Owner, Home Owner), cada uno heredando los permisos del anterior sin conflictos.",
          "Importador de dispositivos vía Reflection: terceros suman formatos (XML, JSON, HTTP) en tiempo de ejecución, sin recompilar.",
          "Esquema relacional de 10+ tablas con Entity Framework y SQL Server, containerizado con Docker, entregado con Scrum en Azure DevOps.",
        ],
        learning: null,
      },
      en: {
        problem: t(
          "Gestión centralizada de dispositivos smart-home con distintos niveles de permiso (empresa, dueño de casa) y la necesidad de que terceros integraran nuevos formatos de dispositivo sin tocar el código base."
        ),
        decisions: [
          t(
            "JWT con 3 niveles de rol apilables (Admin, Company Owner, Home Owner), cada uno heredando los permisos del anterior sin conflictos."
          ),
          t(
            "Importador de dispositivos vía Reflection: terceros suman formatos (XML, JSON, HTTP) en tiempo de ejecución, sin recompilar."
          ),
          t(
            "Esquema relacional de 10+ tablas con Entity Framework y SQL Server, containerizado con Docker, entregado con Scrum en Azure DevOps."
          ),
        ],
        learning: null,
      },
    },
  },
  {
    slug: "oop-simulator",
    name: "OOP Simulator",
    org: "ORT Uruguay",
    year: "2025",
    team: "Equipo de 3",
    stack: [".NET Core 8", "Angular SPA", "SQL Server", "Entity Framework"],
    repoUrl: "https://github.com/SantiiDuro/oop-simulator-fullstack",
    hasLiveDemo: false,
    content: {
      es: {
        problem:
          "Simulador web de conceptos de POO (clases, interfaces, namespaces, polimorfismo) que permitiera ejecutar métodos en vivo para ver comportamiento abstracto en tiempo real.",
        decisions: [
          "Separación de MethodSignatureEntity y MethodImplementationEntity: firma vs. implementación, priorizando responsabilidad única sobre la conveniencia de una sola clase.",
          "Transformadores de salida pluggables vía Reflection (PluginLoader<TInterface> genérico): terceros que nunca tocan el código fuente pueden agregar transformadores sin recompilar.",
          "Strategy + Factory para validar los 5 tipos de herencia de método, evitando un árbol de switches disperso.",
          "Métricas reales de NDepend (Abstractness, Instability, Distance): una 'violación' de dependencias estables se dejó a propósito por habilitar la extensibilidad vía plugins.",
        ],
        learning:
          "Al principio se bloqueó que un método se asocie a sí mismo (se asumió inválido); el foro del curso aclaró después que sí era válido. Se dejó así conscientemente en vez de perseguir la perfección sobre una funcionalidad menor, documentándolo con honestidad.",
      },
      en: {
        problem: t(
          "Simulador web de conceptos de POO (clases, interfaces, namespaces, polimorfismo) que permitiera ejecutar métodos en vivo para ver comportamiento abstracto en tiempo real."
        ),
        decisions: [
          t(
            "Separación de MethodSignatureEntity y MethodImplementationEntity: firma vs. implementación, priorizando responsabilidad única sobre la conveniencia de una sola clase."
          ),
          t(
            "Transformadores de salida pluggables vía Reflection (PluginLoader<TInterface> genérico): terceros que nunca tocan el código fuente pueden agregar transformadores sin recompilar."
          ),
          t(
            "Strategy + Factory para validar los 5 tipos de herencia de método, evitando un árbol de switches disperso."
          ),
          t(
            "Métricas reales de NDepend (Abstractness, Instability, Distance): una 'violación' de dependencias estables se dejó a propósito por habilitar la extensibilidad vía plugins."
          ),
        ],
        learning: t(
          "Al principio se bloqueó que un método se asocie a sí mismo (se asumió inválido); el foro del curso aclaró después que sí era válido. Se dejó así conscientemente en vez de perseguir la perfección sobre una funcionalidad menor, documentándolo con honestidad."
        ),
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
