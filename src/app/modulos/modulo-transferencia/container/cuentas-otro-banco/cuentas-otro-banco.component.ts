import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-cuentas-otro-banco',
  templateUrl: './cuentas-otro-banco.component.html',
  styleUrls: ['./cuentas-otro-banco.component.scss']
})
export class CuentasOtroBancoComponent implements OnInit {
  ocultarCard: boolean = false;
  stepIndex = 0;
  numCard = 1;
  datosUsuario: dataAuthModel
  listaCuentas!: appCuentaSaldoIn[]

  // listaCuentas = [
  //   { id: "1", cuenta: "Ahorro Sueldo", numero: "156729403782", monto: "2,357.16", mostrar: "156729403782 - S/1,357.16 " },
  //   { id: "2", cuenta: "Ahorro Total Disponibilidad", numero: "156729403782", monto: "5,357.16", mostrar: "156729403782 - S/58.50" },
  // ];

  valuesDiferido = {
    cuentaOrigen: "156729403782",
    cuentaDestino: "",
    tipo: "1",
    moneda: "1",
    monto: "",
    titular: null,
    beneficiario: "",
  }

  valuesInmediata = {
    cuentaOrigen: "156729403782",
    cuentaDestino: "",
    tipo: "1",
    moneda: "1",
    monto: "",
  }

  listCreditosOtroBanco: any = [];
  mensajesValid: string = "Asegurate de ingresar todos los digitos del codigo recibido por SMS";

  constructor(
    private router: Router,
    private genericoService: GenericoService,
    private authService: AuthLoginStore
  ) {
    this.datosUsuario = authService.getDataAuth
   }

  ngOnInit(): void {
    this.getCreditosOtrosBancos();
    this.getCuentasAhorro()
  }

  btnCard(item: any) {
    this.listCreditosOtroBanco.forEach((x: any) => x.active = false);
    item.active = true;
    this.stepIndex = 0;
    this.numCard = item.id;
    console.log("numCard: ", this.numCard);

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

    if (this.stepIndex === 2) {
      this.ocultarCard = true;
    }
  }

  getCreditosOtrosBancos() {
    this.listCreditosOtroBanco = [
      {
        title: "Transferencia en diferido",
        subtitle: 'Ingresa los datos y completa las opciones para continuar',
        active: true,
        id: 1
      },
      {
        title: "Transferencia inmediata",
        subtitle: 'Ingresa los datos y completa las opciones para continuar',
        active: false,
        id: 2
      }
    ]
  }

  detalleDos = [
    {
      title: "Cuenta origen", value: "",
      subtitles: [
        { subtitle: "Ahorro Sueldo  156729403782 - Soles", value: "" },
      ]
    },
    {
      title: "Tipo de transferencia", subtitles: [
        { subtitle: "TIN Cero", value: "" },
      ]
    },
    {
      title: "Cuenta destino (CCI)", subtitles: [
        { subtitle: "Ahorro Total Disponibilidad  156729403782 - Soles", value: "" },
      ]
    },
    {
      title: "Titular cuenta destino", subtitles: [
        { subtitle: "Mendoza Martell Edith lizeth", value: "" },
      ]
    },
    {
      title: "", subtitles: [
        { subtitle: "Monto a transferir", value: "S/100.00", diferent: true },
      ]
    }
  ];

  detalleTres = [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Modalidad',
      data: 'Diferida a otros bancos'
    },
    {
      title: 'Cuenta origen',
      data: ' Ahorro Sueldo  156729403782 - Soles'
    },
    {
      title: 'Tipo de transferencia',
      data: 'TIN Cero'
    },
    {
      title: 'Cuenta destino CCI Soles',
      data: ' 156729403782456778'
    },
    {
      title: 'Titular cta. destino',
      data: ' Mendoza Martell Edith lizeth'
    },
    {
      title: 'Banco destino',
      data: ' BBVA Continental'
    },
    {
      title: 'Monto abonado',
      data: '1S/100.00'
    },
    {
      title: 'Monto cargado',
      data: 'S/100.00'
    }];


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
