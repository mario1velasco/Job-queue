import { TestBed } from '@angular/core/testing';

import { FinishedService } from './finished.service';

describe('FinishedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinishedService = TestBed.get(FinishedService);
    expect(service).toBeTruthy();
  });
});
