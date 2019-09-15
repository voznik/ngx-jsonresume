import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonresumeEditorComponent } from './ngx-jsonresume-editor.component';

describe('NgxJsonresumeEditorComponent', () => {
  let component: NgxJsonresumeEditorComponent;
  let fixture: ComponentFixture<NgxJsonresumeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxJsonresumeEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonresumeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
