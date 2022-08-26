import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-propias',
  templateUrl: './cuentas-propias.component.html',
  styleUrls: ['./cuentas-propias.component.scss']
})
export class CuentasPropiasComponent implements OnInit {
  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "2", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  values = {
    cuentaOrigen: "1",
    cuentaDestino: "2",
    moneda: "1",
    monto: "",
  }

  ocultarCard: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("cuenta propia init");
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

    if(this.stepIndex === 2) {
      this.ocultarCard = true;
    }
  }

  // ADECUAR FORMATO DE ARRAY DEPENDIENDO LOS CARD DE SU VISTA
  // listItemsSecondStep= [
  //   {
  //     title: "Activar notificaciones", value:"",
  //     subtitles: [
  //       {subtitle: "Ahorro Sueldo  156729403782 - Soles", value: ""},
  //       {subtitle: "", value: ""},
  //     ]
  //   },
  //   {
  //     title: "Canales de notificación", subtitles: [
  //       {subtitle: "Compras en comercios (POS)", value: "SI"},
  //       {subtitle: "Compras en comercios (POS) nacional", value: "SI"},
  //       {subtitle: "Compras en comercios (POS) nacional", value: "SI",},
  //     ]
  //   },
  //   {
  //     title:"",subtitles:[
  //       {subtitle: "Compras en comercios (POS)", value: "S/1278"},
  //       {subtitle: "Compras en comercios (POS)", value: "S/1278"},
  //       {subtitle: "Monto total a pagar", value: "S/5003",diferent:true},
  //     ]
  //   }
  // ];

}
