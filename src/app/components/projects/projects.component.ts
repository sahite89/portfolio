import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PROJECTS } from '../../data/projects.data';

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

  projects = PROJECTS;

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
