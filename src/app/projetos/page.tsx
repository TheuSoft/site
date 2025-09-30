"use client";

import Link from "next/link";
import { useState } from "react";
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
} from "@/providers/motion-provider";
import { projects } from "@/data/projects";
import { cn } from "@/helpers/cn";
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
} from "@/components/icons";

const categories = [
  { id: "all", name: "Todos", icon: GlobeAltIcon },
  { id: "web", name: "Web", icon: GlobeAltIcon },
  { id: "mobile", name: "Mobile", icon: DevicePhoneMobileIcon },
  { id: "desktop", name: "Desktop", icon: ComputerDesktopIcon },
  { id: "api", name: "API", icon: ServerIcon },
];

const statusColors = {
  completed: "bg-emerald-600/20 text-emerald-400",
  "in-progress": "bg-yellow-600/20 text-yellow-400",
  planned: "bg-blue-600/20 text-blue-400",
};

const statusLabels = {
  completed: "Concluído",
  "in-progress": "Em Progresso",
  planned: "Planejado",
};

export default function ProjetosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section id="projetos-hero" className="text-center">
        <MotionDiv variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">Meus Projetos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma coleção dos meus trabalhos mais significativos, desde aplicações
            web até soluções mobile e APIs robustas.
          </p>
        </MotionDiv>
      </Section>

      {/* Filter Section */}
      <Section id="filter" className="py-8">
        <MotionDiv variants={fadeInUp}>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedCategory === category.id
                      ? "bg-emerald-600 text-white"
                      : "bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-emerald-400"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </MotionDiv>
      </Section>

      {/* Projects Grid */}
      <Section id="projects-grid">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <MotionDiv key={project.id} variants={fadeInUp}>
              <Card className="bg-dark-800 border-dark-700 hover:border-emerald-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/10 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-white text-lg">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-emerald-600/20 text-emerald-400 text-xs"
                      >
                        {project.category}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={cn("text-xs", statusColors[project.status])}
                      >
                        {statusLabels[project.status]}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-400 line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-dark-600 text-gray-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-dark-600 text-gray-400"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Long Description */}
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-6">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-emerald-600 text-emerald-400 hover:bg-emerald-600/10"
                      >
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full"
                        >
                          <EyeIcon className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-400 hover:bg-gray-600/10"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full"
                        >
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                    )}
                  </div>

                  {/* Project Dates */}
                  <div className="mt-4 pt-4 border-t border-dark-700">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>
                        Criado:{" "}
                        {new Date(project.createdAt).toLocaleDateString(
                          "pt-BR"
                        )}
                      </span>
                      <span>
                        Atualizado:{" "}
                        {new Date(project.updatedAt).toLocaleDateString(
                          "pt-BR"
                        )}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>

        {filteredProjects.length === 0 && (
          <MotionDiv variants={fadeInUp} className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </MotionDiv>
        )}
      </Section>

      {/* Stats Section */}
      <Section
        id="stats"
        className="bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 border-y border-emerald-600/10"
      >
        <MotionDiv variants={fadeInUp}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-400">Total de Projetos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <div className="text-gray-400">Concluídos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {projects.filter((p) => p.status === "in-progress").length}
              </div>
              <div className="text-gray-400">Em Progresso</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}
              </div>
              <div className="text-gray-400">Tecnologias</div>
            </div>
          </div>
        </MotionDiv>
      </Section>
    </main>
  );
}
