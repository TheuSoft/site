"use client";

import { useEffect, useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";

export function useScrollEffects() {
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return {
    scrollYProgress,
    yParallax,
    yParallaxReverse,
    scaleParallax,
    opacityFade,
  };
}

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    margin: "-100px 0px",
  });

  return { ref, isInView };
}

export function useParallaxElement(speed = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
