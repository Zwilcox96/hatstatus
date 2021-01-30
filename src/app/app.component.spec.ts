import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let toolbar: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HatStatus'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HatStatus');
  });

  it('Toolbar should be visible', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    toolbar = fixture.nativeElement.querySelector('div.toolbar');
    expect(toolbar.textContent).toContain('Hat Status');
  });
});
