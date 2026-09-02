import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translationService = inject(TranslationService);
  router = inject(Router);
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
    this.router.navigate([], { fragment: section, replaceUrl: true });
  }
}
