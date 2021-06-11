import { TestBed } from '@angular/core/testing';

import { ExerciceGuard } from './exercice.guard';

describe('ExerciceGuard', () => {
  let guard: ExerciceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExerciceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
