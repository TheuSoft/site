"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/helpers/cn";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MotionNav, slideDown } from "@/providers/motion-provider";
import { Bars3Icon, XMarkIcon } from "@/components/icons";
import { Logo } from "@/components/ui/logo";

const navigation = [
  { name: "Home", href: "/", id: "home" },
  { name: "Sobre", href: "/sobre", id: "sobre" },
  { name: "Projetos", href: "/projetos", id: "projetos" },
  { name: "Cursos", href: "/cursos", id: "cursos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection();

  const isActive = (href: string, id: string) => {
    if (pathname === "/") {
      return activeSection === id;
    }
    return pathname === href;
  };

  return (
    <MotionNav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-emerald-500/30 shadow-[0_8px_32px_rgba(16,185,129,0.15)]"
      initial="hidden"
      animate="visible"
      variants={slideDown}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/8 via-blue-400/8 to-purple-400/8" />
      <div className="container-responsive relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo size="lg" variant="navbar" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 hover:text-emerald-300 relative group px-4 py-2 rounded-lg border border-transparent hover:border-emerald-400/30",
                  isActive(item.href, item.id)
                    ? "text-emerald-300 bg-emerald-400/15 shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-400/50 font-bold"
                    : "text-white hover:bg-emerald-400/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                )}
              >
                {item.name}
                {/* Indicador de ativo */}
                {isActive(item.href, item.id) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-dark-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500/30">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-semibold px-4 py-3 rounded-lg transition-all duration-200 border border-transparent",
                    isActive(item.href, item.id)
                      ? "text-emerald-300 bg-emerald-400/15 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "text-white hover:text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-400/30"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </MotionNav>
  );
}
