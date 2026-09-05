import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;

  projects = PROJECTS;

  categoryLabel(category: Project['category']): string {
    return this.t().projects[category];
  }
}