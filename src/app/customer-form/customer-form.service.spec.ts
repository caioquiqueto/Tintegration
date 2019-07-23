import { TestBed } from '@angular/core/testing';

import { CustomerFormService } from './customer-form.service';

describe('CustomerFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerFormService = TestBed.get(CustomerFormService);
    expect(service).toBeTruthy();
  });
});
