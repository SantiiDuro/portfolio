# CLAUDE.md — Portfolio personal de Santiago Duró Fornaro

## Propósito del proyecto
Sitio de portfolio personal para Santiago, estudiante avanzado de Ingeniería en
Sistemas (ORT Uruguay) buscando su próximo rol junior/intern backend o fullstack
(.NET, Angular, y experiencia profesional actual en Next.js/Supabase). El sitio debe
transmitir profesionalismo serio Y personalidad genuina — nunca un template genérico
de portfolio de developer.

## Identidad de marca (aplicar en todo copy y decisión de diseño)
1. **Amplitud con propósito** — eligió esta carrera por su amplitud, no por vocación
   única; conecta con intereses variados (neurología, música, fotografía).
2. **Rigor silencioso** — perfeccionista, entiende el porqué antes de actuar, valora
   el orden. Se traduce en Clean Architecture, TDD, JWT.
3. **Calidez en confianza** — introvertido de base, cálido en confianza, leal. El
   intercambio en Sevilla fue un quiebre (independencia, gratitud).

**Tono de copy:** híbrido cálido-directo. Datos concretos y específicos > adjetivos
abstractos de personalidad ("un piano a medio aprender" en vez de "soy divertido").

**Fuente de contenido:** `content-draft.md` en este mismo repo. No inventar datos
biográficos, logros ni experiencias nuevas — todo dato personal sale de ese archivo
o se confirma con Santiago antes de publicarse.

## Stack técnico
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion para microinteracciones
- Deploy: Vercel, plan Hobby (uso personal no comercial)

## Dirección de diseño
- **Paleta:** oscuro cálido (carbón, no negro puro) + acento ámbar/mostaza cálido.
  Evitar el azul corporativo default de portfolios de developer.
- **Tipografía:** serif expresiva para títulos + grotesca humanista cálida para
  cuerpo de texto. Evitar Inter/Geist como fuente principal (se leen como "default").
- **Microinteracciones:** 150-400ms para micro-estados, 600-800ms máximo para
  entradas de hero. SIEMPRE envueltas en `@media (prefers-reduced-motion: no-preference)`
  y con un toggle visible para desactivarlas.
- **Foto real:** con dirección de arte (tratamiento visual coherente con la paleta),
  nunca una foto de perfil corporativa genérica.

## Arquitectura de secciones
Hero (nombre + propuesta de valor + CTA) → Sobre mí/Cómo pienso → Experiencia →
Proyectos (case studies) → Stack/Habilidades → Educación → Contacto → easter egg.
Nombre, propuesta de valor y CTA deben ser visibles sin scroll (los reclutadores
escanean ~7 segundos antes de decidir si siguen leyendo).

## Ideas creativas en evaluación (no son features "cerradas" — anotadas para no perderlas)
- **Instrumento interactivo (piano o guitarra):** cuerdas/teclas en SVG que reaccionan al
  hover con animación (Framer Motion) y sonido real (Web Audio API, osciladores — no
  hace falta archivos de audio). Literaliza el detalle del "piano a medio aprender" del
  copy. Restricciones: nunca autoplay, el gesto de interacción debe ser obviamente
  invitante (no sorpresa sonora), y no ocupar el fondo completo — contenerlo en una
  franja o sección específica para no competir con la legibilidad del hero.
- **Toggle de tema día/noche con lamparita:** en vez de un swap plano de colores, una
  micro-animación (lámpara/escritorio que se prende o apaga) al cambiar de modo claro a
  oscuro. Debe ser rápida (<1s) para no molestar en toggles repetidos, contenida cerca
  del botón (no fullscreen), y con fallback instantáneo bajo `prefers-reduced-motion`.

## Mini-juego easter egg
- **Activación:** código Konami o comando de terminal (`help` → `play`). Nunca un
  botón o banner central.
- **Temática:** ligada a la identidad — Snake con notas musicales (piano) o con
  neuronas/sinapsis. Nunca un juego genérico sin conexión personal.
- **Implementación:** componente aislado en canvas, cargado con `next/dynamic`
  (`ssr: false`) para no penalizar el bundle inicial.
- **Regla de oro:** si el juego empieza a competir en atención con los proyectos,
  se mueve al footer o a la página 404.

## Restricciones no negociables
- Performance: Lighthouse > 90, carga inicial < 2s.
- Accesibilidad: contraste AA, navegación completa por teclado, alt text en
  imágenes, `prefers-reduced-motion` siempre respetado.
- No reproducir el layout ni el tono literal de kalich.dev (es referencia de
  inspiración de un amigo, no un modelo a copiar).
- No inflar la sección de skills — priorizar señal sobre volumen.

## Roadmap por fases (resumen — plan completo ya conversado con Santiago)
0. Setup: Next.js + Tailwind + repo + deploy inicial en Vercel.
1. Arquitectura de información / wireframe (Plan Mode + `opusplan`).
2. Sistema de diseño: tokens de color, tipografía, componentes base.
3. Build de contenido real sobre `content-draft.md`.
4. Mini-juego easter egg (puede ir en subagente en paralelo).
5. Copy y microinteracciones — revisión humana obligatoria del copy final.
6. Testing, performance, accesibilidad, SEO, deploy final (subagente de review).
