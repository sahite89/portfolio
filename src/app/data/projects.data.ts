import { Project } from "../models/portfolio.model";

export const PROJECTS: Project[] = [
  {
    title: 'MangaTracker API',
    description:
      'API RESTful para gestión de colecciones Manga con autenticación JWT, CRUD completo y documentación con Swagger.',
    technologies: ['.NET', 'SQL Server', 'Swagger'],
    image: '',
    category: 'backend',
    demoUrl: '',
    githubUrl: 'https://github.com/sahite89/MangaTracker',
  },
  {
    title: 'Portfolio Website',
    description:
      'Portfolio personal moderno con modo oscuro, animaciones y soporte multi-idioma.',
    technologies: ['Angular', 'TypeScript'],
    image: '',
    category: 'frontend',
    demoUrl: 'https://santihijazo.netlify.app',
    githubUrl: 'https://github.com/sahite89/portfolio',
  },
];
