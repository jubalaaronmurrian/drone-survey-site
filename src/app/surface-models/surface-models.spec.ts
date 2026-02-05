import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceModelsComponent } from './surface-models';

describe('SurfaceModels', () => {
  let component: SurfaceModelsComponent;
  let fixture: ComponentFixture<SurfaceModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfaceModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfaceModelsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
