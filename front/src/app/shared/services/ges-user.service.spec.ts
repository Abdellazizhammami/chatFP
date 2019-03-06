import { TestBed } from '@angular/core/testing';

import { GesUserService } from './ges-user.service';

describe('GesUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GesUserService = TestBed.get(GesUserService);
    expect(service).toBeTruthy();
  });
});
