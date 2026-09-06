import { TimelineItem } from '../models/portfolio.model';

export const WORK_EXPERIENCE: TimelineItem[] = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Hiberus',
    location: 'Lleida, España',
    startDate: 'dic 2024',
    endDate: null,
    description:
      'Desarrollo y mantenimiento de aplicaciones web para el sector retail, participando en proyectos full stack y trabajando en equipos Agile',
    highlights: [
      'Desarrollo y mantenimiento de APIs REST y microservicios con .NET 8',
      'Aplicación de principios DDD y Clean Architecture en el diseño de servicios',
      'Implementación de tests unitarios y mejora continua de la calidad y mantenibilidad del código',
      'Desarrollo y mantenimiento de aplicaciones web con Angular 14 y AngularJS (legacy)',
      'Integración de Entity Framework con SQL Server y optimización de consultas para mejorar el rendimiento',
    ],
    technologies: [
      '.NET',
      'Angular',
      'AngularJS',
      'Entity Framework',
      'SQL Server',
      'GIT',
    ],
  },
  {
    type: 'work',
    title: 'Backend Developer',
    organization: 'Plusfresc Supermercats',
    location: 'Lleida, España',
    startDate: 'Ago 2020',
    endDate: 'Dic 2024',
    description:
      'Desarrollo de servicios e integraciones backend para la operativa de tiendas, ecommerce y sistemas corporativos del sector retail',
    highlights: [
      'Mantenimiento y desarrollo de nuevas funcionalidades para un ERP interno destinado a la gestión de clientes, compras y operativa de tiendas',
      'Desarrollo y mantenimiento de servicios SOAP y APIs REST con .NET Framework 4.6 y 4.7',
      'Integración de servicios con proveedores y sistemas externos',
      'Desarrollo de aplicaciones web con ASP.NET MVC Razor',
      'Desarrollo y mantenimiento de soluciones sobre SQL Server y PostgreSQL',
    ],
    technologies: [
      '.NET Framework',
      'Windows Forms',
      'ASP.NET MVC',
      'SQL Server',
      'PostgreSQL',
      'SVN',
    ],
  },
  {
    type: 'work',
    title: 'Web Developer',
    organization: 'Semic',
    location: 'Lleida, España',
    startDate: 'Abr 2018',
    endDate: 'Ago 2020',
    description:
      'Desarrollo y mantenimiento de aplicaciones web para la administración pública utilizando ASP.NET y SQL Server',
    highlights: [
      'Desarrollo de aplicaciones web en ASP.NET',
      'Desarrollo y mantenimiento de aplicaciones sobre bases de datos SQL Server',
      'Mantenimiento y evolución de aplicaciones existentes, incorporando mejoras y nuevas funcionalidades',
    ],
    technologies: ['ASP.NET', 'SQL Server'],
  },
  {
    type: 'work',
    title: 'Junior Developer',
    organization: 'Handle Software Company',
    location: 'Lleida, España',
    startDate: 'Jun 2017',
    endDate: 'Mar 2018',
    description:
      'Desarrollo y mantenimiento de aplicaciones web para el sector de la construcción, centradas en la gestión e integración de modelos BIM',
    highlights: [
      'Integración y visualización de modelos AutoCAD y Revit en aplicaciones web',
      'Desarrollo y mantenimiento de funcionalidades para una plataforma orientada a la gestión de modelos BIM',
      'Colaboración en el desarrollo de nuevas funcionalidades y evolución de la plataforma',
    ],
    technologies: ['Angular', 'TypeScript', '.NET Framework', 'SQL Server'],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    type: 'education',
    title: 'Grado en Ingeniería Informática',
    organization: 'Universitat de Lleida ',
    location: 'Lleida, España',
    startDate: 'Sep 2011',
    endDate: 'Abr 2015',
    description: 'Mención en Ingeniería del Software',
  },
  {
    type: 'education',
    title: 'Tecnico Superior en Administración de Sistemas Informáticos',
    organization: 'Institut Caparrella',
    location: 'Lleida, España',
    startDate: 'Sep 2009',
    endDate: 'May 2011',
    description: '',
  },
];

export const CERTIFICATIONS: TimelineItem[] = [
  {
    type: 'certification',
    title: 'Scrum Master Certified (SMC)',
    organization: 'ScrumStudy',
    location: 'Online',
    startDate: 'Ene 2026',
    endDate: 'Ene 2029',
    description: '',
  },
];
