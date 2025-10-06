export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  courseUrl?: string;
  certificateUrl?: string;
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
