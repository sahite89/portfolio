import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Translation } from '../models/portfolio.model';
import { Language } from './translation.service';
import { environment } from '../../environments/environment';

const SITE_URL = environment.siteUrl;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject<Document>(DOCUMENT);

  private jsonLdId = 'person-jsonld';

  updateSeo(lang: Language, seo: Translation['seo']): void {
    this.title.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Santiago Hijazo' });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: SITE_URL });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: seo.description });

    const ogLocale = lang === 'es' ? 'es_ES' : 'en_US';
    const ogLocaleAlt = lang === 'es' ? 'en_US' : 'es_ES';
    this.meta.updateTag({ property: 'og:locale', content: ogLocale });
    this.meta.updateTag({ property: 'og:locale:alternate', content: ogLocaleAlt });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });
    this.meta.updateTag({ name: 'twitter:image:alt', content: seo.description });

    this.document.documentElement.lang = lang;

    this.upsertPersonJsonLd(seo.jobTitle, seo.description);
  }

  private upsertPersonJsonLd(jobTitle: string, description: string): void {
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Santiago Hijazo Tejada',
      alternateName: 'Santi Hijazo',
      jobTitle,
      description,
      url: SITE_URL,
      image: OG_IMAGE,
      sameAs: [
        'https://github.com/sahite89',
        'https://linkedin.com/in/santiago-hijazo',
      ],
      knowsAbout: [
        'Angular',
        'TypeScript',
        '.NET',
        'C#',
        'SQL Server',
        'JavaScript',
        'HTML',
        'SCSS',
        'REST APIs',
        'Entity Framework',
        'Clean Architecture',
        'SOLID Principles',
        'Unit Testing',
        'Cloud Computing',
      ],
      email: 'santihijazo@gmail.com',
    };

    let script = this.document.getElementById(
      this.jsonLdId,
    ) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = this.jsonLdId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(person);
  }
}
