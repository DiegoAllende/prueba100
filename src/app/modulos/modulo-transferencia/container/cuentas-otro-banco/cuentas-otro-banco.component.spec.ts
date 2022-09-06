import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasOtroBancoComponent } from './cuentas-otro-banco.component';

describe('CuentasOtroBancoComponent', () => {
  let component: CuentasOtroBancoComponent;
  let fixture: ComponentFixture<CuentasOtroBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasOtroBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasOtroBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
