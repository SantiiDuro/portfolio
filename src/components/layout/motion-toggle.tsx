"use client";

import { useMotionPreference } from "@/components/providers/motion-provider";
import type { Dictionary } from "@/content/dictionaries/es";

export function MotionToggle({ dictionary }: { dictionary: Dictionary }) {
  const { reducedMotion, toggleReducedMotion } = useMotionPreference();
  const label = reducedMotion ? dictionary.motionToggle.enable : dictionary.motionToggle.disable;

  return (
    <button
      type="button"
      onClick={toggleReducedMotion}
      aria-pressed={reducedMotion}
      aria-label={label}
      title={label}
      className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-background-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span aria-hidden="true">{reducedMotion ? "▶" : "⏸"}</span>
    </button>
  );
}
