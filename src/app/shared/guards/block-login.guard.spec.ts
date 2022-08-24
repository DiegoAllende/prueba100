import { TestBed } from '@angular/core/testing';

import { BlockLoginGuard } from './block-login.guard';

describe('BlockLoginGuard', () => {
  let guard: BlockLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
