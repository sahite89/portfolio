import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;

  workExperience = computed(() => this.t().experience.work);
  education = computed(() => this.t().experience.education);
  certifications = computed(() => this.t().experience.certifications);
}
