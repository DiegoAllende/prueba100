import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {

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
      title: "Titular de la tarjeta", subtitles: [
        {subtitle: "Mendoza Martell Edith lizeth"},
      ]
    },
    {
      title: "Nro. de tarjeta de crédito", subtitles: [
        {subtitle: "1567294037821357"},
      ]
    },
    {
      title: "Banco destino", subtitles: [
        {subtitle: "Banco Falabella"},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a transferir", value: "S/120.00"},
        {subtitle: "Comisión", value: "S/6.60"},
        {subtitle: "Monto total a transferir", value: "S/126.60",monto:true, diferent: true},
      ]
    }
  ];

  dataResult= [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Modalidad',
      data: 'Pago de tarjeta a otros bancos'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Titular de la tarjeta',
      data: 'Mendoza Martell Edith lizeth'
    },
    {
      title: 'Nro. de tarjeta de crédito',
      data: '1567294037821357'
    },
    {
      title: 'Banco de destino',
      data: 'Banco falabella'
    },
    {
      title: 'Monto pagado',
      data: 'S/120.00'
    },
    {
      title: 'Comisión',
      data: 'S/6.60'
    },
    {
      title: 'Monto cargado',
      data: 'S/126.60'
    }
  ];

  values = {
    cuentaOrigen: "156729403782",
    cuentaDestino: "2",
    moneda: "1",
    monto: "",
  }

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
