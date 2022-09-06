import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

export interface Couta {
  name: string;
  subtitle?:string;
  completed: boolean;
  color: ThemePalette;
}

@Component({
  selector: 'app-creditos-terceros',
  templateUrl: './creditos-terceros.component.html',
  styleUrls: ['./creditos-terceros.component.scss']
})
export class CreditosTercerosComponent implements OnInit {

  labelSelect1 = "Ahorro Sueldo";
  labelSelect2 = "Ahorro Total Disponibilidad";

  radioSelected:boolean = true
  ocultarCard: boolean = false;
  public formCheck!: FormGroup;
  coutas:any[] = [
      {name: 'Cuota 5',subtitle: 'Vcto. 20/08/2022' , completed: false, color: 'primary'},
      {name: 'Cuota 6',subtitle:'Vcto. 20/08/2022', completed: false, color: 'primary'},
      {name: 'Cuota 7',subtitle:'Vcto. 20/08/2022', completed: false, color: 'primary'},
    ]
  
  listaCuentas = [
    { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
    { id: "3", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  ];

  empresas = [
    {name:"Luz del Sur", id:"1"},
    {name:"Sedapal", id:"2"},
    {name:"Gas del norte", id:"3"},
    {name:"Gas natural", id:"4"}
  ]
  values = {
    cuentaOrigen: "1",
    nroCredito: "Nro. 103356729403782",
    moneda: "1",
    monto:"S/ 1400.00",
    cuotas: [],
    cuotas2:[]
  }

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Crédito", subtitles: [
        {subtitle: "Administrativo", value: ""},
      ]
    },
    {
      title:"Nro. de crédito",subtitles:[
        {subtitle: "103356729403782", value: ""},
      ]
    },
    {
      title:"Titular del crédito",subtitles:[
        {subtitle: "Mendoza Martell Edith lizeth", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a pagar", value: "S/1,538.30"},
        {subtitle: "Monto total a pagar", value: "S/1,538.30",diferent:true},
      ]
    }
  ];

  dataResult= [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de pago',
      data: 'Pago de créditos a terceros'
    },
    {
      title: 'Cuenta origen',
      data: ' Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Crédito',
      data: 'Administrativo'
    },
    {
      title: 'Nro. de crédito',
      data: '103356729403782'
    },
    {
      title: 'Próximo vencimiento',
      data: '20/08/2022'
    },
    {
      title: 'Titular del crédito',
      data: 'Mendoza Martell Edith lizeth'
    },
    {
      title: 'Monto a pagar',
      data: 'S/1,538.30'
    },
    {
      title: 'Monto cargado',
      data: 'S/1,538.30'
    }
  ]

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    console.log("cuenta propia init");
    
  }

  ngOnInit(): void {
    this.formCheck = this.formBuilder.group({
      items: new FormControl(null)
    });
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

  radioTipoChange(){
    console.log(this.radioSelected)
  }

}
