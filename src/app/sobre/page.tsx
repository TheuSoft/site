"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { Magnetic } from "@/components/ui/magnetic";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/icons";
import {
  aboutInfo,
  skills,
  interests,
  getSkillsByCategory,
  getExperiencesByType,
  getExperiencesByDate,
} from "@/data/about";
import { Experience } from "@/types/about";

type SkillFilter =
  | "all"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "design";
type ExperienceFilter = "all" | "work" | "freelance" | "personal" | "education";

export default function SobrePage() {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>("all");
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceFilter>("all");
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  const filteredSkills =
    skillFilter === "all" ? skills : getSkillsByCategory(skillFilter);
  const filteredExperiences =
    experienceFilter === "all"
      ? getExperiencesByDate()
      : getExperiencesByType(experienceFilter);

  // Configuração do carrossel
  const experiencesPerPage = 4;
  const shouldShowCarousel = filteredExperiences.length > experiencesPerPage;
  const totalPages = Math.ceil(filteredExperiences.length / experiencesPerPage);
  const startIndex = currentExperienceIndex * experiencesPerPage;
  const endIndex = startIndex + experiencesPerPage;
  const visibleExperiences = filteredExperiences.slice(startIndex, endIndex);

  const nextExperiences = () => {
    setCurrentExperienceIndex((prev) =>
      prev + 1 >= totalPages ? 0 : prev + 1
    );
  };

  const prevExperiences = () => {
    setCurrentExperienceIndex((prev) =>
      prev - 1 < 0 ? totalPages - 1 : prev - 1
    );
  };

  // Reset do índice quando o filtro muda
  useEffect(() => {
    setCurrentExperienceIndex(0);
  }, [experienceFilter]);

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "work":
        return "text-emerald-400 border-emerald-500/50";
      case "freelance":
        return "text-blue-400 border-blue-500/50";
      case "personal":
        return "text-purple-400 border-purple-500/50";
      case "education":
        return "text-yellow-400 border-yellow-500/50";
      default:
        return "text-slate-400 border-slate-500/50";
    }
  };

  const getTypeLabel = (type: Experience["type"]) => {
    switch (type) {
      case "work":
        return "Trabalho";
      case "freelance":
        return "Freelance";
      case "personal":
        return "Pessoal";
      case "education":
        return "Educação";
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingParticles />

      {/* Hero Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem do Perfil */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                {/* Círculo de fundo com gradiente */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-600/20 animate-pulse"></div>

                {/* Imagem 3D */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-emerald-400/30">
                  <Image
                    src={aboutInfo.profileImage}
                    alt={`${aboutInfo.name} - ${aboutInfo.title}`}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>

            {/* Informações Pessoais */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Sobre Mim
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Olá! Sou{" "}
                  <span className="text-emerald-400 font-semibold">
                    {aboutInfo.name}
                  </span>
                  ,{" " + aboutInfo.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPinIcon className="h-5 w-5 text-emerald-400" />
                  <span>{aboutInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CalendarDaysIcon className="h-5 w-5 text-blue-400" />
                  <span>
                    {aboutInfo.status === "available"
                      ? "Disponível para projetos"
                      : aboutInfo.status === "busy"
                      ? "Ocupado"
                      : "Indisponível"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <BriefcaseIcon className="h-5 w-5 text-purple-400" />
                  <span>{aboutInfo.title}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <HeartIcon className="h-5 w-5 text-red-400" />
                  <span>
                    {aboutInfo.yearsOfExperience}+ anos de experiência
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Magnetic strength={0.2}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-mono"
                  >
                    <Link href="/projetos" className="flex items-center gap-2">
                      <BriefcaseIcon className="h-5 w-5" />
                      VER PROJETOS
                    </Link>
                  </Button>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 font-mono"
                  >
                    <Link href="/cursos" className="flex items-center gap-2">
                      <AcademicCapIcon className="h-5 w-5" />
                      VER CURSOS
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Tecnologias & Habilidades
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              Ferramentas e tecnologias que domino para criar soluções
              eficientes e modernas.
            </p>
          </div>

          {/* Filtros de Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "frontend", "backend", "database", "tools", "design"].map(
              (filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant={skillFilter === filter ? "default" : "outline"}
                  onClick={() => setSkillFilter(filter as SkillFilter)}
                  className={
                    skillFilter === filter
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "border-slate-600 text-slate-300 hover:border-emerald-500/50"
                  }
                >
                  {filter === "all"
                    ? "Todas"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              )
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <Magnetic key={skill.id} strength={0.1}>
                <div
                  className="group relative bg-slate-800/50 border border-slate-600 hover:border-emerald-500/50 rounded-lg p-4 cursor-pointer transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-400">
                      {skill.name}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-xs text-slate-400 mt-1">
                      {skill.description}
                    </p>
                  )}
                </div>
              </Magnetic>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Experiência
              </span>
            </h2>
          </div>

          {/* Filtros de Experience */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "work", "freelance", "personal", "education"].map(
              (filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant={experienceFilter === filter ? "default" : "outline"}
                  onClick={() =>
                    setExperienceFilter(filter as ExperienceFilter)
                  }
                  className={
                    experienceFilter === filter
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-slate-600 text-slate-300 hover:border-blue-500/50"
                  }
                >
                  {filter === "all"
                    ? "Todas"
                    : getTypeLabel(filter as Experience["type"])}
                </Button>
              )
            )}
          </div>

          {/* Container do carrossel com navegação */}
          <div className="relative">
            {/* Setas de navegação */}
            {shouldShowCarousel && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevExperiences}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 border-slate-600 hover:border-emerald-500/50 backdrop-blur-sm"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextExperiences}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 border-slate-600 hover:border-emerald-500/50 backdrop-blur-sm"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Grid das experiências */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-12">
              {(shouldShowCarousel
                ? visibleExperiences
                : filteredExperiences
              ).map((exp) => (
                <Magnetic key={exp.id} strength={0.1}>
                  <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={getTypeColor(exp.type)}
                          >
                            {getTypeLabel(exp.type)}
                          </Badge>
                          {exp.current && (
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                              Atual
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-slate-400">
                          {exp.period}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-emerald-400 font-medium">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-slate-300 mb-2">
                            Conquistas:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-xs text-slate-400"
                              >
                                <CheckCircleIcon className="h-3 w-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-slate-800/50 text-slate-400 border-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Magnetic>
              ))}
            </div>

            {/* Indicadores de página */}
            {shouldShowCarousel && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentExperienceIndex(index)}
                    className={`w-3 h-3 p-0 rounded-full ${
                      currentExperienceIndex === index
                        ? "bg-emerald-500 border-emerald-500"
                        : "bg-slate-700 border-slate-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Interests Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Interesses & Hobbies
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              Além do código, essas são as coisas que me inspiram e motivam.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <Magnetic key={interest.id} strength={0.15}>
                <div
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{interest.emoji}</div>
                  <span className="text-sm text-slate-300 group-hover:text-purple-400 transition-colors">
                    {interest.name}
                  </span>
                  {interest.description && (
                    <p className="text-xs text-slate-500 mt-1">
                      {interest.description}
                    </p>
                  )}
                </div>
              </Magnetic>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Vamos Trabalhar Juntos?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades. Vamos criar
              algo incrível juntos!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Magnetic strength={0.2}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-mono px-8"
                >
                  <Link
                    href="https://wa.me/5534992424044?text=Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    ENTRAR EM CONTATO
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
