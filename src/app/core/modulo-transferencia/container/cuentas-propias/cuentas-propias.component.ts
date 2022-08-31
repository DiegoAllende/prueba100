import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-propias',
  templateUrl: './cuentas-propias.component.html',
  styleUrls: ['./cuentas-propias.component.scss']
})
export class CuentasPropiasComponent implements OnInit {
  ocultarCard: boolean = false;
  stepIndex = 0;

  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "2", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  values = {
    cuentaOrigen: "1",
    cuentaDestino: "2",
    moneda: "1",
    monto: "",
  };

  mensajesValid: string = "La cuenta origen no posee saldo suficiente para realizar esta transacción";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("cuenta propia init");
  }

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

    if (this.stepIndex === 2) {
      this.ocultarCard = true;
    }
  }

  detalleDos = [
    {
      title: "Cuenta origen", value: "",
      subtitles: [
        { subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: "" },
      ]
    },
    {
      title: "Cuenta destino", subtitles: [
        { subtitle: " Ahorro Total Disponibilidad  156729403782 - Soles ", value: "" },
      ]
    },
    {
      title: "", subtitles: [
        { subtitle: "Monto a transferir", value: "S/100.00", diferent: true },
      ]
    }
  ];

  detalleTres = [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de transferencia',
      data: 'A cuentas propias'
    },
    {
      title: 'Cuenta origen',
      data: ' Ahorro Sueldo  156729403782 - Soles'
    },
    {
      title: 'Cuenta destino',
      data: ' Ahorro Total Disponibilidad  156729403782 - Soles'
    },
    {
      title: 'Monto abonado',
      data: '1S/100.00'
    },
    {
      title: 'Monto cargado',
      data: 'S/100.00'
    }];

}
