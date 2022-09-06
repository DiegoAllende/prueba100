import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoUniversidadesComponent } from './pago-universidades.component';

describe('PagoUniversidadesComponent', () => {
  let component: PagoUniversidadesComponent;
  let fixture: ComponentFixture<PagoUniversidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoUniversidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoUniversidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
