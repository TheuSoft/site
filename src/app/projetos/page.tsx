"use client";

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
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { MotionDiv } from "@/providers/motion-provider";
import { FloatingParticles } from "@/components/ui/floating-particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "in-progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    planned: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  const categoryColors = {
    web: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    mobile: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    desktop: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    api: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  };

  return (
    <MotionDiv variants={itemVariants}>
      <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
        <div className="relative overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          {project.featured && (
            <Badge className="absolute top-3 left-3 bg-emerald-500/90 text-white border-emerald-400">
              Destaque
            </Badge>
          )}
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge className={`text-xs ${statusColors[project.status]}`}>
              {project.status === "completed" && "Concluído"}
              {project.status === "in-progress" && "Em Andamento"}
              {project.status === "planned" && "Planejado"}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <Badge className={`text-xs ${categoryColors[project.category]}`}>
              {project.category === "web" && "Web"}
              {project.category === "mobile" && "Mobile"}
              {project.category === "desktop" && "Desktop"}
              {project.category === "api" && "API"}
            </Badge>
            <span className="text-sm text-slate-400">
              {new Date(project.createdAt).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-slate-300 text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-slate-800/50 text-slate-300 border-slate-600 hover:border-emerald-500/50"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge
                variant="outline"
                className="text-xs bg-slate-800/50 text-slate-400 border-slate-600"
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            {project.demoUrl && (
              <Button
                asChild
                size="sm"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500"
              >
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-emerald-500/50"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative pt-16 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Hero Section */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-blue-400/5 to-purple-400/5" />
        <div className="text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Meus Projetos
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Portfólio de projetos desenvolvidos com tecnologias modernas. Cada
              projeto representa um desafio superado e uma solução criativa.
            </p>
          </MotionDiv>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="py-16">
        <div className="mb-8">
          <p className="text-slate-400">
            {projects.length} projeto{projects.length !== 1 ? "s" : ""}{" "}
            disponível{projects.length !== 1 ? "eis" : ""}
          </p>
        </div>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </MotionDiv>
      </Section>
    </main>
  );
}
