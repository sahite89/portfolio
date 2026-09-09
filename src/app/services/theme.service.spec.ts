import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  const KEY = 'theme';

  beforeEach(() => {
    localStorage.clear();
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    TestBed.configureTestingModule({ providers: [ThemeService] });
    service = TestBed.inject(ThemeService);
  });

  it('should default to dark theme', () => {
    expect(service.theme).toBe('dark');
    expect(document.documentElement.classList.contains('light')).toBeFalse();
  });

  it('should toggle to light theme', () => {
    service.toggleTheme();
    expect(service.theme).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBeTrue();
    expect(localStorage.getItem(KEY)).toBe('light');
  });

  it('should toggle back to dark theme', () => {
    service.toggleTheme();
    service.toggleTheme();
    expect(service.theme).toBe('dark');
    expect(document.documentElement.classList.contains('light')).toBeFalse();
    expect(localStorage.getItem(KEY)).toBe('dark');
  });

  it('should switch theme explicitly', () => {
    service.switchTheme('light');
    expect(service.theme).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBeTrue();
  });

  it('should update theme-color meta', () => {
    service.switchTheme('light');
    const current = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    expect(current?.getAttribute('content')).toBe('#f9fafb');
  });
});
