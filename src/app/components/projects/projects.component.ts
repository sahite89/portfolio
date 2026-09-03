import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  activeFilter = 'all';

  projects = [
    {
      title: 'MangaTracker API',
      description:
        'API RESTful para gestión de colecciones Manga con autenticación JWT, CRUD completo y documentación con Swagger.',
      technologies: ['.NET', 'SQL Server', 'Swagger'],
      image: '',
      category: 'backend',
      demoUrl: '#',
      githubUrl: 'https://github.com/sahite89/MangaTracker',
    },
    {
      title: 'Portfolio Website',
      description:
        'Portfolio personal moderno con modo oscuro, animaciones y soporte multi-idioma.',
      technologies: ['Angular', 'TypeScript'],
      image: '',
      category: 'frontend',
      demoUrl: '#',
      githubUrl: 'https://github.com/sahite89/portfolio',
    },
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => p.category === this.activeFilter);
  }

  setFilter(category: string): void {
    this.activeFilter = category;
  }
}
