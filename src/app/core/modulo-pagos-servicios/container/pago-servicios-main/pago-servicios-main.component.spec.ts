import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoServiciosMainComponent } from './pago-servicios-main.component';

describe('PagoServiciosMainComponent', () => {
  let component: PagoServiciosMainComponent;
  let fixture: ComponentFixture<PagoServiciosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoServiciosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoServiciosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
