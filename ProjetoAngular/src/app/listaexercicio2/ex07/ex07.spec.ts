import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex07 } from './ex07';

describe('Ex07', () => {
  let component: Ex07;
  let fixture: ComponentFixture<Ex07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex07],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
