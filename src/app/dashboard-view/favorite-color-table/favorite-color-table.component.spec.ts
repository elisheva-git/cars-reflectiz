import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColorTableComponent } from './favorite-color-table.component';

describe('SummaryTableOfDetailsComponent', () => {
  let component: FavoriteColorTableComponent;
  let fixture: ComponentFixture<FavoriteColorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteColorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteColorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
