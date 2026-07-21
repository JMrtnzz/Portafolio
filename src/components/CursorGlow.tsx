"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Soft spotlight that follows the pointer on desktop. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 180, damping: 28 });
  const sy = useSpring(y, { stiffness: 180, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen"
      style={{
        left: sx,
        top: sy,
        background:
          "radial-gradient(circle, rgba(225,6,0,0.22) 0%, rgba(225,6,0,0.06) 35%, transparent 68%)",
      }}
    />
  );
}
