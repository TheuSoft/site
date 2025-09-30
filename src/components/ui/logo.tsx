"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/providers/motion-provider";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "navbar" | "footer" | "default";
}

export function Logo({
  className = "",
  size = "md",
  variant = "default",
}: LogoProps) {
  const sizeClasses = {
    sm: { width: 40, height: 40 }, // Para navbar (altura limitada)
    md: { width: 80, height: 80 }, // Para footer
    lg: { width: 120, height: 120 }, // Para destaque
  };

  const logoSize = sizeClasses[size];

  const getVariantStyles = () => {
    switch (variant) {
      case "navbar":
        return "hover:drop-shadow-[0_0_8px_rgba(126,217,87,0.4)] transition-all duration-300";
      case "footer":
        return "hover:drop-shadow-[0_0_8px_rgba(126,217,87,0.4)] transition-all duration-300";
      default:
        return "hover:drop-shadow-[0_0_10px_rgba(126,217,87,0.5)] transition-all duration-300";
    }
  };

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <MotionDiv
        className={`flex items-center justify-center rounded-lg p-1 ${getVariantStyles()}`}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative">
          <Image
            src="/logo.svg"
            alt="Portfolio Logo"
            width={logoSize.width}
            height={logoSize.height}
            className="object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
            priority={variant === "navbar"}
          />

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-lime-400/10 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </MotionDiv>
    </Link>
  );
}
