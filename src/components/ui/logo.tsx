"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/providers/motion-provider";

interface LogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero";
  variant?: "navbar" | "footer" | "hero" | "default";
  responsive?: boolean; // Se true, adapta o tamanho em telas menores
}

export function Logo({
  className = "",
  size = "md",
  variant = "default",
  responsive = false,
}: LogoProps) {
  const sizeClasses = {
    xs: { width: 32, height: 32 }, // Para usos muito pequenos
    sm: { width: 60, height: 24 }, // Para usos pequenos (mantém proporção 2.5:1)
    md: { width: 125, height: 50 }, // Para footer (aumentado - mantém proporção 2.5:1)
    lg: { width: 140, height: 56 }, // Para navbar (ajustado para altura 20 - mantém proporção 2.5:1)
    xl: { width: 200, height: 80 }, // Para destaque (mantém proporção 2.5:1)
    hero: { width: 250, height: 100 }, // Para uso principal/hero (dimensões solicitadas)
  };

  const logoSize = sizeClasses[size];

  // Função para aplicar responsividade se habilitada
  const getResponsiveSize = () => {
    if (!responsive) return logoSize;

    // Para tamanhos hero e xl, reduz em telas pequenas
    if (size === "hero" || size === "xl") {
      return {
        width: logoSize.width,
        height: logoSize.height,
        // Classe CSS será aplicada para responsividade
      };
    }
    return logoSize;
  };

  const responsiveSize = getResponsiveSize();

  const getVariantStyles = () => {
    switch (variant) {
      case "navbar":
        return "hover:drop-shadow-[0_0_8px_rgba(126,217,87,0.4)] transition-all duration-300 hover:brightness-110";
      case "footer":
        return "hover:drop-shadow-[0_0_8px_rgba(126,217,87,0.4)] transition-all duration-300 hover:brightness-110";
      case "hero":
        return "hover:drop-shadow-[0_0_15px_rgba(126,217,87,0.6)] transition-all duration-500 hover:brightness-125 hover:saturate-110";
      default:
        return "hover:drop-shadow-[0_0_10px_rgba(126,217,87,0.5)] transition-all duration-300 hover:brightness-110";
    }
  };

  const getAnimationProps = () => {
    switch (variant) {
      case "hero":
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring" as const, stiffness: 300, damping: 20 },
        };
      case "navbar":
        return {
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          transition: { type: "spring" as const, stiffness: 400, damping: 17 },
        };
      default:
        return {
          whileHover: { scale: 1.08 },
          whileTap: { scale: 0.96 },
          transition: { type: "spring" as const, stiffness: 350, damping: 18 },
        };
    }
  };

  const glowIntensity =
    variant === "hero"
      ? "from-emerald-400/15 to-lime-400/15"
      : "from-emerald-400/10 to-lime-400/10";

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <MotionDiv
        className={`flex items-center justify-center rounded-lg p-2 group relative ${getVariantStyles()}`}
        {...getAnimationProps()}
      >
        {/* Background glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${glowIntensity} blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Logo container */}
        <div className="relative z-10">
          <Image
            src="/logo.svg"
            alt="McRAFT Technology - Portfolio Logo"
            width={responsiveSize.width}
            height={responsiveSize.height}
            className={`object-contain transition-all duration-300 ${
              variant === "hero" ? "drop-shadow-sm" : "filter brightness-100"
            } ${
              responsive && (size === "hero" || size === "xl")
                ? "max-w-[180px] xs:max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-auto"
                : ""
            }`}
            priority={variant === "navbar" || variant === "hero"}
          />
        </div>

        {/* Enhanced glow for hero variant */}
        {variant === "hero" && (
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-lime-500/5 blur-2xl rounded-full -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        )}
      </MotionDiv>
    </Link>
  );
}
