import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-cuentas-terceros',
  templateUrl: './cuentas-terceros.component.html',
  styleUrls: ['./cuentas-terceros.component.scss']
})
export class CuentasTercerosComponent implements OnInit {

  labelSelect1 = "Ahorro Sueldo";
  labelSelect2 = "Ahorro Total Disponibilidad";

  ocultarCard: boolean = false;
  datosUsuario: dataAuthModel

  // listaCuentas = [
  //   { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
  //   { id: "2", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  // ];

  listaCuentas!: appCuentaSaldoIn[]

  values = {
    cuentaOrigen: "156729403782",
    cuentaDestino: "156729403782",
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

  dataResult= [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de transferencia',
      data: 'A cuentas propias'
    },
    {
      title: 'Cuenta origen',
      data: ' Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Cuenta destino',
      data: ' Ahorro Total Disponibilidad  156729403782 - Soles '
    },
    {
      title: 'Monto abonado',
      data: '1S/100.00'
    },
    {
      title: 'Monto cargado',
      data: 'S/100.00'
    }]

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

  // changeSelect(val: any) {
  //   this.labelSelect1 = this.listaCuentas.find(x => x.id === val.value)?.cuenta || "";
  // }

  // changeSelect2(val: any) {
  //   this.labelSelect2 = this.listaCuentas.find(x => x.id === val.value)?.cuenta || "";
  // }

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
