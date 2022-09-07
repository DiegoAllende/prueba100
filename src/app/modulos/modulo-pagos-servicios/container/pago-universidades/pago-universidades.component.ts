import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-universidades',
  templateUrl: './pago-universidades.component.html',
  styleUrls: ['./pago-universidades.component.scss']
})
export class PagoUniversidadesComponent implements OnInit {

  stepIndex = 0;
  stepComplete: boolean = false;
  isEditable: boolean = true;
  ocultarCard: boolean = false;
  public formRadioSimple!: FormGroup;

  listEmpresas= [
    {id:"1",name:"ULADECH"},
  ]

  listaTipoRecibosSimples=[
    {id:5, fechaVencimiento:'08/07/2022',mount:"S/340.00",name:'Pension 1'},
    {id:6, fechaVencimiento:'08/07/2022',mount:"S/340.00",name:'Pension 2',hidden:true},
    {id:7, fechaVencimiento:'08/07/2022',mount:"S/340.00",name:'Pension 3',hidden:true}
  ]

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Universidad", subtitles: [
        {subtitle: "ULADECH", value: ""},
      ]
    },
    {
      title:"Estudiante",subtitles:[
        {subtitle: "SANTOS PRADO ALESSANDRA CHABELIE", value: ""},
      ]
    },
    {
      title:"Codigo",subtitles:[
        {subtitle: "0123211843", value: ""},
      ]
    },
    {
      title:"Servicio",subtitles:[
        {subtitle: "Pensiones", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a pagar", value: "S/340.00"},
        {subtitle: "Mora", value: "S/3.70"},
        {subtitle: "Monto a cargar", value: "S/343.70",diferent:true},
      ]
    }
  ];

  listItemsThird = [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de operación',
      data: 'Pago de universidades'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Servicio',
      data: 'Pensiones'
    },
    {
      title: 'Concepto ',
      data: '4ta cuota'
    },
    {
      title: 'Estudiante',
      data: 'Santos prado alessandra chabelie'
    },
    {
      title: 'Código',
      data: '0123211843'
    },
    {
      title: 'Monto pagado',
      data: 'S/340.00'
    },
    {
      title: 'Mora',
      data: 'S/3.70'
    },
    {
      title: 'Monto cargado',
      data: 'S/343.70'
    }
  ]

  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "3", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  values = {
    empresa: "1",
    cuenta:"1",
    servicio: "1"
  }

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRadioSimple = this.formBuilder.group({
      recibosSimples: ['']
    });
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

  changeEmpresa(value:string){
    console.log("value de empresa",value)
  }

  searchRecibos(){
    console.log("evento buscar recibos")
  }


 

}
