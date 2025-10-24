export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  courseUrl?: string;
  certificateUrl?: string;
  certificateImage?: string | string[]; // Caminho para a imagem do certificado (pode ser uma string ou array de strings)
  completedAt?: string; // Data de conclusão
  category: "programming" | "design" | "data" | "marketing" | "business";
  duration: string;
  instructor: string;
  createdAt: string;
  updatedAt: string;
}

export interface CourseFilter {
  category?: string;
  technology?: string;
}
