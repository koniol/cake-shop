import { TestBed } from '@angular/core/testing';

import { CakesService } from './cakes.service';

describe('CakesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CakesService = TestBed.get(CakesService);
    expect(service).toBeTruthy();
  });
});
