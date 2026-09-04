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

export interface Translation {
  a11y: {
    skipToContent: string;
    menuToggle: string;
    openMenu: string;
    closeMenu: string;
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
    frontend: string;
    backend: string;
    fullstack: string;
    demo: string;
    code: string;
  };
  skills: {
    title: string;
    subtitle: string;
    all: string;
    frontend: string;
    backend: string;
    tools: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    work: string;
    education: string;
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
}
