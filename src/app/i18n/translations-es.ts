import { Translation } from '../models/portfolio.model';

export const translationsES: Translation = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    title: 'Desarrollador Full Stack',
    subtitle:
      'Construyo aplicaciones web modernas y escalables con Angular, .NET y tecnologías cloud.',
    cta: 'Ver proyectos',
  },
  about: {
    title: 'Sobre mí',
    description: [
      'Soy desarrollador de software Full Stack especializado en .NET y Angular, con experiencia en el desarrollo y mantenimiento de aplicaciones web y soluciones corporativas dentro de entornos Agile.',
      'A lo largo de mi trayectoria he trabajado en proyectos relacionados con retail, e-commerce y sistemas internos, participando en diferentes partes del desarrollo, desde APIs y servicios backend hasta aplicaciones frontend, bases de datos e integración entre sistemas. Me interesa especialmente construir soluciones claras, mantenibles y escalables, cuidando tanto la calidad del código como la evolución del proyecto.',
      'Me motiva seguir aprendiendo, afrontar nuevos retos técnicos y explorar nuevas tecnologías que me permitan continuar creciendo profesionalmente y aportar valor en cada proyecto.',
    ],
    downloadCv: 'Descargar CV',
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Algunos de los trabajos que he realizado',
    all: 'Todos',
    demo: 'Demo',
    code: 'Código',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Tecnologías y herramientas con las que trabajo',
  },
  experience: {
    title: 'Experiencia y Formación',
    subtitle: 'Mi trayectoria profesional y académica',
    present: 'Presente',
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? Hablemos',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar mensaje',
    success: '¡Mensaje enviado con éxito!',
    error: 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.'
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Construido con',
  },
};
