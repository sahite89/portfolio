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

  it('should have 6 skill categories', () => {
    expect(component.skillsByCategory().length).toBe(6);
  });

  it('should include every skill across categories', () => {
    const total = component.skillsByCategory().reduce((acc, g) => acc + g.skills.length, 0);
    expect(total).toBe(component.skills.length);
  });

  it('should have 26 total skills', () => {
    expect(component.skills.length).toBe(26);
  });

  it('should have 4 architecture skills', () => {
    const arch = component.skillsByCategory().find((g) => g.key === 'architectures');
    expect(arch?.skills.length).toBe(4);
  });

  it('should have 4 practices skills', () => {
    const practices = component.skillsByCategory().find((g) => g.key === 'practices');
    expect(practices?.skills.length).toBe(4);
  });

  it('should render skill cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.skills-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should render architectures and practices skills as cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const chips = compiled.querySelectorAll('.skills-chip');
    expect(chips.length).toBe(0);
    const cards = compiled.querySelectorAll('.skills-card');
    const names = component.skillsByCategory()
      .filter((g) => g.key === 'architectures' || g.key === 'practices')
      .flatMap((g) => g.skills.map((s) => s.name));
    names.forEach((name) => {
      const matcher = Array.from(cards).some((card) => card.textContent!.trim() === name);
      expect(matcher).toBeTrue();
    });
  });
});
