import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonresumeStreamlineComponent } from './ngx-jsonresume-streamline.component';

describe('NgxJsonresumeStreamlineComponent', () => {
  let component: NgxJsonresumeStreamlineComponent;
  let fixture: ComponentFixture<NgxJsonresumeStreamlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJsonresumeStreamlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonresumeStreamlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
