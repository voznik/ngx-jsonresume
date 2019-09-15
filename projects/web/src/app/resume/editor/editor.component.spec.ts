// tslint:disable:prefer-const
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { of } from 'rxjs';
import { SharedUiModule } from 'shared-ui';
import { ResumeDataService } from '../resume-data.service';
import { EditorComponent } from './editor.component';

let resumeDataServiceStub: Partial<ResumeDataService>;

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;
  let dataService;

  // stub UserService for test purposes
  resumeDataServiceStub = {
    getResume: () => of({}),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        SharedUiModule.forRoot(),
        SharedModule.forRoot(),
        CoreModule.forRoot(),
      ],
      declarations: [EditorComponent],
      providers: [
        ResumeDataService,
        // { provide: ResumeDataService, useValue: resumeDataServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    // dataService from the root injector
    dataService = TestBed.get(ResumeDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
