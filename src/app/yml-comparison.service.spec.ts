import { TestBed } from '@angular/core/testing';

import { YmlComparisonService } from './yml-comparison.service';

describe('YmlComparisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YmlComparisonService = TestBed.get(YmlComparisonService);
    expect(service).toBeTruthy();
  });
});
