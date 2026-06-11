"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
