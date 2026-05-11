import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  submitted = false;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(): void {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', message: '' };
    }, 3000);
  }
}
