import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  translationService = inject(TranslationService);
  isMenuOpen = false;
  activeSection = 'home';

  t = this.translationService.translate;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(lang: Language): void {
    this.translationService.switchLanguage(lang);
  }

  scrollTo(section: string): void {
    this.activeSection = section;
    this.isMenuOpen = false;
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
