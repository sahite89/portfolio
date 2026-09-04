import { Injectable, inject, signal } from '@angular/core';
import { Translation } from '../models/portfolio.model';
import { translationsES } from '../i18n/translations-es';
import { translationsEN } from '../i18n/translations-en';
import { SeoService } from './seo.service';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private seoService = inject(SeoService);
  private currentLang = signal<Language>('es');
  private translations: Record<Language, Translation> = {
    es: translationsES,
    en: translationsEN,
  };

  translate = signal<Translation>(translationsES);

  constructor() {
    this.seoService.updateSeo('es', translationsES.seo);
  }

  get currentLanguage(): Language {
    return this.currentLang();
  }

  switchLanguage(lang: Language): void {
    this.currentLang.set(lang);
    this.translate.set(this.translations[lang]);
    this.seoService.updateSeo(lang, this.translations[lang].seo);
  }
}
