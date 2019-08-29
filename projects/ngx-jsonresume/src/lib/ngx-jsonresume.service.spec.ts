import { TestBed } from '@angular/core/testing';

import { NgxJsonresumeService } from './ngx-jsonresume.service';

describe('NgxJsonresumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxJsonresumeService = TestBed.get(NgxJsonresumeService);
    expect(service).toBeTruthy();
  });
});
