import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdviComponent } from './ndvi';

describe('Ndvi', () => {
  let component: NdviComponent;
  let fixture: ComponentFixture<NdviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdviComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
