import { TestBed } from '@angular/core/testing';

import { Directus.TsService } from './directus';

describe('Directus.TsService', () => {
  let service: Directus.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Directus.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
