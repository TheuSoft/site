"use client";

import { m, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
