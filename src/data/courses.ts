import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Bacharelado em Sistemas de Informação",
    description:
      "Graduação completa em Sistemas de Informação pela Universidade de Uberaba (Uniube), abrangendo desenvolvimento de software, gestão de TI e análise de sistemas.",
    longDescription:
      "Curso superior completo em Sistemas de Informação com foco em desenvolvimento de aplicações, administração de sistemas, banco de dados, redes de computadores, inteligência artificial, engenharia de software e gestão de projetos. Formação sólida tanto em aspectos técnicos quanto em gestão empresarial de TI.",
    technologies: [
      "Programação",
      "Banco de Dados",
      "Redes",
      "Engenharia de Software",
      "Inteligência Artificial",
      "Gestão de Projetos",
      "Sistemas Operacionais",
      "Algoritmos",
      "Interface Humano-Máquina",
      "Governança Corporativa",
      "Marketing Digital",
      "Administração",
    ],
    image: "/certificates/curriculo_page-01.jpg",
    courseUrl: "https://uniube.br/cursos/graduacao/sistemas-de-informacao/",
    certificateUrl: "",
    certificateImage: [
      "/certificates/curriculo_page-01.jpg",
      "/certificates/curriculo_page-02.jpg",
    ],
    completedAt: "Concluido",
    category: "programming",
    duration: "4 anos",
    instructor: "Universidade de Uberaba - Uniube",
    createdAt: "2021-01-01",
    updatedAt: "2025-12-20",
  },
  {
    id: "2",
    title: "Prompting Responsável: Maximizar a IA no seu negócio",
    description:
      "Curso completo sobre como utilizar IA de forma responsável e eficiente em ambientes empresariais.",
    longDescription:
      "Aprenda as melhores práticas para implementar Inteligência Artificial em seu negócio de forma ética e responsável. Curso desenvolvido em parceria com Microsoft e Founderz, abordando prompting avançado, casos de uso empresariais e governança de IA.",
    technologies: [
      "IA Generativa",
      "Prompting",
      "GPT",
      "Microsoft AI",
      "Governança",
      "Ética em IA",
    ],
    image: "/certificates/certificado-santander-ia.jpg",
    courseUrl:
      "https://www.santanderopenacademy.com/pt_br/courses/prompting-responsavel-maximizar-a-ia-no-seu-negocio.html",
    certificateUrl:
      "https://santanderopenacademy.com/certificate/OA-2025-1006001813365",
    certificateImage: "/certificates/certificado-santander-ia.jpg",
    completedAt: "Outubro 2025",
    category: "business",
    duration: "8 horas",
    instructor: "Microsoft & Founderz",
    createdAt: "2025-10-06",
    updatedAt: "2025-10-06",
  },
  {
    id: "3",
    title: "Noções básicas de rede",
    description:
      "Fundamentos essenciais de redes de computadores e conceitos básicos de networking.",
    longDescription:
      "Curso introdutório sobre conceitos fundamentais de redes de computadores, cobrindo topologias, protocolos, modelos OSI e TCP/IP, configurações básicas e troubleshooting. Oferecido pela Uniube através do programa Cisco Networking Academy.",
    technologies: [
      "Networking",
      "TCP/IP",
      "OSI Model",
      "Cisco",
      "Network Protocols",
      "Troubleshooting",
    ],
    image: "/certificates/certificado-cisco-networking.jpg",
    courseUrl: "https://www.netacad.com/courses/networking/networking-basics",
    certificateImage: "/certificates/certificado-cisco-networking.jpg",
    completedAt: "Maio 2024",
    category: "programming",
    duration: "70 horas",
    instructor: "Luciano Ferreira - Uniube",
    createdAt: "2024-05-27",
    updatedAt: "2024-05-27",
  },

  {
    id: "4",
    title: "JavaScript Essentials 1 (JSE)",
    description:
      "Curso fundamental de JavaScript cobrindo conceitos essenciais da linguagem de programação mais popular para desenvolvimento web.",
    longDescription:
      "Curso completo sobre fundamentos de JavaScript, incluindo sintaxe básica, estruturas de controle, funções, objetos, manipulação do DOM e conceitos de programação orientada a objetos. Oferecido pela Cisco Networking Academy como parte do programa de desenvolvimento web.",
    technologies: [
      "JavaScript",
      "ES6+",
      "DOM Manipulation",
      "Web Development",
      "Programming Fundamentals",
      "Object-Oriented Programming",
    ],
    image: "/certificates/javascript_page-01.jpg",
    courseUrl:
      "https://www.netacad.com/courses/programming/javascript-essentials-1",
    certificateImage: "/certificates/javascript_page-01.jpg",
    completedAt: "Maio 2023",
    category: "programming",
    duration: "40 horas",
    instructor: "Lynn Bloomer - Cisco Networking Academy",
    createdAt: "2023-05-26",
    updatedAt: "2023-05-26",
  },
];

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter((course) => course.category === category);
};

export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};

export const getCourseCategories = (): string[] => {
  return Array.from(new Set(courses.map((course) => course.category)));
};
