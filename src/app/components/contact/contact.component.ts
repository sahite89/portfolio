import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { EmailService } from '../../services/email.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private emailService = inject(EmailService);
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  submitted = false;
  loading = false;
  error = false;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  async onSubmit(contactForm: NgForm): Promise<void> {
    if (contactForm.invalid) return;

    this.loading = true;
    this.error = false;
    this.submitted = false;

    try {
      await this.emailService.sendContactEmail({
        fromName: this.formData.name,
        fromEmail: this.formData.email,
        message: this.formData.message,
      });
      this.submitted = true;
      this.formData = { name: '', email: '', message: '' };
      contactForm.resetForm();
      setTimeout(() => (this.submitted = false), 3000);
    } catch {
      this.error = true;
      setTimeout(() => (this.error = false), 3000);
    } finally {
      this.loading = false;
    }
  }
}
