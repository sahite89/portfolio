import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  activeFilter = signal('all');

  projects = [
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

  filteredProjects = computed(() => {
    if (this.activeFilter() === 'all') return this.projects;
    return this.projects.filter((p) => p.category === this.activeFilter());
  });

  get filters() {
    return [
      { key: 'all', label: this.t().projects.all },
      { key: 'frontend', label: this.t().projects.frontend },
      { key: 'backend', label: this.t().projects.backend },
    ];
  }

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }
}
