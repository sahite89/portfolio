import { Translation } from '../models/portfolio.model';

export const translationsEN: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    title: 'Full Stack Developer',
    subtitle: 'I build modern, scalable web applications with Angular, Node.js and cloud technologies.',
    cta: 'View projects',
  },
  about: {
    title: 'About me',
    description: [
      'I\'m a full stack developer passionate about creating unique digital experiences. With experience in Angular, Node.js and databases, I enjoy building complete applications from frontend to backend.',
      'I love learning new technologies and taking on challenges that help me grow professionally. When I\'m not coding, I\'m exploring new tools or contributing to open source projects.',
    ],
    downloadCv: 'Download CV',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Some of the work I\'ve done',
    all: 'All',
    demo: 'Demo',
    code: 'Code',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I work with',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Have a project in mind? Let\'s talk',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    success: 'Message sent successfully!',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with',
  },
};
