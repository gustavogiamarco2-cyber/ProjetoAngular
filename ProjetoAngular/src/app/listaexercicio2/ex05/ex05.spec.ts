import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex05 } from './ex05';

describe('Ex05', () => {
  let component: Ex05;
  let fixture: ComponentFixture<Ex05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex05],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
