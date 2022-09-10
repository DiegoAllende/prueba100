import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-pago-empresas-instituciones',
  templateUrl: './pago-empresas-instituciones.component.html',
  styleUrls: ['./pago-empresas-instituciones.component.scss']
})
export class PagoEmpresasInstitucionesComponent implements OnInit {

  stepIndex = 0;
  stepComplete: boolean = false;
  isEditable: boolean = true;
  ocultarCard: boolean = false;
  datosUsuario: dataAuthModel
  listaCuentas!: appCuentaSaldoIn[]
  public formRadioSimple!: FormGroup;

  values = {
    empresa: "1",
    cuenta:"156729403782",
  }

  listEmpresas= [
    {id:"1",name:"LORD KELVIN"},
  ]

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Empresa o institución", subtitles: [
        {subtitle: "LORD KELVIN", value: ""},
      ]
    },
    {
      title:"Titular",subtitles:[
        {subtitle: "BENAVIDES CHAVEZ RICHARD HAROLD", value: ""},
      ]
    },
    {
      title:"Codigo",subtitles:[
        {subtitle: "9336", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a pagar", value: "S/580.00"},
        {subtitle: "Mora", value: "S/4.00"},
        {subtitle: "Monto a cargar", value: "S/584.00",diferent:true},
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
      data: 'Pago a empresas e instituciones'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Empresa',
      data: 'Lord kelvin'
    },
    {
      title: 'Código de suministro',
      data: '77392501'
    },
    {
      title: 'Titular',
      data: 'BENAVIDEZ CHAVEZ RICHARD HAROLD'
    },
    {
      title: 'Monto pagado',
      data: 'S/580.00'
    },
    {
      title: 'Mora',
      data: 'S/4.00'
    },
    {
      title: 'Monto cargado',
      data: 'S/584.00'
    }
  ]

  listaTipoRecibosSimples=[
    {id:5, fechaVencimiento:'08/07/2022',mount:"S/19.50"},
    {id:6, fechaVencimiento:'08/07/2022',mount:"S/20.16",hidden:true},
    {id:7, fechaVencimiento:'08/07/2022',mount:"S/20.16",hidden:true}
  ]
  constructor(
    private router: Router,
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
