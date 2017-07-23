import { TestBed, inject } from '@angular/core/testing';

import { Product1Service } from './product1.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product1Service]
    });
  });

  it('should be created', inject([Product1Service], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
