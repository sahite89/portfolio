import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  activeCategory = 'all';

  skills = [
    { name: 'Angular', level: 90, icon: 'code', category: 'frontend' },
    { name: 'TypeScript', level: 85, icon: 'code', category: 'frontend' },
    { name: 'JavaScript', level: 90, icon: 'code', category: 'frontend' },
    { name: 'React', level: 75, icon: 'code', category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, icon: 'style', category: 'frontend' },
    { name: 'HTML/CSS', level: 95, icon: 'style', category: 'frontend' },
    { name: 'Node.js', level: 85, icon: 'server', category: 'backend' },
    { name: 'Express', level: 80, icon: 'server', category: 'backend' },
    { name: 'Python', level: 70, icon: 'server', category: 'backend' },
    { name: 'PostgreSQL', level: 75, icon: 'database', category: 'backend' },
    { name: 'MongoDB', level: 80, icon: 'database', category: 'backend' },
    { name: 'Docker', level: 65, icon: 'devops', category: 'backend' },
    { name: 'Git', level: 85, icon: 'tools', category: 'tools' },
    { name: 'VS Code', level: 90, icon: 'tools', category: 'tools' },
    { name: 'Figma', level: 60, icon: 'design', category: 'tools' },
  ];

  categories = [
    { key: 'all', label: 'Todas' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Herramientas' },
  ];

  get filteredSkills() {
    if (this.activeCategory === 'all') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }
}
