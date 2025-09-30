import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "SyncLiva Platform",
    description:
      "Sistema moderno de gestão clínica com agendamentos, controle de pacientes e dashboard administrativo completo.",
    longDescription:
      "Plataforma web completa desenvolvida para otimizar a gestão de clínicas médicas. Inclui sistema de agendamentos inteligente, cadastro e histórico de pacientes, controle de profissionais, relatórios financeiros e dashboard analítico em tempo real.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Drizzle ORM",
      "Vercel",
    ],
    image: "/placeholder-project-1.jpg",
    demoUrl: "https://syncliva.vercel.app/",
    githubUrl: "https://github.com/TheuSoft/syncliva",
    featured: true,
    category: "web",
    status: "completed",
    createdAt: "2024-01-15",
    updatedAt: "2024-03-20",
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByStatus = (status: string): Project[] => {
  return projects.filter((project) => project.status === status);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
