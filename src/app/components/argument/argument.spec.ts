import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Argument } from './argument';

describe('Argument', () => {
  let component: Argument;
  let fixture: ComponentFixture<Argument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Argument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Argument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
