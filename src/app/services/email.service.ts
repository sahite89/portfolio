import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactEmail {
  fromName: string;
  fromEmail: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor() {
    emailjs.init(environment.emailjs.publicKey);
  }

  sendContactEmail(data: ContactEmail): Promise<EmailJSResponseStatus> {
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
