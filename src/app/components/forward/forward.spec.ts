import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forward } from './forward';

describe('Forward', () => {
  let component: Forward;
  let fixture: ComponentFixture<Forward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forward);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
