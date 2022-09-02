import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEmpresasInstitucionesComponent } from './pago-empresas-instituciones.component';

describe('PagoEmpresasInstitucionesComponent', () => {
  let component: PagoEmpresasInstitucionesComponent;
  let fixture: ComponentFixture<PagoEmpresasInstitucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoEmpresasInstitucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEmpresasInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
