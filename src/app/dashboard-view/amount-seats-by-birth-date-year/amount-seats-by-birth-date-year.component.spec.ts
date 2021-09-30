import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountSeatsByBirthDateYearComponent } from './amount-seats-by-birth-date-year.component';

describe('AmountSeatsByBirthDateYearComponent', () => {
  let component: AmountSeatsByBirthDateYearComponent;
  let fixture: ComponentFixture<AmountSeatsByBirthDateYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountSeatsByBirthDateYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountSeatsByBirthDateYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
