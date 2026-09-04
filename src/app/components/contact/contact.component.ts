import { Component, ChangeDetectionStrategy, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { EmailService } from '../../services/email.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private emailService = inject(EmailService);
  private destroyRef = inject(DestroyRef);
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  submitted = signal(false);
  loading = signal(false);
  error = signal(false);

  private successTimeout: ReturnType<typeof setTimeout> | null = null;
  private errorTimeout: ReturnType<typeof setTimeout> | null = null;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.successTimeout) clearTimeout(this.successTimeout);
      if (this.errorTimeout) clearTimeout(this.errorTimeout);
    });
  }

  async onSubmit(contactForm: NgForm): Promise<void> {
    if (contactForm.invalid) return;

    this.loading.set(true);
    this.error.set(false);
    this.submitted.set(false);

    try {
      await this.emailService.sendContactEmail({
        fromName: this.formData.name,
        fromEmail: this.formData.email,
        message: this.formData.message,
      });
      this.submitted.set(true);
      this.formData = { name: '', email: '', message: '' };
      contactForm.resetForm();
      this.successTimeout = setTimeout(() => this.submitted.set(false), 3000);
    } catch {
      this.error.set(true);
      this.errorTimeout = setTimeout(() => this.error.set(false), 3000);
    } finally {
      this.loading.set(false);
    }
  }
}
