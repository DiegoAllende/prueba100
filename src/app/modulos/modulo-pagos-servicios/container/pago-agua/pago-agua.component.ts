import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-agua',
  templateUrl: './pago-agua.component.html',
  styleUrls: ['./pago-agua.component.scss']
})
export class PagoAguaComponent implements OnInit {

  stepIndex = 0;
  stepComplete: boolean = false;
  isEditable: boolean = true;
  ocultarCard: boolean = false;
  public formRadioSimple!: FormGroup;

  values = {
    empresa: "",
    cuenta:"1",
  }

  listEmpresas= [
    {id:"1",name:"SEDACAJ"},
  ]

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Empresa", subtitles: [
        {subtitle: "SEDACAJ", value: ""},
      ]
    },
    {
      title:"Código de suministro",subtitles:[
        {subtitle: "77392501", value: ""},
      ]
    },
    {
      title:"Fecha de vencimiento",subtitles:[
        {subtitle: "21/10/2022", value: ""},
      ]
    },
    {
      title:"Titular",subtitles:[
        {subtitle: "CONSORCIO HOTELERO J&M S.A.C.", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a pagar", value: "S/1,604.40"},
        {subtitle: "Monto a cargar", value: "S/1,604.40",diferent:true},
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
      data: 'Pago de agua'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Empresa',
      data: 'SEDACAJ'
    },
    {
      title: 'Código de suministro',
      data: '77392501'
    },
    {
      title: 'Titular',
      data: 'CONSORCIO HOTELERO J&M S.A.C.'
    },
    {
      title: 'Monto pagado',
      data: 'S/1,604.40'
    },
    {
      title: 'Monto cargado',
      data: 'S/1,604.40'
    },
  ]

  listaTipoRecibosSimples=[
    {id:5, fechaVencimiento:'08/07/2022',mount:"S/19.50"},
    {id:6, fechaVencimiento:'08/07/2022',mount:"S/20.16",hidden:true}
  ]

  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "3", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  constructor(private router: Router,private formBuilder: FormBuilder) { }

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
