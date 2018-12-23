import { TestBed } from '@angular/core/testing';

import { RestExService } from './rest-ex.service';

describe('RestExService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestExService = TestBed.get(RestExService);
    expect(service).toBeTruthy();
  });
});
