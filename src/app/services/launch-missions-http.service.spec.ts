import { TestBed } from '@angular/core/testing';

import { LaunchMissionsHttpService } from './launch-missions-http.service';

describe('LaunchMissionsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchMissionsHttpService = TestBed.get(LaunchMissionsHttpService);
    expect(service).toBeTruthy();
  });
});
