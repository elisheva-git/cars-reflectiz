import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDesignComponent } from './basic-design.component';

describe('BasicDesignComponent', () => {
  let component: BasicDesignComponent;
  let fixture: ComponentFixture<BasicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
