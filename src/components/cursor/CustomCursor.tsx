"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const reducedMotion = usePrefersReducedMotion();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const scale = useSpring(1, { stiffness: 400, damping: 28 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 25 });

  useEffect(() => {
    if (reducedMotion || window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = () => {
      scale.set(0.4);
      ringScale.set(1.8);
    };

    const onLeaveInteractive = () => {
      scale.set(1);
      ringScale.set(1);
    };

    let raf: number;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const interactives = document.querySelectorAll(
      "a, button, [data-magnetic], [data-cursor='pointer']",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, [reducedMotion, scale, ringScale]);

  if (reducedMotion) return null;

  return (
    <>
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-10 w-10 rounded-full border border-foreground/15 md:block"
        style={{ scale: ringScale }}
        aria-hidden="true"
      />
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] hidden h-2 w-2 rounded-full bg-foreground md:block"
        style={{ scale }}
        aria-hidden="true"
      />
    </>
  );
}
