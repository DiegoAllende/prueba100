import { Component, OnInit } from '@angular/core';
import { PASOS } from '@utils/constantes';

interface selloLista {
  id: number;
  nombre: string;
  check: boolean;
}

@Component({
  selector: 'app-sello-generar',
  templateUrl: './sello-generar.component.html',
  styleUrls: ['./sello-generar.component.scss']
})
export class SelloGenerarComponent implements OnInit {
  selloIn: any;
  listaSellos: selloLista[] = [];

  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;

  constructor() { }

  ngOnInit(): void {
    this.getSellosSeguridad();
  }

  getSellosSeguridad() {
    this.listaSellos = [
      { id: 1, nombre: "barco.svg", check: false },
      { id: 2, nombre: "carpeta.svg", check: false },
      { id: 3, nombre: "casa.svg", check: false },
      { id: 4, nombre: "calc.svg", check: false },
      { id: 5, nombre: "camisa.svg", check: false },
      { id: 6, nombre: "candado.svg", check: false },
      { id: 7, nombre: "cartera.svg", check: false },
      { id: 8, nombre: "globo.svg", check: false },
      { id: 9, nombre: "Shape.svg", check: false },
      { id: 10, nombre: "lapiz.svg", check: false },
      { id: 11, nombre: "lupa.svg", check: false },
      { id: 12, nombre: "olla.svg", check: false },
      { id: 13, nombre: "maleta.svg", check: false },
      { id: 14, nombre: "regalo.svg", check: false },
      { id: 15, nombre: "telefono.svg", check: false },
      { id: 16, nombre: "camion.svg", check: false },
      { id: 17, nombre: "tv.svg", check: false },
      { id: 18, nombre: "trebol.svg", check: false },
    ];
  }

  valueSello(sello: any) {
    this.selloIn = sello;
  }

  btnAceptarSello() {
    if (!this.selloIn) {
      console.log("Selecione un sello");
      return;
    }
    this.numeroPaso = PASOS.DOS;
  }

  btnRegresar() {
    this.numeroPaso = PASOS.INI;
  }

  btnSiguiente() {
    this.numeroPaso = PASOS.FIN;
  }

}
