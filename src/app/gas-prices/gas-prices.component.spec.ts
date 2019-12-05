import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPricesComponent } from './gas-prices.component';

describe('GasPricesComponent', () => {
  let component: GasPricesComponent;
  let fixture: ComponentFixture<GasPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
