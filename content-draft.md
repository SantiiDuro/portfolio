# Copy del portfolio — Santiago Duró Fornaro

> Este es un BORRADOR. Las partes marcadas [COMPLETAR] necesitan tu reflexión personal —
> no las inventé porque son cosas que solo vos podés responder con honestidad.
> Todo lo demás: editalo libremente, esto es punto de partida, no versión final.

---

## Hero / One-liner

Estudiante avanzado de Ingeniería en Sistemas (ORT Uruguay). Full-stack developer con
base en .NET y Angular, ahora también construyendo con agentes de IA.

---

## Sobre mí / Cómo pienso

*(Estado: párrafos 1 y 2 bien encaminados, falta una pasada de pulido fino cuando
estén los tres juntos. Párrafo 3 en pausa — ver nota abajo.)*

**Amplitud con propósito:**
De adolescente jugaba a ser ingeniero antes de saber qué era serlo. Lo único que
tenía claro era que ahí, en algún lugar, se cruzaban la matemática —que se me daba
bien— y las computadoras —que usaba casi como quien juega. El resto lo fui
descubriendo por descarte: pasé por más de un test vocacional intentando entender si
lo mío era la fotografía, el deporte, o esa fascinación medio rara que tengo con cómo
funciona el cerebro. Ingeniería en Sistemas terminó ganando no porque resolviera esa
lista, sino porque era la única carrera lo bastante ancha como para no obligarme a
cerrarla. Todavía no crucé ninguno de esos mundos en un proyecto real —pero es, sin
dudas, lo que más ganas tengo de hacer.

**Rigor silencioso:**
No me conformo con que algo funcione — necesito entender por qué funciona. Cuando
armé el sistema de roles apilables del proyecto de casas inteligentes, pasé más
tiempo dibujando quién hereda qué permiso de quién que escribiendo el código en sí;
me parecía peor cualquier atajo que funcionara por accidente que tardar un día extra
en entenderlo bien. Esa misma cabeza es la que me hace pedir explicaciones en equipo
antes de aceptar una decisión sin discutirla, y la que elige TDD y Clean Architecture
no porque estén de moda, sino porque son la forma más honesta que conozco de
construir algo que se sostenga.

**Calidez en confianza — [EN PAUSA, volver más adelante]:**
Diagnóstico de por qué no cerró en 6 intentos: los otros dos párrafos tienen una
traducción profesional directa y honesta (curiosidad amplia → versatilidad;
perfeccionismo → calidad de código). "Calidez" es un rasgo interpersonal, y forzarlo
a terminar en "esto es lo que puedo hacer por tu empresa" sonó siempre impostado —
no es un problema de la anécdota, es la estructura que le estábamos exigiendo.
Ideas descartadas: Sevilla/burocracia (forzado), Sevilla/amigos (genérico), abrir con
"soy introvertido" (no suma). Pendiente: probar algo más corto, sin intentar
demostrar nada, que no arranque anunciando el rasgo.

---

## Experiencia

**Fullstack Developer — Startup de IA en etapa temprana** · 2026 – Presente
*Next.js · TypeScript · Supabase · Claude API*
- Construyendo una plataforma web con IA que usa el agent framework de Anthropic para
  automatizar flujos de trabajo.
- Desarrollo de features fullstack con Next.js y Supabase: autenticación, diseño de
  base de datos, integración de APIs.
- Empezamos siendo tres juniors, desde una idea y nada más: la arquitectura, el
  stack, y cómo encarar agentes (SDK, skills, MCP, hooks, agent loops) los decidimos
  nosotros, con algunos cursos de Anthropic como única base. Sin un senior que
  revisara antes de que la decisión importara, no alcanzaba con elegir — había que
  entender el trade-off detrás de cada opción antes de escribir una línea de código.

---

## Proyectos (case studies)

