import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  currentYear = new Date().getFullYear();
}
