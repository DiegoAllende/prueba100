import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-terceros',
  templateUrl: './cuentas-terceros.component.html',
  styleUrls: ['./cuentas-terceros.component.scss']
})
export class CuentasTercerosComponent implements OnInit {

  labelSelect1 = "Ahorro Sueldo";
  labelSelect2 = "Ahorro Total Disponibilidad";

  ocultarCard: boolean = false;

  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "2", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  values = {
    cuentaOrigen: "1",
    cuentaDestino: "2",
    moneda: "1",
  }

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: "Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Cuenta destino", subtitles: [
        {subtitle: "156729403782 - Dólares ", value: ""},
      ]
    },
    {
      title:"Titular cuenta destino",subtitles:[
        {subtitle: "Mendoza Martell Edith lizeth", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a transferir", value: "US/50.00"},
        {subtitle: "Tipo de cambio", value: "S/3.70"},
        {subtitle: "Monto a transferir", value: "S/185.00",diferent:true},
      ]
    }
  ];

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
    
    if(this.stepIndex === 2) {
      this.ocultarCard = true;
    }
  }

}
