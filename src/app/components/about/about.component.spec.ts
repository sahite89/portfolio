import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain('Sobre mí');
  });

  it('should render download CV link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a[download]');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('cv-santiago-lopez.pdf');
  });
});
