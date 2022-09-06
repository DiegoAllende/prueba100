import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-olvido-clave',
  templateUrl: './olvido-clave.component.html',
  styleUrls: ['./olvido-clave.component.scss']
})
export class OlvidoClaveComponent implements OnInit {
  PASOS = {
    INI: 1,
    FIN: 2,
  }
  numeroPaso: number = this.PASOS.INI;

  value = {
    numeroTarjeta: "",
    tipoDocumento: "1",
    numeroDocumento: "",

  };

  constructor() {

  }

  ngOnInit(): void {

  }

  btnAceptarClave() {
    this.numeroPaso = this.PASOS.FIN;
  }

}
