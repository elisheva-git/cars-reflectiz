import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineTypeByGenderComponent } from './engine-type-by-gender.component';

describe('EngineTypeByGenderComponent', () => {
  let component: EngineTypeByGenderComponent;
  let fixture: ComponentFixture<EngineTypeByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineTypeByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineTypeByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
