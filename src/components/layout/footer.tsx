"use client";

import Link from "next/link";
import { MotionFooter, fadeIn } from "@/providers/motion-provider";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { Logo } from "@/components/ui/logo";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: "📘",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "💼",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "🐦",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <MotionFooter
      className="bg-dark-950 border-t border-dark-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-gray-400 text-sm">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais incríveis e soluções inovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <EnvelopeIcon className="h-5 w-5 text-emerald-400" />
                <span>contato@portfolio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <PhoneIcon className="h-5 w-5 text-emerald-400" />
                <span>+55 (34) 9 92424-4044</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPinIcon className="h-5 w-5 text-emerald-400" />
                <span>Uberaba - MG, Brasil</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm">
              Receba atualizações sobre novos projetos e tecnologias.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <button className="w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors duration-200">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Portfolio. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm"></div>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
}
