import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayoutComponent } from './main-layout.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the layout', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nz-layout')).toBeTruthy();
    expect(compiled.querySelector('nz-sider')).toBeTruthy();
    expect(compiled.querySelector('nz-header')).toBeTruthy();
    expect(compiled.querySelector('nz-content')).toBeTruthy();
    expect(compiled.querySelector('nz-footer')).toBeTruthy();
  });

  it('should display the correct header text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('nz-header h1');
    expect(header?.textContent).toContain('Stock Market App');
  });

  it('should render the sidebar menu items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuItems = compiled.querySelectorAll(
      'nz-sider ul[nz-menu] li[nz-menu-item]',
    );
    expect(menuItems.length).toBe(4);
  });

  it('should display correct icons in the sidebar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const icons = compiled.querySelectorAll(
      'nz-sider ul[nz-menu] span[nz-icon]',
    );
    expect(icons.length).toBe(4);
  });

  it('should display footer text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('nz-footer');
    expect(footer?.textContent).toContain("API's Powered by FinnHub");
  });
});
