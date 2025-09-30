import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Portfolio - Desenvolvedor Full Stack",
  description:
    "Portfolio profissional de desenvolvedor full stack especializado em React, Next.js, Node.js e tecnologias modernas.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "nextjs",
    "nodejs",
    "portfolio",
  ],
  authors: [{ name: "Desenvolvedor Portfolio" }],
  creator: "Desenvolvedor Portfolio",
  publisher: "Desenvolvedor Portfolio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio.com",
    title: "Portfolio - Desenvolvedor Full Stack",
    description:
      "Portfolio profissional de desenvolvedor full stack especializado em React, Next.js, Node.js e tecnologias modernas.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Desenvolvedor Full Stack",
    description:
      "Portfolio profissional de desenvolvedor full stack especializado em React, Next.js, Node.js e tecnologias modernas.",
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
