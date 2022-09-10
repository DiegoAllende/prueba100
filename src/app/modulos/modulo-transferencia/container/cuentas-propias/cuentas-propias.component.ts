import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { adpaterComboMoneda } from '@shared/models-adapter/generico.adapter';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { ComboModel } from '@shared/models/generico/generico.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-cuentas-propias',
  templateUrl: './cuentas-propias.component.html',
  styleUrls: ['./cuentas-propias.component.scss']
})
export class CuentasPropiasComponent implements OnInit {
  ocultarCard: boolean = false;
  stepIndex = 0;
  datosUsuario: dataAuthModel

  formTransCuentasPropias!: FormGroup;
  listaCuentasOrigen!: appCuentaSaldoIn[]
  listaCuentasDestino!: appCuentaSaldoIn[]
  listaMoneda!: ComboModel[]

  values = {
    cuentaOrigen: "156729403782",
    cuentaDestino: "156729403782",
    moneda: 1,
    monto: "",
  }

  mensajesValid: string = "La cuenta origen no posee saldo suficiente para realizar esta transacción";

  constructor(
    private router: Router,
    private genericoService: GenericoService,
    private authService: AuthLoginStore,
    private fb: FormBuilder
  ) {
    this.datosUsuario = authService.getDataAuth
    this.initForm();
   }

   initForm() {
    this.formTransCuentasPropias = this.fb.group({
      cuentaOrigen: ["", [Validators.required]],
      cuentaDestino: ["", [Validators.required]],
      tipoMoneda: ["", [Validators.required]],
      monto: [null,[Validators.required]],
    });
  }

  get frCuentaorigen(){
    return this.formTransCuentasPropias.get('cuentaOrigen')
  }

  ngOnInit(): void {
    console.log("cuenta propia init");
    this.getCuentasOrigen()
    this.getCuentasDestino()
    this.getTiposMoneda()

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

    console.log("step",this.stepIndex)


    console.log("continuar");
    if (this.stepIndex < 2) {
      this.stepIndex++;
      //llamar servicio aca

    } else {
      this.router.navigate(["/main"]);
    }

    if (this.stepIndex === 2) {
      this.ocultarCard = true;
    }

    console.log("step",this.stepIndex)
  }

  detalleDos = [
    {
      title: "Cuenta origen", value: "",
      subtitles: [
        { subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: "" },
      ]
    },
    {
      title: "Cuenta destino", subtitles: [
        { subtitle: " Ahorro Total Disponibilidad  156729403782 - Soles ", value: "" },
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
      title: 'Tipo de transferencia',
      data: 'A cuentas propias'
    },
    {
      title: 'Cuenta origen',
      data: ' Ahorro Sueldo  156729403782 - Soles'
    },
    {
      title: 'Cuenta destino',
      data: ' Ahorro Total Disponibilidad  156729403782 - Soles'
    },
    {
      title: 'Monto abonado',
      data: '1S/100.00'
    },
    {
      title: 'Monto cargado',
      data: 'S/100.00'
    }];

    getCuentasOrigen(){
      const params: AppParamsListCuentasOut = {
        codPers: this.datosUsuario.sid!,
        canalAtencion: 1
      };
      this.genericoService.getCuentaOrigenListar(adapterParamsgetCuentasOut(params)).subscribe(
       resp=>{
        this.listaCuentasOrigen = adapterCuentasListIn(resp)
        this.frCuentaorigen?.setValue(this.listaCuentasOrigen[0].codigoCuenta)
       }
      )
    }

    getCuentasDestino(){
      const params: AppParamsListCuentasOut = {
        codPers: this.datosUsuario.sid!,
        canalAtencion: 1
      };
      this.genericoService.getCuentaDestinoListar(adapterParamsgetCuentasOut(params)).subscribe(
       resp=>{
        this.listaCuentasDestino = adapterCuentasListIn(resp)
       }
      )
    }

    getTiposMoneda() {
      this.genericoService.getMonedaListar(1).subscribe(resp => {
        this.listaMoneda = adpaterComboMoneda(resp);
      });
    }

}
