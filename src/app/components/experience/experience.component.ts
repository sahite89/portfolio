import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../../data/experience.data';

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

  workExperience = WORK_EXPERIENCE;
  education = EDUCATION;
  certifications = CERTIFICATIONS;
}
