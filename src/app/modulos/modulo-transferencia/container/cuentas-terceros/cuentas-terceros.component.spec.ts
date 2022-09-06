import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasTercerosComponent } from './cuentas-terceros.component';

describe('CuentasTercerosComponent', () => {
  let component: CuentasTercerosComponent;
  let fixture: ComponentFixture<CuentasTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasTercerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
