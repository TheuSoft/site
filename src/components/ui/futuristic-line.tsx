'use client';

import { MotionDiv } from '@/providers/motion-provider';

interface FuturisticLineProps {
  className?: string;
  animate?: boolean;
}

export function FuturisticLine({ className = '', animate = true }: FuturisticLineProps) {
  return (
    <MotionDiv
      className={`relative h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent ${className}`}
      initial={animate ? { scaleX: 0, opacity: 0 } : {}}
      whileInView={animate ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm opacity-50" />
      <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
    </MotionDiv>
  );
}