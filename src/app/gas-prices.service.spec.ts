import { TestBed } from '@angular/core/testing';

import { GasPricesService } from './gas-prices.service';

describe('GasPricesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GasPricesService = TestBed.get(GasPricesService);
    expect(service).toBeTruthy();
  });
});
