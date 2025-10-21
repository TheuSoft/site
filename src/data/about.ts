import { Skill, Experience, Interest, AboutInfo } from "@/types/about";

export const aboutInfo: AboutInfo = {
  name: "Matheus Carvalho",
  title: "Analista de Sistemas & Desenvolvedor",
  location: "Uberaba - MG - Brasil",
  bio: "Analista de Sistemas com experiência em desenvolvimento de aplicações web, integração de sistemas e infraestrutura de TI. Atuo desde a análise de requisitos, arquitetura de soluções, implementação e manutenção, até o suporte técnico e automação de processos. Apaixonado por tecnologia, busco unir visão técnica e estratégica para entregar soluções robustas, seguras e escaláveis.",
  profileImage: "/profile/mascote.png",
  status: "available",
  yearsOfExperience: 3,
};

export const skills: Skill[] = [
  // Frontend
  {
    id: "1",
    name: "Next.js",
    category: "frontend",
    description: "Framework React para produção",
  },
  {
    id: "2",
    name: "TypeScript",
    category: "frontend",
    description: "JavaScript tipado",
  },
  {
    id: "3",
    name: "JavaScript",
    category: "frontend",
    description: "Linguagem de programação web",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    category: "frontend",
    description: "Framework CSS utility-first",
  },
  {
    id: "5",
    name: "Framer Motion",
    category: "frontend",
    description: "Biblioteca de animações",
  },

  // Backend
  {
    id: "7",
    name: "Node.js",
    category: "backend",
    description: "Runtime JavaScript para servidor",
  },

  // Database
  {
    id: "10",
    name: "PostgreSQL",
    category: "database",
    description: "Banco relacional robusto",
  },
  {
    id: "11",
    name: "MySQL",
    category: "database",
    description: "Sistema de gerenciamento de banco",
  },
  {
    id: "13",
    name: "Drizzle ORM",
    category: "database",
    description: "ORM TypeScript-first",
  },

  // Tools
  {
    id: "14",
    name: "Git",
    category: "tools",
    description: "Controle de versão",
  },
  {
    id: "17",
    name: "Vercel",
    category: "tools",
    description: "Plataforma de deploy",
  },

  // Design
  {
    id: "18",
    name: "Canva",
    category: "design",
    description: "Design de interfaces",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: " Administrativo e Suporte Técnico ",
    company: "Estágio",
    type: "work",
    period: "2024 - Presente",
    startDate: "2024-04-01",
    description:
      "Experiência em suporte administrativo e técnico, atuando na organização e gestão de documentos físicos e digitais, bem como na elaboração e atualização de planilhas, relatórios e documentos administrativos. Participação ativa na organização de eventos, reuniões e treinamentos, oferecendo suporte técnico e operacional às equipes. Experiência também no suporte a máquinas e redes de computadores, incluindo manutenção preventiva, configuração e resolução de problemas, contribuindo para a eficiência dos processos e o bom funcionamento das operações internas.",
    technologies: ["Redes", "Administrativo", "Manutenção de Computadores"],
    achievements: [
      "Suporte administrativo e técnico eficiente",
      "Planilhas e relatórios organizados",
      "Prestações de contas administrativas realizadas",
    ],
    current: true,
  },
  {
    id: "2",
    title: "Técnico em Informática",
    company: "Freelance",
    type: "freelance",
    period: "2019 - Presente",
    startDate: "2019-06-01",
    description:
      "Experiência em formatação e instalação de softwares, manutenção preventiva de computadores, além de reparos e substituição de peças. Realização de limpeza e otimização de sistemas para melhor desempenho, garantindo suporte técnico eficiente para clientes.",
    technologies: ["Hardware", "Redes", "Software"],
    achievements: [
      "Manutenção preventiva eficaz",
      "Suporte técnico confiável",
      "Satisfação do cliente elevada",
    ],
    current: true,
  },
  {
    id: "3",
    title: "Magia PetShop",
    company: "Sócio Proprietario",
    type: "work",
    period: "2020 - 2023",
    startDate: "2020-03-01",
    endDate: "2023-08-01",
    description:
      "Atuação estratégica na gestão de compras e vendas, controle de gastos e planejamento financeiro. Responsável pelo agendamento de serviços, atendimento ao cliente e banhista.",
    technologies: ["Compras", "Atendimento", "Regras de Negócio"],
    achievements: [
      "Gestao financeira eficiente",
      "Atendimento ao cliente de qualidade",
      "Registro e controle de caixa",
    ],
  },
  {
    id: "4",
    title: "Loja E-commerce",
    company: "Proprietario",
    type: "work",
    period: "2019 - 2023",
    startDate: "2019-01-01",
    endDate: "2023-04-01",
    description:
      "Experiência na gestão de loja virtual especializada em produtos importados, com atuação em plataformas como Mercado Livre, Shopee e WhatsApp. Responsável por estratégias de precificação, atendimento ao cliente, logística e marketing digital.",
    technologies: ["Vendas", "Compras", "Comunicação"],
    achievements: [
      "Vendas online",
      "Atendimento ao cliente",
      "Compromisso e organização",
    ],
  },
  {
    id: "5",
    title: "Sistemas de Informação",
    company: "Estudante",
    type: "education",
    period: "2021 - 2025",
    startDate: "2021-01-01",
    endDate: "2025-04-01",
    description:
      "Curso que integra conhecimentos de Tecnologia da Informação e Administração, capacitando para o desenvolvimento, gestão e otimização de sistemas e processos organizacionais. A formação abrange áreas como programação, bancos de dados, redes de computadores, engenharia de software, segurança da informação, gestão de projetos e inteligência artificial, preparando o profissional para atuar no planejamento, desenvolvimento e gerenciamento de soluções tecnológicas em diversos setores empresariais.",
    technologies: [
      "Networking",
      "Redes",
      "Desenvolvimento de Sistemas",
      "Administração",
      "TI",
    ],
    achievements: [
      "Gestão de projetos de TI",
      "Networking",
      "Protocolos de comunicação",
    ],
  },
];

export const interests: Interest[] = [
  {
    id: "1",
    name: "Tecnologias Emergentes",
    emoji: "🚀",
    category: "tech",
    description: "IA, Web3, IoT",
  },
  {
    id: "2",
    name: "Gaming & Game Dev",
    emoji: "🎮",
    category: "entertainment",
    description: "Jogos e desenvolvimento",
  },

  {
    id: "3",
    name: "UI/UX Design",
    emoji: "🎨",
    category: "creative",
    description: "Design de experiências",
  },
  {
    id: "4",
    name: "Inteligência Artificial",
    emoji: "🤖",
    category: "tech",
    description: "Machine Learning, LLMs",
  },

  {
    id: "5",
    name: "Aprendizado Contínuo",
    emoji: "📚",
    category: "learning",
    description: "Sempre estudando",
  },
];

// Funções utilitárias
export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

export const getExperiencesByType = (
  type: Experience["type"]
): Experience[] => {
  return experiences.filter((exp) => exp.type === type);
};

export const getCurrentExperiences = (): Experience[] => {
  return experiences.filter((exp) => exp.current === true);
};

export const getExperiencesByDate = (): Experience[] => {
  return experiences.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
};

export const getInterestsByCategory = (
  category: Interest["category"]
): Interest[] => {
  return interests.filter((interest) => interest.category === category);
};
