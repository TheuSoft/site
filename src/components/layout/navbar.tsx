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
  { name: "Contato", href: "/contato", id: "contato" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_8px_32px_rgba(16,185,129,0.1)]"
      initial="hidden"
      animate="visible"
      variants={slideDown}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-blue-400/5 to-purple-400/5" />
      <div className="container-responsive relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-emerald-400 relative group px-3 py-2 rounded-lg",
                  isActive(item.href, item.id)
                    ? "text-emerald-400 bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "text-gray-300 hover:bg-white/5"
                )}
              >
                {item.name}
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
          <div className="md:hidden py-4 border-t border-dark-800">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium px-3 py-2 rounded-md transition-colors duration-200",
                    isActive(item.href, item.id)
                      ? "text-emerald-400 bg-dark-800"
                      : "text-gray-300 hover:text-emerald-400 hover:bg-dark-800"
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