> **Pendiente técnico (no es tarea de copy, anotarlo para más adelante):** ninguno de
> los dos proyectos tiene demo en vivo hoy, solo corren local. Deployar al menos uno
> (ideas: Azure free tier, Railway, Render — ojo que SQL Server en free tier suele ser
> la parte incómoda, evaluar SQLite para la demo si hace falta) sumaría mucho más que
> cualquier ajuste de texto. Guardarlo como tarea separada del build del portfolio.

### Smart Home Management System — ORT Uruguay (2024, equipo de 3)
*.NET Core 8 · Angular SPA · SQL Server · Entity Framework · Docker*

**Problema:** gestión centralizada de dispositivos smart-home (sensores de movimiento,
lámparas inteligentes) con distintos niveles de permiso (empresa, dueño de casa) y la
necesidad de que terceros pudieran integrar nuevos formatos de dispositivo sin tocar
el código base.

**Decisiones clave:**
- JWT con 3 niveles de rol apilables (Admin, Company Owner, Home Owner), cada uno
  heredando los permisos del anterior sin conflictos.
- Importador de dispositivos vía Reflection: terceros pueden sumar formatos (XML,
  JSON, HTTP) en tiempo de ejecución, sin recompilar el sistema.
- Esquema relacional de 10+ tablas con Entity Framework y SQL Server, todo
  containerizado con Docker, entregado con Scrum en Azure DevOps.

[COMPLETAR — aprendizaje]: ¿qué harías distinto si lo empezaras hoy? ¿qué fue lo más
difícil de la parte de Reflection o del diseño de roles?

### OOP Simulator — ORT Uruguay (2025, equipo de 3)
*.NET Core 8 · Angular SPA · SQL Server · Entity Framework*

**Problema:** un simulador web de conceptos de programación orientada a objetos
(clases, interfaces, namespaces, polimorfismo) que permitiera ejecutar métodos en
vivo, para ver el comportamiento de conceptos abstractos en tiempo real.

**Decisiones clave:**
- Separación de `MethodSignatureEntity` y `MethodImplementationEntity`: en vez de
  una sola entidad con atributos nulleables según el contexto, se separó la firma
  (qué hace un método) de la implementación (cómo lo hace), priorizando
  responsabilidad única sobre la conveniencia de una sola clase.
- Transformadores de salida "pluggables" en runtime vía Reflection: un
  `PluginLoader<TInterface>` genérico explora una carpeta de plugins y carga
  cualquier ensamblado (.dll) que implemente la interfaz esperada. Se eligió
  Reflection en vez de un Factory porque el requisito no era elegir entre tipos
  conocidos de antemano, sino que terceros que nunca tocan el código fuente
  pudieran agregar transformadores nuevos sin recompilar el sistema.
- Strategy + Factory para validar los 5 tipos de herencia de método (virtual,
  override, sealed, abstract, regular), evitando un árbol de switches disperso.
- Métricas reales (NDepend: Abstractness, Instability, Distance) para evaluar el
  diseño: cuando una métrica marcaba una "violación" del principio de
  dependencias estables, la analizaron y la dejaron así a propósito, porque era
  la forma correcta de habilitar la extensibilidad vía plugins — no un error.

**Aprendizaje:** Al principio asumimos que las llamadas recursivas entre métodos
eran un caso inválido, así que bloqueamos que un método se asocie a sí mismo. El
foro del curso aclaró después que sí eran válidas — para ese momento la
validación ya estaba implementada y probada, así que la dejamos así. Fue una
decisión consciente de no perseguir la perfección sobre una funcionalidad menor,
y de documentarlo con honestidad en vez de esconderlo.

---

## Contacto (blurb corto)

¿Charlamos? Estoy buscando mi próximo rol backend/fullstack — escribime o mirá mi
código en GitHub.

- Mail: santiagodurofornaro@gmail.com
- GitHub: github.com/SantiiDuro
- LinkedIn: linkedin.com/in/santiago-duro-fornaro
