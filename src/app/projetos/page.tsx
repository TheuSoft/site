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
import { FloatingParticles } from "@/components/ui/floating-particles";
import { CodeBracketIcon, EyeIcon, CalendarDaysIcon } from "@/components/icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col">
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
      </div>

      <CardHeader className="pb-4 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400 flex items-center gap-1">
            <CalendarDaysIcon className="h-4 w-4" />
            {new Date(project.createdAt).toLocaleDateString("pt-BR")}
          </span>
          <Badge
            variant="outline"
            className={
              project.status === "completed"
                ? "text-emerald-400 border-emerald-500/50"
                : project.status === "in-progress"
                ? "text-blue-400 border-blue-500/50"
                : "text-yellow-400 border-yellow-500/50"
            }
          >
            {project.status === "completed"
              ? "Concluído"
              : project.status === "in-progress"
              ? "Em andamento"
              : "Planejado"}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="text-sm text-slate-400 mt-2">
          <CodeBracketIcon className="h-4 w-4 inline mr-2" />
          <span className="font-medium">Categoria:</span>{" "}
          <span className="capitalize">{project.category}</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0 mt-auto">
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
                className="flex items-center gap-2"
              >
                <EyeIcon className="h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 border-slate-600 text-slate-300 hover:border-emerald-500/50 hover:text-white"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <CodeBracketIcon className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingParticles />

      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Uma coleção dos meus trabalhos mais recentes, desde aplicações web
              modernas até sistemas complexos. Cada projeto representa um
              desafio superado e conhecimento adquirido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate-400 text-lg">
                <CodeBracketIcon className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <p>Nenhum projeto encontrado.</p>
                <p className="text-sm mt-2">
                  Novos projetos serão adicionados em breve!
                </p>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
