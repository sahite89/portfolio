import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  activeCategory = signal('all');

  skills = SKILLS;

  get categories() {
    return [
      { key: 'all', label: this.t().skills.all },
      { key: 'frontend', label: this.t().skills.frontend },
      { key: 'backend', label: this.t().skills.backend },
      { key: 'databases', label: this.t().skills.databases },
      { key: 'tools', label: this.t().skills.tools },
      { key: 'architectures', label: this.t().skills.architectures },
    ];
  }

  filteredSkills = computed(() => {
    if (this.activeCategory() === 'all') return this.skills;
    return this.skills.filter((s) => s.category === this.activeCategory());
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
