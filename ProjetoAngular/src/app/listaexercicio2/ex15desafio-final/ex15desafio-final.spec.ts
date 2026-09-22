import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex15desafioFinal } from './ex15desafio-final';

describe('Ex15desafioFinal', () => {
  let component: Ex15desafioFinal;
  let fixture: ComponentFixture<Ex15desafioFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex15desafioFinal],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex15desafioFinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
