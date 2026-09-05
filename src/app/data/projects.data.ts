import { Project } from "../models/portfolio.model";

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'Portafolio moderno diseñado para mostrar proyectos, habilidades técnicas y trayectoria profesional',
    highlights: [
      'Interfaz bilingüe (español e inglés) con cambio dinámico de idioma.',
      'Modo oscuro y animaciones de desplazamiento con soporte para reduced motion',
      'Diseño responsive optimizado para escritorio, tablet y dispositivos móviles',
      //'Optimizado para SEO con datos estructurados y Open Graph.',
    ],
    technologies: ['Angular', 'TypeScript', 'SCSS', 'i18n'],
    image: '/projects/portfolio.webp',
    category: 'frontend',
    demoUrl: 'https://santihijazo.netlify.app',
    githubUrl: 'https://github.com/sahite89/portfolio',
  },
  {
    title: 'MangaTracker API',
    description: 'Backend para una aplicación de seguimiento de manga.',
    highlights: [
      'Arquitectura limpia con una clara separación de responsabilidades para facilitar el mantenimiento y la escalabilidad',
      'Autenticación y autorización mediante JWT para un acceso seguro a la API',
      'Documentación interactiva de la API mediante Swagger/OpenAPI',
    ],
    technologies: ['.NET', 'REST API', 'SQL Server', 'Clean Architecture'],
    image: '/projects/MangaTrackerAPI.webp',
    category: 'backend',
    demoUrl: '',
    githubUrl: 'https://github.com/sahite89/MangaTracker',
  },
];
