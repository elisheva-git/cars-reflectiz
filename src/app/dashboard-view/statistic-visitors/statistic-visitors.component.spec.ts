import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticVisitorsComponent } from './statistic-visitors.component';

describe('StatisticVisitorsComponent', () => {
  let component: StatisticVisitorsComponent;
  let fixture: ComponentFixture<StatisticVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
