import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/core/core.module';
import { TitleService } from '@app/core/services';
import { SharedModule } from '@app/shared/shared.module';
import { SharedUiModule } from 'shared-ui';
import { ResumeDataService } from '../resume-data.service';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;
  let titleService: TitleService;
  let dataService: ResumeDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        SharedUiModule.forRoot(),
        SharedModule.forRoot(),
        CoreModule.forRoot(),
      ],
      declarations: [ViewerComponent],
      providers: [
        ResumeDataService,
        // { provide: ResumeDataService, useValue: resumeDataServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    // dataService from the root injector
    dataService = TestBed.get(ResumeDataService);
    titleService = TestBed.get(TitleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
