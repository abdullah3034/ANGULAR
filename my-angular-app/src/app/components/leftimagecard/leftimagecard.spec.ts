import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leftimagecard } from './leftimagecard';

describe('Leftimagecard', () => {
  let component: Leftimagecard;
  let fixture: ComponentFixture<Leftimagecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leftimagecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leftimagecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
