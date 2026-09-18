import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02 } from './ex02';

describe('Ex02', () => {
  let component: Ex02;
  let fixture: ComponentFixture<Ex02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex02],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
