import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { DestroyRef } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  translationService = inject(TranslationService);
  t = this.translationService.translate;
  private el = inject(ElementRef<HTMLElement>);
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  animatedValues = signal<number[]>([]);
  readonly Infinity = Infinity;

  private observer: IntersectionObserver | null = null;
  private animationFrame: number | null = null;
  private statsAnimated = false;

  ngAfterViewInit(): void {
    const stats = this.t().about.stats;
    this.animatedValues.set(stats.map((s) => (Number.isFinite(s.value) ? 0 : s.value)));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.animatedValues.set(stats.map((s) => s.value));
      return;
    }

    const statsEl = this.el.nativeElement.querySelector('.about-stats');
    if (!statsEl) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true;
            this.animateCounters();
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(statsEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private animateCounters(): void {
    const stats = this.t().about.stats;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.animatedValues.set(
        stats.map((s) => (Number.isFinite(s.value) ? Math.round(s.value * eased) : s.value))
      );
      this.cdr.detectChanges();

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(step);
      }
    };

    this.animationFrame = requestAnimationFrame(step);
  }
}
