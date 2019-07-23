import { TestBed } from '@angular/core/testing';

import { CustomerListService } from './customer-list.service';

describe('CustomerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerListService = TestBed.get(CustomerListService);
    expect(service).toBeTruthy();
  });
});
