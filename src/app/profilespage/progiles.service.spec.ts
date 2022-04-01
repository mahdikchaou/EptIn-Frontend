import { TestBed } from '@angular/core/testing';

import { ProgilesService } from './progiles.service';

describe('ProgilesService', () => {
  let service: ProgilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
