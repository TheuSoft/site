"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/providers/motion-provider";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { width: 120, height: 32 },
    md: { width: 150, height: 40 },
    lg: { width: 180, height: 48 },
  };

  const logoSize = sizeClasses[size];

  return (
    <Link href="/" className={`block ${className}`}>
      <MotionDiv
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* MECrafts Logo */}
        <div className="relative">
          <Image
            src="/logo.png"
            alt="MECrafts Logo"
            width={logoSize.width}
            height={logoSize.height}
            className="drop-shadow-lg object-contain"
            priority
          />

          {/* Optional glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-lime-400/20 blur-lg rounded-lg -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </MotionDiv>
    </Link>
  );
}
