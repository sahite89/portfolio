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

  it('should render all projects by default', () => {
    expect(component.filteredProjects().length).toBe(component.projects.length);
  });

  it('should filter projects by category', () => {
    component.setFilter('frontend');
    expect(component.activeFilter()).toBe('frontend');
    component.filteredProjects().forEach(p => {
      expect(p.category).toBe('frontend');
    });
  });

  it('should render project cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('[class*="projects-card"]');
    expect(cards.length).toBeGreaterThan(0);
  });
});
