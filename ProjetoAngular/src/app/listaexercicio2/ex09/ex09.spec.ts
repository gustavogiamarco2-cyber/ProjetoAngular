import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex09 } from './ex09';

describe('Ex09', () => {
  let component: Ex09;
  let fixture: ComponentFixture<Ex09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex09],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
