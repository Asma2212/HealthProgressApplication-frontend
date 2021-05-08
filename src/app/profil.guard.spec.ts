import { TestBed } from '@angular/core/testing';

import { ProfilGuard } from './profil.guard';

describe('ProfilGuard', () => {
  let guard: ProfilGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfilGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
