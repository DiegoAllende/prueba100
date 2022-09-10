import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

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
  datosUsuario: dataAuthModel
  listaCuentas!: appCuentaSaldoIn[]
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

  values = {
    empresa: "1",
    cuenta:"156729403782",
    servicio: "1"
  }

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private genericoService: GenericoService,
    private authService: AuthLoginStore
  ) {
    this.datosUsuario = authService.getDataAuth
  }

  ngOnInit(): void {
    this.formRadioSimple = this.formBuilder.group({
      recibosSimples: ['']
    });
    this.getCuentasAhorro()
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

}
