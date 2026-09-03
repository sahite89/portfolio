import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TimelineItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective, NgClass],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;

  timeline: TimelineItem[] = [
    {
      type: 'education',
      title: 'Scrum Master Certified (SMC)',
      organization: 'ScrumStudy',
      location: 'Online',
      startDate: 'Ene 2026',
      endDate: 'Ene 2029',
      description: [],
    },
    {
      type: 'work',
      title: 'Desarrollador Full Stack .NET & Angular',
      organization: 'Hiberus',
      location: 'Lleida, España',
      startDate: 'dic 2024',
      endDate: null,
      description: [
        'Desarrollo y mantenimiento de APIs REST y microservicios con .NET 8 ',
        'Aplicación de principios DDD y Clean Architecture',
        'Implementación de tests unitarios y mejora continua de servicios ',
        'Desarrollo y mantenimiento de aplicaciones con Angular 14 y AngularJS (legacy)',
        'Desarrollo de consultas y soporte a la lógica de negocio con SQL Server',
        'Trabajo bajo metodología Scrum',
        'Uso de Git y Jira para gestión de proyectos y control de versiones',
      ],
      technologies: [
        'Angular',
        'AngularJS',
        '.NET Core',
        'SQL Server',
        'GIT',
        'Jira',
      ],
    },
    {
      type: 'work',
      title: 'Desarrollador Backend .NET',
      organization: 'Plusfresc Supermercats',
      location: 'Lleida, España',
      startDate: 'Ago 2020',
      endDate: 'Dic 2024',
      description: [
        'Implementación de proyecto interno para la operativa de tiendas, ecommerce y sistemas corporativos del sector retail',
        'Desarrollo y mantenimiento de servicios SOAP y APIs REST con .NET Framework 4.6 ',
        'Integración con proveedores y sistemas externos',
        'Desarrollo de aplicaciones web con ASP.NET MVC Razor',
        'Trabajo con SQL Server y PostgreSQL',
        'Uso de SVN y Asana para gestión de proyectos y control de versiones',
      ],
      technologies: [
        'Angular',
        '.NET Framework',
        'SQL Server',
        'PostgreSQL',
        'ASP.NET MVC',
        'SVN',
        'Asana',
      ],
    },
    {
      type: 'work',
      title: 'Desarrollador Web',
      organization: 'Semic',
      location: 'Lleida, España',
      startDate: 'Abr 2018',
      endDate: 'Ago 2020',
      description: [
        'Proyectos para la administración pública',
        'Desarrollo de aplicaciones web en ASP.NET',
        'Trabajo con bases de datos relacionales en SQL Server',
        'Mantenimiento y mejora de aplicaciones existentes.',
      ],
      technologies: ['ASP.NET', 'SQL Server'],
    },
    {
      type: 'work',
      title: 'Desarrollador Junior',
      organization: 'Handle Software Company',
      location: 'Lleida, España',
      startDate: 'Jun 2017',
      endDate: 'Mar 2018',
      description: [
        'Proyecto orientado en el sector de la construcción y gestión de modelos BIM.',
        'Desarrollo y mantenimiento de aplicaciones web para la gestión de modelos BIM.',
        'Integración y visualización de modelos AutoCAD y Revit en la web.',
        'Soporte y colaboración en el desarrollo de nuevas funcionalidades para la plataforma.',
      ],
      technologies: ['TypeScript', 'Angular', '.NET Framework', 'SQLServer'],
    },
    {
      type: 'education',
      title: 'Grado en Ingeniería Informática',
      organization: 'Universitat de Lleida ',
      location: 'Lleida, España',
      startDate: 'Sep 2011',
      endDate: 'Abr 2015',
      description: ['Mención en Ingeniería del Software'],
    },
    {
      type: 'education',
      title: 'Grado Superior en Adminstración de Sistemas Informáticos',
      organization: 'Institut Caparrella',
      location: 'Lleida, España',
      startDate: 'Sep 2009',
      endDate: 'May 2011',
      description: [],
    },
  ];
}
