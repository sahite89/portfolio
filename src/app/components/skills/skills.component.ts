import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  activeCategory = 'all';

  skills = [
    {
      name: 'Angular',
      level: 90,
      deviconClass: 'devicon-angular-plain',
      category: 'frontend',
    },
    {
      name: 'TypeScript',
      level: 85,
      deviconClass: 'devicon-typescript-plain',
      category: 'frontend',
    },
    {
      name: 'JavaScript',
      level: 90,
      deviconClass: 'devicon-javascript-plain',
      category: 'frontend',
    },
    {
      name: 'HTML/CSS',
      level: 95,
      deviconClass: 'devicon-html5-plain devicon-css3-plain',
      category: 'frontend',
    },
    {
      name: '.Net',
      level: 85,
      deviconClass: 'devicon-dotnetcore-plain',
      category: 'backend',
    },
    {
      name: 'Entity Framework',
      level: 80,
      deviconClass: 'devicon-entityframeworkcore-plain colored',
      category: 'backend',
    },
    {
      name: 'SQL Server',
      level: 80,
      deviconClass: 'devicon-microsoftsqlserver-plain-wordmark',
      category: 'backend',
    },
    {
      name: 'PostgreSQL',
      level: 75,
      deviconClass: 'devicon-postgresql-plain',
      category: 'backend',
    },
    {
      name: 'Docker',
      level: 65,
      deviconClass: 'devicon-docker-plain',
      category: 'backend',
    },
    {
      name: 'Git',
      level: 85,
      deviconClass: 'devicon-git-plain',
      category: 'tools',
    },
    {
      name: 'VS Code',
      level: 90,
      deviconClass: 'devicon-vscode-plain',
      category: 'tools',
    },
    {
      name: 'Visual Studio',
      level: 90,
      deviconClass: 'devicon-visualstudio-plain colored',
      category: 'tools',
    },
    {
      name: 'GitLab',
      level: 60,
      deviconClass: 'devicon-gitlab-plain colored',
      category: 'tools',
    },
    {
      name: 'Jira',
      level: 70,
      deviconClass: 'devicon-jira-plain colored',
      category: 'tools',
    },
  ];

  categories = [
    { key: 'all', label: 'Todas' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Herramientas' },
  ];

  get filteredSkills() {
    if (this.activeCategory === 'all') return this.skills;
    return this.skills.filter((s) => s.category === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }
}
