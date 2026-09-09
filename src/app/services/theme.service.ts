import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

const THEME_COLORS: Record<Theme, string> = {
  dark: '#030712',
  light: '#f9fafb',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private currentTheme = signal<Theme>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = this.readSavedTheme();
      this.applyTheme(saved);
    }
  }

  get theme(): Theme {
    return this.currentTheme();
  }

  toggleTheme(): void {
    this.switchTheme(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  switchTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentTheme.set(theme);
    this.applyTheme(theme);
    this.persistTheme(theme);
  }

  private readSavedTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'dark';
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'light' ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentTheme.set(theme);
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', THEME_COLORS[theme]);
    }
  }

  private persistTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }
}
