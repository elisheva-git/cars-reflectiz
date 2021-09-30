import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountToHobbyComponent } from './count-to-hobby.component';

describe('CountToHobbyComponent', () => {
  let component: CountToHobbyComponent;
  let fixture: ComponentFixture<CountToHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountToHobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountToHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
