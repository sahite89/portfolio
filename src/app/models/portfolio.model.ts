export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string[];
    downloadCv: string;
  };
  projects: {
    title: string;
    subtitle: string;
    all: string;
    demo: string;
    code: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
