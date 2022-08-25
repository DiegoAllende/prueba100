import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-propias',
  templateUrl: './cuentas-propias.component.html',
  styleUrls: ['./cuentas-propias.component.scss']
})
export class CuentasPropiasComponent implements OnInit {
  labelSelect1 = "Ahorro Sueldo";
  labelSelect2 = "Ahorro Total Disponibilidad";

  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "2", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  values = {
    cuentaOrigen: "1",
    cuentaDestino: "2",
    moneda: "1",
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("cuenta propia init");
  }

  changeSelect(val: any) {
    this.labelSelect1 = this.listaCuentas.find(x => x.id === val.value)?.cuenta || "";
  }

  changeSelect2(val: any) {
    this.labelSelect2 = this.listaCuentas.find(x => x.id === val.value)?.cuenta || "";
  }

  stepIndex = 0;
  stepComplete: boolean = false;
  isEditable: boolean = true;

  btnRegresar() {
    console.log("regresar");
    if (this.stepIndex > 0) {
      this.stepIndex--;
    } else {
      this.router.navigate(["/main"]);
    }
  }

  btnContinuar() {
    console.log("continuar");
    if (this.stepIndex < 2) {
      this.stepIndex++;
    } else {
      this.router.navigate(["/main"]);
    }
  }

}
