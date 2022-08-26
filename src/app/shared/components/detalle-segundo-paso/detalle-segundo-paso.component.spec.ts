import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSegundoPasoComponent } from './detalle-segundo-paso.component';

describe('DetalleSegundoPasoComponent', () => {
  let component: DetalleSegundoPasoComponent;
  let fixture: ComponentFixture<DetalleSegundoPasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleSegundoPasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSegundoPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
