import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex06 } from './ex06';

describe('Ex06', () => {
  let component: Ex06;
  let fixture: ComponentFixture<Ex06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex06],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
