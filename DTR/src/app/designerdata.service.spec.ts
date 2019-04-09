import { TestBed } from '@angular/core/testing';

import { DesignerdataService } from './designerdata.service';

describe('DesignerdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignerdataService = TestBed.get(DesignerdataService);
    expect(service).toBeTruthy();
  });
});
