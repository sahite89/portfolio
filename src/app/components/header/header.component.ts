import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translationService = inject(TranslationService);
  router = inject(Router);
  isMenuOpen = signal(false);
  activeSection = signal('home');

  t = this.translationService.translate;

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  switchLanguage(lang: Language): void {
    this.translationService.switchLanguage(lang);
  }

  scrollTo(section: string): void {
    this.activeSection.set(section);
    this.isMenuOpen.set(false);
    this.router.navigate([], { fragment: section, replaceUrl: true });
  }
}
