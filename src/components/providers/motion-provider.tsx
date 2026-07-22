"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";

interface MotionContextValue {
  /** true = el usuario forzó "sin animaciones" manualmente, sin importar el SO. */
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const STORAGE_KEY = "motion-preference";
const MotionContext = createContext<MotionContextValue | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "reduced") setReducedMotion(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-motion", reducedMotion ? "reduced" : "full");
  }, [reducedMotion]);

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, next ? "reduced" : "full");
      return next;
    });
  };

  return (
    <MotionContext.Provider value={{ reducedMotion, toggleReducedMotion }}>
      {/* "user" = framer-motion respeta prefers-reduced-motion del SO;
          "always" = el toggle manual fuerza reducir animaciones igual. */}
      <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>{children}</MotionConfig>
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotionPreference debe usarse dentro de <MotionProvider>");
  return ctx;
}
