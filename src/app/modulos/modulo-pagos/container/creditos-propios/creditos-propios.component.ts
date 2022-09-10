import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-creditos-propios',
  templateUrl: './creditos-propios.component.html',
  styleUrls: ['./creditos-propios.component.scss']
})
export class CreditosPropiosComponent implements OnInit {

  datosUsuario: dataAuthModel
  listaCuentas!: appCuentaSaldoIn[]

  listItemsSecondStep= [
    {
      title: "Cuenta Origen", value:"",
      subtitles: [
        {subtitle: "Ahorro Sueldo  156729403782 - Soles", value: ""},
      ]
    },
    {
      title: "Crédito", subtitles: [
        {subtitle: "Administrativo"},
      ]
    },
    {
      title: "Nro. de crédito", subtitles: [
        {subtitle: "103356729403782"},
      ]
    },
    {
      title: "Titular del crédito", subtitles: [
        {subtitle: "Mendoza Martell Edith lizeth"},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a pagar", value: "S/1,538.30"},
        {subtitle: "Monto total a pagar", value: "S/1,538.30",monto:true, diferent: true},
      ]
    }
  ];

  dataResult= [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de operación',
      data: 'Pago de créditos propios'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
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
  ];

  dataArrayForCuotas=[
    {
      disable: false,
      cuota_num: '4',
      cuota_venc: '20/08/2022',
      cuota_monto: 'S/1,538.30',
    },
    {
      disable: false,
      cuota_num: '5',
      cuota_venc: '20/08/2022',
      cuota_monto: 'S/1,538.30',
    },
    {
      disable: true,
      cuota_num: '6',
      cuota_venc: '20/08/2022',
      cuota_monto: 'S/1,538.30',
    },
  ]

  values = {
    cuentaOrigen: "156729403782",
    cuentaDestino: "156729403782",
    moneda: "1",
    monto: "",
    pagocuota: null
  }

  cuotasPago: boolean = false;
  pagoParcial: boolean = false;

  ocultarCard: boolean = false;

  constructor(
    private router: Router,
    private genericoService: GenericoService,
    private authService: AuthLoginStore
  ) { 
    this.datosUsuario = authService.getDataAuth
  }

  ngOnInit(): void {
    console.log("cuenta propia init");
    this.getCuentasAhorro()
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

  selectPagoCuotas() {
    this.cuotasPago = true;
    this.pagoParcial = false;
  }
  selectPagoParcial(){
    this.pagoParcial = true;
    this.cuotasPago = false;
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
