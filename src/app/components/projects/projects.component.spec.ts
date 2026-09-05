import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all projects', () => {
    expect(component.projects.length).toBeGreaterThan(0);
  });

  it('should render project cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('[class*="projects-card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should render highlight lists for projects that define them', () => {
    const withHighlights = component.projects.find(p => p.highlights?.length);
    expect(withHighlights).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    const highlights = compiled.querySelectorAll('.projects-card-highlight');
    expect(highlights.length).toBeGreaterThan(0);
  });

  it('should render a type badge for each project', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const badges = compiled.querySelectorAll('.projects-card-badge');
    expect(badges.length).toBe(component.projects.length);
  });
});
