import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Desenvolvimento Web Completo",
    description:
      "Curso completo de desenvolvimento web moderno com React, Next.js e TypeScript.",
    longDescription:
      "Curso abrangente que cobre desde fundamentos HTML/CSS até aplicações avançadas com React, Next.js, TypeScript e deploy. Inclui projetos práticos, boas práticas e padrões de mercado.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/placeholder-course-1.jpg",
    courseUrl: "https://example.com/curso-web",
    certificateUrl: "https://example.com/certificado-web",
    category: "programming",
    duration: "40 horas",
    instructor: "João Silva",
    createdAt: "2024-01-10",
    updatedAt: "2024-02-15",
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    description:
      "Fundamentos de design de interface e experiência do usuário com ferramentas modernas.",
    longDescription:
      "Curso focado em design de interfaces intuitivas e experiências excepcionais. Aborda princípios de design, prototipagem, usabilidade e ferramentas como Figma e Adobe XD.",
    technologies: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Design System",
      "Prototipagem",
    ],
    image: "/placeholder-course-2.jpg",
    courseUrl: "https://example.com/curso-design",
    category: "design",
    duration: "30 horas",
    instructor: "Maria Santos",
    createdAt: "2024-02-01",
    updatedAt: "2024-03-10",
  },
  {
    id: "3",
    title: "Data Science com Python",
    description:
      "Análise de dados e machine learning utilizando Python e suas bibliotecas especializadas.",
    longDescription:
      "Curso intensivo de ciência de dados com Python, cobrindo análise exploratória, visualização, machine learning e deploy de modelos. Inclui projetos reais com datasets variados.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter",
    ],
    image: "/placeholder-course-3.jpg",
    courseUrl: "https://example.com/curso-datascience",
    category: "data",
    duration: "60 horas",
    instructor: "Dr. Carlos Pereira",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },

  {
    id: "4",
    title: "Data Science com Python",
    description:
      "Análise de dados e machine learning utilizando Python e suas bibliotecas especializadas.",
    longDescription:
      "Curso intensivo de ciência de dados com Python, cobrindo análise exploratória, visualização, machine learning e deploy de modelos. Inclui projetos reais com datasets variados.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter",
    ],
    image: "/placeholder-course-3.jpg",
    courseUrl: "https://example.com/curso-datascience",
    category: "data",
    duration: "60 horas",
    instructor: "Dr. Carlos Pereira",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
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
