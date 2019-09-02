import { TestBed } from '@angular/core/testing';

import { SharedUiService } from './shared-ui.service';

describe('SharedUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedUiService = TestBed.get(SharedUiService);
    expect(service).toBeTruthy();
  });
});
