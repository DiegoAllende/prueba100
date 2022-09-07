import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-giro',
  templateUrl: './enviar-giro.component.html',
  styleUrls: ['./enviar-giro.component.scss']
})
export class EnviarGiroComponent implements OnInit {

  stepIndex = 0;
  stepComplete: boolean = false;
  isEditable: boolean = true;
  ocultarCard: boolean = false;

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Beneficiario", subtitles: [
        {subtitle: "LUNA FLORES SERGIO", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a cargar", value: "S/50.00"},
        {subtitle: "Monto a cargar", value: "S/50.00",diferent:true},
      ]
    }
  ];

  listItemsThird = [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de transferencia',
      data: 'Envío de giros'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Titular cta. destino',
      data: 'LUNA FLORES SERGIO'
    },
    {
      title: 'Monto a cargar',
      data: 'S/50.00'
    },
    {
      title: 'Monto a enviar',
      data: 'S/50.00'
    }
  ]

  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "3", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];


  values = {
    cuenta:"1",
    nombre:"Sergio",
    apePaterno:"Luna",
    apeMaterno:"Flores",
    tipoDocumento:"1",
    clave:"1234",
    moneda: "1",
    monto:"S/50"
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
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
    
    if(this.stepIndex === 2) {
      this.ocultarCard = true;
    }
  }

}
