import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthophotoComponent } from './orthophoto';

describe('Orthophoto', () => {
  let component: OrthophotoComponent;
  let fixture: ComponentFixture<OrthophotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrthophotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrthophotoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
