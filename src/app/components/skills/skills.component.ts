import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SKILLS } from '../../data/skills.data';

type CategoryKey = 'frontend' | 'backend' | 'databases' | 'tools' | 'architectures' | 'practices';

interface SkillGroup {
  key: CategoryKey;
  label: string;
  iconClass: string;
  skills: (typeof SKILLS)[number][];
}

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
  skills = SKILLS;

  private categoryMeta: { key: CategoryKey; iconClass: string }[] = [
    { key: 'frontend', iconClass: 'devicon-html5-plain' },
    { key: 'backend', iconClass: 'devicon-dot-net-plain' },
    { key: 'databases', iconClass: 'devicon-azuresqldatabase-plain' },
    { key: 'tools', iconClass: 'devicon-git-plain' },
    { key: 'architectures', iconClass: 'devicon-gitbook-original' },
    { key: 'practices', iconClass: 'devicon-jira-plain' },
  ];

  skillsByCategory = computed<SkillGroup[]>(() => {
    const t = this.t();
    return this.categoryMeta.map((meta) => ({
      key: meta.key,
      label: t.skills[meta.key],
      iconClass: meta.iconClass,
      skills: this.skills.filter((s) => s.category === meta.key),
    }));
  });
}
