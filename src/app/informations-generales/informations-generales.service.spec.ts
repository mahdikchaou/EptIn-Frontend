import { TestBed } from '@angular/core/testing';

import { InformationsGeneralesService } from './informations-generales.service';

describe('InformationsGeneralesService', () => {
  let service: InformationsGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationsGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
