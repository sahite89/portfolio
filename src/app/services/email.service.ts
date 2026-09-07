import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactEmail {
  fromName: string;
  fromEmail: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private platformId = inject(PLATFORM_ID);
  private initialized = false;

  private ensureInitialized(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) {
      return;
    }

    emailjs.init(environment.emailjs.publicKey);
    this.initialized = true;
  }

  sendContactEmail(data: ContactEmail): Promise<EmailJSResponseStatus> {
    this.ensureInitialized();
    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      {
        from_name: data.fromName,
        from_email: data.fromEmail,
        message: data.message,
      }
    );
  }
}
