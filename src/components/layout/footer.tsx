"use client";

import Link from "next/link";
import { MotionFooter, fadeIn } from "@/providers/motion-provider";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { Logo } from "@/components/ui/logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/TheuSoft",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-carvalho-450681101/",
    icon: <FaLinkedin />,
  },
];

const quickLinks = [{ name: "Home", href: "/" }];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="md" variant="footer" />
            <p className="text-gray-400 text-sm">
              Analista de TI em desenvolvimento, buscando crescimento na área de
              programação e tecnologia com foco em soluções inovadoras.
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
                <span>matheusmcm150@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <PhoneIcon className="h-5 w-5 text-emerald-400" />
                <span>+55 (34) 9 9242-4044</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPinIcon className="h-5 w-5 text-emerald-400" />
                <span>Uberaba - MG, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="w-full flex justify-center">
              <p className="text-gray-400 text-sm text-center">
                © {currentYear} Matheus Carvalho Portfolio.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm"></div>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
}
