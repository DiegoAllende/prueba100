import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTercerPasoComponent } from './detalle-tercer-paso.component';

describe('ProcesoExitosoComponent', () => {
  let component: DetalleTercerPasoComponent;
  let fixture: ComponentFixture<DetalleTercerPasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTercerPasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTercerPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
