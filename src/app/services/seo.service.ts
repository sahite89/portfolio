import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Translation } from '../models/portfolio.model';
import { Language } from './translation.service';

const SITE_URL = 'https://santihijazo.netlify.app';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject<Document>(DOCUMENT);

  updateSeo(lang: Language, seo: Translation['seo']): void {
    this.title.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: SITE_URL });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });

    const ogLocale = lang === 'es' ? 'es_MX' : 'en_US';
    this.meta.updateTag({ property: 'og:locale', content: ogLocale });

    this.document.documentElement.lang = lang;
  }
}
