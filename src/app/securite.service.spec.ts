import { TestBed } from '@angular/core/testing';

import { SecuriteService } from './securite.service';

describe('SecuriteService', () => {
  let service: SecuriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
