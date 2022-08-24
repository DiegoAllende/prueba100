import { Component, OnInit } from '@angular/core';
import { PASOS } from '@utils/constantes';

@Component({
  selector: 'app-gen-password',
  templateUrl: './gen-password.component.html',
  styleUrls: ['./gen-password.component.scss']
})
export class GenPasswordComponent implements OnInit {
  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;

  value = {
    numeroTarjeta: "",
    numeroDocumento: "",
    numeroOperador: "",
    tipoDocumento: "1",
    tipoOperadora: "1",
  };

  constructor() { }

  ngOnInit(): void {
  }

  btnRegresar1() {
    this.numeroPaso = PASOS.INI;
  }

  btnSiguiente1() {
    this.numeroPaso = PASOS.DOS;
  }

  btnRegresar2() {
    this.numeroPaso = PASOS.INI;
  }

  btnSiguiente2() {
    this.numeroPaso = PASOS.FIN;
  }

}
