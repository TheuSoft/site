import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
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
    id: "2",
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
