import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedUiModule } from 'shared-ui';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppService } from './core/services';
import { SharedModule } from './shared/shared.module';
// tslint:disable:prefer-const

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        SharedUiModule.forRoot(),
        SharedModule.forRoot(),
        CoreModule.forRoot(),
      ],
      declarations: [AppComponent],
      providers: [AppService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    app = TestBed.get(AppService);
    expect(component).toBeTruthy();
  });

  /* it(`should have as title 'web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('web');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'web app is running!'
    );
  }); */
});
