import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex03 } from './ex03';

describe('Ex03', () => {
  let component: Ex03;
  let fixture: ComponentFixture<Ex03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex03],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
