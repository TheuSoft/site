import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com Next.js, Stripe e PostgreSQL",
    longDescription:
      "Uma plataforma de e-commerce moderna e responsiva construída com Next.js 14, integrando Stripe para pagamentos seguros, PostgreSQL para gerenciamento de dados, e um painel administrativo completo. Features incluem autenticação, carrinho de compras, sistema de avaliações e dashboard de vendas.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Drizzle ORM",
    ],
    image: "/placeholder-project-1.jpg",
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce-platform",
    featured: true,
    category: "web",
    status: "completed",
    createdAt: "2024-01-15",
    updatedAt: "2024-03-20",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com React Native e Node.js",
    longDescription:
      "Um aplicativo móvel multiplataforma para gerenciamento de tarefas e produtividade, desenvolvido com React Native e Expo. Backend construído com Node.js e MongoDB, incluindo sincronização em tempo real, notificações push e colaboração em equipe.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Redux",
    ],
    image: "/placeholder-project-2.jpg",
    demoUrl: "https://expo.dev/@usuario/task-manager",
    githubUrl: "https://github.com/usuario/task-management-app",
    featured: true,
    category: "mobile",
    status: "completed",
    createdAt: "2024-02-10",
    updatedAt: "2024-04-05",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "Gerador de conteúdo com IA usando OpenAI GPT-4 e React",
    longDescription:
      "Uma aplicação web que utiliza a API do OpenAI GPT-4 para gerar conteúdo automaticamente. Interface moderna com React e TypeScript, sistema de templates personalizáveis, histórico de gerações e integração com diferentes tipos de conteúdo (blogs, social media, emails).",
    technologies: [
      "React",
      "TypeScript",
      "OpenAI API",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "/placeholder-project-3.jpg",
    demoUrl: "https://ai-content-gen.vercel.app",
    githubUrl: "https://github.com/usuario/ai-content-generator",
    featured: false,
    category: "web",
    status: "in-progress",
    createdAt: "2024-03-01",
    updatedAt: "2024-04-15",
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description: "Dashboard de analytics em tempo real com D3.js e WebSockets",
    longDescription:
      "Um dashboard interativo para visualização de dados em tempo real, construído com D3.js para gráficos avançados e WebSockets para atualizações live. Inclui múltiplos tipos de visualizações, filtros dinâmicos e exportação de relatórios.",
    technologies: [
      "Vue.js",
      "D3.js",
      "WebSockets",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
    image: "/placeholder-project-4.jpg",
    demoUrl: "https://analytics-dash.netlify.app",
    githubUrl: "https://github.com/usuario/analytics-dashboard",
    featured: true,
    category: "web",
    status: "completed",
    createdAt: "2024-01-20",
    updatedAt: "2024-03-10",
  },
  {
    id: "5",
    title: "Blockchain Wallet",
    description: "Carteira digital para criptomoedas com Electron e Web3",
    longDescription:
      "Uma carteira desktop segura para gerenciamento de criptomoedas, desenvolvida com Electron e integração Web3. Suporte a múltiplas blockchains, interface intuitiva, backup seguro de chaves privadas e histórico de transações.",
    technologies: [
      "Electron",
      "React",
      "Web3.js",
      "TypeScript",
      "Solidity",
      "IPFS",
    ],
    image: "/placeholder-project-5.jpg",
    githubUrl: "https://github.com/usuario/blockchain-wallet",
    featured: false,
    category: "desktop",
    status: "planned",
    createdAt: "2024-04-01",
    updatedAt: "2024-04-01",
  },
  {
    id: "6",
    title: "REST API Gateway",
    description: "Gateway de API escalável com autenticação e rate limiting",
    longDescription:
      "Um gateway de API robusto e escalável construído com Node.js e Express, incluindo autenticação JWT, rate limiting, cache Redis, monitoramento de saúde e documentação automática com Swagger.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Swagger", "Docker"],
    image: "/placeholder-project-6.jpg",
    demoUrl: "https://api-gateway-docs.herokuapp.com",
    githubUrl: "https://github.com/usuario/api-gateway",
    featured: false,
    category: "api",
    status: "completed",
    createdAt: "2024-02-15",
    updatedAt: "2024-03-30",
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
