import { TestBed } from '@angular/core/testing';

import { QuizzGuard } from './quizz.guard';

describe('QuizzGuard', () => {
  let guard: QuizzGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuizzGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
