'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Só gera as partículas após a hidratação no cliente
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${15 + Math.random() * 10}s`,
    }));
    
    setParticles(generatedParticles);
    setIsMounted(true);
  }, []);

  // Não renderiza nada até estar montado no cliente
  if (!isMounted) {
    return <div className="floating-particles" />;
  }

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
          }}
        />
      ))}
    </div>
  );
}