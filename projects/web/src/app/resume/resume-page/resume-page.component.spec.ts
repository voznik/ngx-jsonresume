import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePageComponent } from './resume-page.component';

describe('ResumePageComponent', () => {
  let component: ResumePageComponent;
  let fixture: ComponentFixture<ResumePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
