export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'api';
  status: 'completed' | 'in-progress' | 'planned';
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFilter {
  category?: string;
  technology?: string;
  status?: string;
}

export interface ProjectStats {
  total: number;
  completed: number;
  inProgress: number;
  planned: number;
}