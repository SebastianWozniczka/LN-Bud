import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middle2 } from './middle2';

describe('Middle2', () => {
  let component: Middle2;
  let fixture: ComponentFixture<Middle2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Middle2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Middle2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
