import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  activeFilter = 'all';

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      image: '',
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Manager API',
      description: 'API RESTful para gestión de tareas con autenticación JWT, CRUD completo y documentación con Swagger.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
      image: '',
      category: 'backend',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo con gráficos en tiempo real, filtros dinámicos y exportación de datos.',
      technologies: ['Angular', 'Chart.js', 'TypeScript', 'Tailwind'],
      image: '',
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media App',
      description: 'Red social básica con publicaciones, comentarios, likes y perfiles de usuario.',
      technologies: ['React', 'Firebase', 'Material UI', 'Cloud Functions'],
      image: '',
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'CLI Tool',
      description: 'Herramienta de línea de comandos para automatizar tareas de desarrollo y despliegue.',
      technologies: ['Node.js', 'Commander.js', 'Chalk', 'Docker'],
      image: '',
      category: 'backend',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Portfolio personal moderno con modo oscuro, animaciones y soporte multi-idioma.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      image: '',
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(category: string): void {
    this.activeFilter = category;
  }
}
