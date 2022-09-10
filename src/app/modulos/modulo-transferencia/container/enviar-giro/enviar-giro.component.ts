import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterCuentasListIn, adapterParamsgetCuentasOut } from '@modulos/modulo-transferencia/models-adapter/transferencias.adapter';
import { appCuentaSaldoIn, AppParamsListCuentasOut } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { GenericoService } from '@shared/services/generico.service';

@Component({
  selector: 'app-enviar-giro',
  templateUrl: './enviar-giro.component.html',
  styleUrls: ['./enviar-giro.component.scss']
})
export class EnviarGiroComponent implements OnInit {

  stepIndex = 0;
  stepComplete: boolean = false;
  isEditable: boolean = true;
  ocultarCard: boolean = false;

  datosUsuario: dataAuthModel
  listaCuentas!: appCuentaSaldoIn[]

  listItemsSecondStep= [
    {
      title: "Cuenta origen", value:"",
      subtitles: [
        {subtitle: " Ahorro Sueldo  156729403782 - Soles ", value: ""},
      ]
    },
    {
      title: "Beneficiario", subtitles: [
        {subtitle: "LUNA FLORES SERGIO", value: ""},
      ]
    },
    {
      title:"",subtitles:[
        {subtitle: "Monto a cargar", value: "S/50.00"},
        {subtitle: "Monto a cargar", value: "S/50.00",diferent:true},
      ]
    }
  ];

  listItemsThird = [
    {
      title: 'Fecha y Hora',
      data: '05/04/2019  11:35:10'
    },
    {
      title: 'Tipo de transferencia',
      data: 'Envío de giros'
    },
    {
      title: 'Cuenta origen',
      data: 'Ahorro Sueldo  156729403782 - Soles '
    },
    {
      title: 'Titular cta. destino',
      data: 'LUNA FLORES SERGIO'
    },
    {
      title: 'Monto a cargar',
      data: 'S/50.00'
    },
    {
      title: 'Monto a enviar',
      data: 'S/50.00'
    }
  ]

  values = {
    cuenta:"156729403782",
    nombre:"Sergio",
    apePaterno:"Luna",
    apeMaterno:"Flores",
    tipoDocumento:"1",
    clave:"1234",
    moneda: "1",
    monto:"S/50"
  }

  constructor(
    private router:Router,
    private genericoService: GenericoService,
    private authService: AuthLoginStore
    ) {
      this.datosUsuario = authService.getDataAuth
     }

  ngOnInit(): void {
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
