"use client";

import { useReveal } from "@/hooks/useReveal";

export default function RevealSection({ children, className = "", delayClass = "" }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
