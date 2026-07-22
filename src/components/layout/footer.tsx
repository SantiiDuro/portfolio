import type { Dictionary } from "@/content/dictionaries/es";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-foreground-muted">
        <p>
          © Santiago Duró Fornaro · {dictionary.footer.madeWith}
        </p>
        {/* Hook del easter egg — nunca un botón o banner central (CLAUDE.md).
            Implementación del comando de terminal / juego: Fase 4. */}
        <p className="font-mono text-xs opacity-70">{dictionary.footer.easterEggHint}</p>
      </div>
    </footer>
  );
}
