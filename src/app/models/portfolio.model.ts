export interface TimelineItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  name: string;
  deviconClass: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools' | 'architectures' | 'practices';
}

export interface Project {
  title: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  demoUrl: string;
  githubUrl: string;
}


export interface Translation {
  a11y: {
    skipToContent: string;
    menuToggle: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    logo: string;
    github: string;
    linkedin: string;
    email: string;
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
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
    stack: { dotnet: string; angular: string };
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string[];
    downloadCv: string;
    stats: StatItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    frontend: string;
    backend: string;
    fullstack: string;
    list: Project[];
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    databases: string;
    tools: string;
    architectures: string;
    practices: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    workTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    work: TimelineItem[];
    education: TimelineItem[];
    certifications: TimelineItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    error: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
  };
  footer: {
    rights: string;
  };
  seo: {
    title: string;
    description: string;
    jobTitle: string;
  };
}
