import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex04 } from './ex04';

describe('Ex04', () => {
  let component: Ex04;
  let fixture: ComponentFixture<Ex04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex04],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
