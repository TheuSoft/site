"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MotionDiv,
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  bounceIn,
  rotateIn,
} from "@/providers/motion-provider";
import { getFeaturedProjects } from "@/data/projects";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
} from "@/components/icons";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { useScrollEffects } from "@/hooks/use-scroll-effects";
import { Magnetic } from "@/components/ui/magnetic";
import { Typewriter } from "@/components/ui/typewriter";
import { TiltCard } from "@/components/ui/tilt-card";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const { yParallax, yParallaxReverse, scaleParallax, opacityFade } =
    useScrollEffects();

  return (
    <main className="relative pt-16 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Hero Section */}
      <Section id="hero" className="relative min-h-screen flex items-center">
        <MotionDiv
          className="absolute inset-0 hero-gradient opacity-60"
          style={{ y: yParallax, opacity: opacityFade }}
        />
        <MotionDiv
          className="absolute inset-0 tech-pattern opacity-30"
          style={{ y: yParallaxReverse }}
        />

        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto animate-pulse" />

            <MotionDiv
              variants={bounceIn}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono leading-tight">
                <MotionDiv
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block"
                >
                  <span className="text-gray-300">HELLO_</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="inline-block ml-2"
                >
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    WORLD
                  </span>
                </MotionDiv>
              </h1>
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-gray-400 font-mono text-sm">
                  {"// Iniciando sistemas..."}
                </p>
              </MotionDiv>
            </MotionDiv>

            <MotionDiv
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-2xl sm:text-3xl text-gray-300 font-light">
                  Eu sou{" "}
                  <span className="text-emerald-400 font-semibold">
                    Matheus
                  </span>
                </div>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
              >
                <div className="text-xl sm:text-2xl text-gray-400 font-mono">
                  {"{ "}
                  <Typewriter
                    texts={[
                      "ANALISTA_DE_TI",
                      "DESENVOLVEDOR_INICIANTE",
                      "APRENDIZ_EM_REACT",
                      "ENTUSIASTA_NODE.JS",
                      "BUSCANDO_EXPERIÊNCIA",
                      "CURIOSO_POR_TECNOLOGIA",
                    ]}
                    speed={120}
                    delay={2000}
                    className="text-emerald-400"
                  />
                  {" }"}
                </div>
              </MotionDiv>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Aprendiz determinado em TI, atuando em suporte, infraestrutura,
                segurança, desenvolvimento e gestão de projetos. Busco soluções
                inovadoras para otimizar processos e evoluir continuamente na
                área tecnológica.
              </p>
            </MotionDiv>
          </div>

          {/* Tech Stack Indicators */}
          <MotionDiv
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 py-8"
          >
            {[
              "REACT",
              "NEXT.JS",
              "TYPESCRIPT",
              "IA",
              "MANUTENÇÃO TI",
              "SUPORTE TÉCNICO",
              "INTERMEDIÁRIO PACOTE OFFICE",
            ].map((tech, index) => (
              <div
                key={tech}
                className={`px-4 py-2 rounded-sm border font-mono text-sm ${
                  index % 3 === 0
                    ? "border-emerald-400/30 text-emerald-400"
                    : index % 3 === 1
                    ? "border-blue-400/30 text-blue-400"
                    : "border-purple-400/30 text-purple-400"
                } hover:bg-opacity-10 transition-colors`}
              >
                {tech}
              </div>
            ))}
          </MotionDiv>

          {/* CTA Buttons */}
          <MotionDiv
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Magnetic strength={0.2}>
              <Button
                size="lg"
                className="btn-futuristic text-white font-mono px-8 py-4 rounded-none border border-emerald-400/20 hover-lift"
                disabled
              >
                <div className="flex items-center gap-3">
                  EM DESENVOLVIMENTO
                  <CodeBracketIcon className="h-5 w-5" />
                </div>
              </Button>
            </Magnetic>
          </MotionDiv>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section id="about-preview" className="relative">
        <div className="absolute inset-0 tech-pattern opacity-30" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8" />
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6">
              <span className="heading-gradient">EXPERTISE</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              {"// Construindo o amanhã com Tecnologia"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <MotionDiv
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <MotionDiv
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                  }}
                  className="futuristic-border p-6 cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-mono">
                    ANALISTA_SISTEMAS_SUPORTE
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Atuação em análise de sistemas, suporte técnico e
                    infraestrutura de TI. Experiência em identificar e
                    solucionar problemas, otimizar processos e garantir o
                    funcionamento eficiente dos ambientes tecnológicos.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                  }}
                  className="futuristic-border p-6 cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-blue-400 mb-4 font-mono">
                    TRABALHO_EM_EQUIPE_TI
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Valorizo a colaboração e comunicação dentro da equipe de TI,
                    buscando contribuir com ideias, compartilhar conhecimento e
                    apoiar colegas para alcançar resultados eficientes e superar
                    desafios em conjunto.
                  </p>
                </MotionDiv>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <MotionDiv
                className="futuristic-border p-8 text-center"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MotionDiv
                  className="w-32 h-32 mx-auto mb-6 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                    <CodeBracketIcon className="h-16 w-16 text-emerald-400" />
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-4 font-mono">
                    APRENDENDO
                  </h3>
                </MotionDiv>

                <p className="text-gray-400 mb-6">
                  Sempre em busca de novos conhecimentos e desafios tecnológicos
                </p>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="featured-projects" className="relative">
        <div className="absolute inset-0 tech-pattern opacity-20" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              {"// Projetos que definem o futuro"}
            </p>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
              Soluções digitais inovadoras construídas com as mais modernas
              tecnologias
            </p>
          </div>

          <MotionDiv
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <MotionDiv
                key={project.id}
                variants={rotateIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
              >
                <TiltCard>
                  <Card className="futuristic-border bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:from-emerald-900/20 hover:to-blue-900/20 transition-all duration-500 group overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                          <CardTitle className="text-white font-mono text-lg">
                            {project.title}
                          </CardTitle>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`font-mono text-xs ${
                            index % 3 === 0
                              ? "bg-emerald-400/20 text-emerald-400"
                              : index % 3 === 1
                              ? "bg-blue-400/20 text-blue-400"
                              : "bg-purple-400/20 text-purple-400"
                          }`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs font-mono border-gray-600 hover:border-emerald-400/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs font-mono border-gray-600"
                            >
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-3">
                          {project.demoUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 font-mono"
                            >
                              <Link
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <EyeIcon className="h-4 w-4" />
                                DEMO
                              </Link>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-blue-400/30 text-blue-400 hover:bg-blue-400/10 font-mono"
                            >
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                CODE
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </MotionDiv>
            ))}
          </MotionDiv>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-mono"
              disabled
            >
              <div className="flex items-center gap-2">
                EM_BREVE
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <MotionDiv
          className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-blue-600/10 to-purple-600/10"
          style={{ y: yParallax, scale: scaleParallax }}
        />
        <MotionDiv
          className="absolute inset-0 tech-pattern opacity-40"
          style={{ y: yParallaxReverse }}
        />
        <div className="relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-mono">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PRONTO_PARA_INOVAR?
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              {"// Transformando ideias em realidade digital"}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Estou sempre em busca de novos desafios tecnológicos e projetos
              inovadores. Vamos construir juntos a próxima geração de soluções
              digitais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <MotionDiv
                className="futuristic-border p-6"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                }}
              >
                <MotionDiv
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-emerald-400 font-mono mb-2"
                >
                  24h
                </MotionDiv>
                <div className="text-gray-400 text-sm">Resposta Garantida</div>
              </MotionDiv>

              <MotionDiv
                className="futuristic-border p-6"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
              >
                <MotionDiv
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-blue-400 font-mono mb-2"
                >
                  100%
                </MotionDiv>
                <div className="text-gray-400 text-sm">Dedicação Total</div>
              </MotionDiv>

              <MotionDiv
                className="futuristic-border p-6"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                }}
              >
                <MotionDiv
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-purple-400 font-mono mb-2"
                >
                  ∞
                </MotionDiv>
                <div className="text-gray-400 text-sm">Possibilidades</div>
              </MotionDiv>
            </div>
          </div>

          <Magnetic strength={0.3}>
            <Button
              size="lg"
              className="btn-futuristic text-white font-mono text-lg px-12 py-6 rounded-none border border-emerald-400/20 opacity-50 cursor-not-allowed"
              disabled
            >
              <div className="flex items-center gap-3">
                EM_CONSTRUÇÃO
                <ArrowRightIcon className="h-5 w-5" />
              </div>
            </Button>
          </Magnetic>
        </div>
      </Section>
    </main>
  );
}
