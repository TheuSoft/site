export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "design" | "mobile";
  icon?: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: "work" | "freelance" | "personal" | "education";
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  location?: string;
  current?: boolean;
}

export interface Interest {
  id: string;
  name: string;
  emoji: string;
  category: "tech" | "creative" | "entertainment" | "sports" | "learning";
  description?: string;
}

export interface AboutInfo {
  name: string;
  title: string;
  location: string;
  email?: string;
  bio: string;
  profileImage: string;
  status: "available" | "busy" | "not-available";
  yearsOfExperience: number;
}
