import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rightimagecard } from './rightimagecard';

describe('Rightimagecard', () => {
  let component: Rightimagecard;
  let fixture: ComponentFixture<Rightimagecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rightimagecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rightimagecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
