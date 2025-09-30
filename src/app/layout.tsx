import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Portfolio - Analista de Sistemas e Suporte Técnico",
  description:
    "Portfolio profissional de analista de sistemas e suporte técnico especializado em soluções de TI, atendimento ao cliente, manutenção e infraestrutura.",
  keywords: [
    "analista de sistemas",
    "suporte técnico",
    "TI",
    "infraestrutura",
    "atendimento",
    "manutenção",
    "portfolio",
  ],
  authors: [{ name: "Analista de Sistemas Portfolio" }],
  creator: "Analista de Sistemas Portfolio",
  publisher: "Analista de Sistemas Portfolio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mcraft-ti.vercel.app/",
    title: "Portfolio - Analista de Sistemas e Suporte Técnico",
    description:
      "Portfolio profissional de analista de sistemas e suporte técnico especializado em soluções de TI, atendimento ao cliente, manutenção e infraestrutura.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Analista de Sistemas e Suporte Técnico",
    description:
      "Portfolio profissional de analista de sistemas e suporte técnico especializado em soluções de TI, atendimento ao cliente, manutenção e infraestrutura.",
    creator: "@portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <MotionProvider>
            <ScrollProgress />
            <div className="min-h-screen bg-dark-900 text-white">
              <Navbar />
              {children}
              <Footer />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
