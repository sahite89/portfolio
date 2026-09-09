import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { TranslationService } from '../../services/translation.service';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render work, education and certification items', () => {
    expect(component.workExperience().length).toBeGreaterThan(0);
    expect(component.education().length).toBeGreaterThan(0);
    expect(component.certifications().length).toBeGreaterThan(0);
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain('Experiencia');
  });

  it('should render the three column headers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = compiled.querySelectorAll('.timeline-column-title');
    expect(headers.length).toBe(3);
    expect(headers[0]?.textContent).toContain('Experiencia laboral');
    expect(headers[1]?.textContent).toContain('Formación académica');
    expect(headers[2]?.textContent).toContain('Certificaciones');
  });

  it('should render translated content in English after switching language', () => {
    const service = TestBed.inject(TranslationService);
    service.switchLanguage('en');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = compiled.querySelectorAll('.timeline-column-title');
    expect(headers[0]?.textContent).toContain('Professional Experience');
    expect(headers[1]?.textContent).toContain('Education');
    const org = compiled.querySelector('.timeline-org');
    expect(org?.textContent).toContain('Lleida, Spain');
  });
});
