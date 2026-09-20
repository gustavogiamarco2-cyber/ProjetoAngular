import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex08 } from './ex08';

describe('Ex08', () => {
  let component: Ex08;
  let fixture: ComponentFixture<Ex08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex08],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
