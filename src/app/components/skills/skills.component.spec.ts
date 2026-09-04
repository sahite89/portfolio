import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all skills by default', () => {
    expect(component.filteredSkills().length).toBe(component.skills.length);
  });

  it('should filter skills by category', () => {
    component.setCategory('backend');
    expect(component.activeCategory()).toBe('backend');
    component.filteredSkills().forEach(s => {
      expect(s.category).toBe('backend');
    });
  });

  it('should filter skills by databases category', () => {
    component.setCategory('databases');
    expect(component.activeCategory()).toBe('databases');
    component.filteredSkills().forEach(s => {
      expect(s.category).toBe('databases');
    });
  });

  it('should filter skills by architectures category', () => {
    component.setCategory('architectures');
    expect(component.activeCategory()).toBe('architectures');
    component.filteredSkills().forEach(s => {
      expect(s.category).toBe('architectures');
    });
  });

  it('should have 18 total skills', () => {
    expect(component.skills.length).toBe(18);
  });

  it('should render skill elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('[class*="skills-card"]');
    expect(items.length).toBeGreaterThan(0);
  });
});
