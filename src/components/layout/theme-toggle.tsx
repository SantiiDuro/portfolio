"use client";

import { useTheme } from "@/components/providers/theme-provider";
import type { Dictionary } from "@/content/dictionaries/es";

// Botón funcional simple por ahora. La micro-animación de "lamparita" al
// cambiar de modo (CLAUDE.md, idea en evaluación) es una mejora de Fase 5 —
// no bloquea el MVP.
export function ThemeToggle({ dictionary }: { dictionary: Dictionary }) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? dictionary.themeToggle.switchToLight : dictionary.themeToggle.switchToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-background-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
