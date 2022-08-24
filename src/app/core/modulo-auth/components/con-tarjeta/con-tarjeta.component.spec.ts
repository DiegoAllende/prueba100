import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConTarjetaComponent } from './con-tarjeta.component';

describe('ConTarjetaComponent', () => {
  let component: ConTarjetaComponent;
  let fixture: ComponentFixture<ConTarjetaComponent>;

  const usuario =  {
    tarjeta : '4446864243216155',
    documento: '72255243',
    tipoDocumento: 1
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado', () => {
    expect(component).toBeTruthy();
  });

  it('formato de tarjeta',() => {
    const formato = component.obtenerFormatoTarjeta(usuario.tarjeta);
    expect(formato).toEqual('4446-8642-4321-6155');
  })



});
