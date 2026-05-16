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
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;

  timeline: TimelineItem[] = [
    {
      type: 'work',
      title: 'Desarrollador Full Stack Senior',
      organization: 'TechCorp S.A.',
      location: 'Madrid, España',
      startDate: 'Ene 2023',
      endDate: null,
      description: [
        'Lideré el desarrollo de una plataforma SaaS utilizada por más de 10.000 usuarios.',
        'Arquitectura de microservicios con Node.js y bases de datos distribuidas.',
        'Migración exitosa de Angular 15 a Angular 19 con mejora del 40% en rendimiento.',
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
    },
    {
      type: 'work',
      title: 'Desarrollador Frontend',
      organization: 'InnovaWeb',
      location: 'Barcelona, España',
      startDate: 'Mar 2021',
      endDate: 'Dic 2022',
      description: [
        'Desarrollo de dashboards interactivos para analytics empresariales.',
        'Implementación de sistema de diseño reusable con Tailwind CSS.',
        'Integración con APIs REST y GraphQL para consumo de datos en tiempo real.',
      ],
      technologies: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    },
    {
      type: 'work',
      title: 'Desarrollador Junior',
      organization: 'CodeStart',
      location: 'Valencia, España',
      startDate: 'Jun 2019',
      endDate: 'Feb 2021',
      description: [
        'Desarrollo y mantenimiento de aplicaciones web con JavaScript y frameworks modernos.',
        'Participación en migración de jQuery a Angular en aplicación legacy.',
        'Colaboración en equipo ágil con sprints quincenales y code reviews.',
      ],
      technologies: ['JavaScript', 'Angular', 'Node.js', 'PostgreSQL'],
    },
    {
      type: 'education',
      title: 'Máster en Ingeniería de Software',
      organization: 'Universidad Politécnica',
      location: 'Madrid, España',
      startDate: 'Sep 2019',
      endDate: 'Jul 2021',
      description: [
        'Especialización en arquitecturas de software, cloud computing y DevOps.',
        'Proyecto final: Sistema de recomendación basado en machine learning.',
      ],
    },
    {
      type: 'education',
      title: 'Grado en Ingeniería Informática',
      organization: 'Universidad Complutense',
      location: 'Madrid, España',
      startDate: 'Sep 2015',
      endDate: 'Jun 2019',
      description: [
        'Formación en fundamentos de programación, bases de datos y redes.',
        'Mención en Tecnologías Web y Sistemas Distribuidos.',
      ],
    },
  ];
}
