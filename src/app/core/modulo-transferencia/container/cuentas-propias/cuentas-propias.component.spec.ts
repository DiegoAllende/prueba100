import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPropiasComponent } from './cuentas-propias.component';

describe('CuentasPropiasComponent', () => {
  let component: CuentasPropiasComponent;
  let fixture: ComponentFixture<CuentasPropiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPropiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
