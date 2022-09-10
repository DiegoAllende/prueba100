import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';
import { PASOS } from '@utils/constantes';

@Component({
  selector: 'app-pago-luz',
  templateUrl: './pago-luz.component.html',
  styleUrls: ['./pago-luz.component.scss']
})
export class PagoLuzComponent implements OnInit {

   
  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private genericoService: GenericoService,
    private authService: AuthLoginStore
  ) {
    this.datosUsuario = authService.getDataAuth
  }

  PASOS= PASOS
  numPaso: null | number = null
  showRecibos:boolean = false
  datosUsuario: dataAuthModel
  listaCuentas!: appCuentaSaldoIn[]

  listEmpresas= [
    {id:"1",name:"HIDRANDINA"},
    {id:"2",name:"ELECTROCENTRO"},
    {id:"3",name:"ELECTRONOROESTE"},
    {id:"4",name:"ELECTRORIENTE"}
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
        {subtitle: "HidraNdina", value: ""},
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
        {subtitle: "Flores Rodriguez Maria del Carmen", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a pagar", value: "S/242.30"},
        {subtitle: "Monto a cargar", value: "SS/242.30",diferent:true},
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
      data: 'Pago de luz'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Empresa',
      data: 'Hidrandina'
    },
    {
      title: 'Código de suministro',
      data: '77392501'
    },
    {
      title: 'Titular',
      data: 'Flores Rodriguez Maria del Carmen'
    },
    {
      title: 'Monto pagado',
      data: 'S/242.30'
    },
    {
      title: 'Monto cargado',
      data: 'S/242.30'
    },
  ]

  values= {
    empresa:"",
    cuenta:"156729403782",
    suministro:""
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

  ocultarCard: boolean = false;

  radioSelected!:boolean
  public formRadio!: FormGroup;
  public formRadioSimple!: FormGroup;

  ngOnInit(): void {
    this.formRadio = this.formBuilder.group({
      recibos: new FormControl(null)
    });

    this.formRadioSimple = this.formBuilder.group({
      recibosSimples: ['']
    });

    this.getCuentasAhorro()
  }

  getCuentasAhorro(){
    const params: AppParamsListCuentasOut = {
      codPers: this.datosUsuario.sid!,
      canalAtencion: 1
    };
    this.genericoService.getCuentaOrigenListar(adapterParamsgetCuentasOut(params)).subscribe(
     resp=>{
      this.listaCuentas = adapterCuentasListIn(resp)
     }
    )
  }
  

  changeEmpresa(value:any){
    this.showRecibos = false

    console.log(typeof value)

    console.log("valor seleccionado",value)
    if(value === "1" || value === "2") {
      this.numPaso = PASOS.INI
    }
    else{
      this.numPaso =PASOS.FIN
    }
    console.log(this.numPaso)
  }

  listaTipoRecibosComplejos:any[]=[
    {id:1, fechaVencimiento:'08/07/2022',pagoMinimo:'S/242.30',pagoTotal:'S/242.30'},
    {id:2, fechaVencimiento:'08/07/2022',pagoMinimo:'S/242.30',pagoTotal:'S/242.30',hidden:true},
    {id:3, fechaVencimiento:'08/07/2022',pagoMinimo:'S/242.30',pagoTotal:'S/242.30',hidden:true},
    {id:4, fechaVencimiento:'08/07/2022',pagoMinimo:'S/242.30',pagoTotal:'S/242.30',hidden:true}
  ]

  listaTipoRecibosSimples=[
    {id:5, fechaVencimiento:'08/07/2022',mount:"S/19.50",},
    {id:6, fechaVencimiento:'08/07/2022',mount:"S/20.16",hidden:true}
  ]


  searchRecibos(){
    this.showRecibos = true
  }

}
