import { TestBed } from '@angular/core/testing';

import { GesArtService } from './ges-art.service';

describe('GesArtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GesArtService = TestBed.get(GesArtService);
    expect(service).toBeTruthy();
  });
});
