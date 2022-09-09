import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adapterAppClaveCambiarOut } from '@modulos/modulo-auth/models-adapter/auth-login.adapter';
import { AppClaveCambiarOut } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { ErrorRespModel } from '@shared/models/generico/http.model';
import { AuthService } from '@shared/services/auth.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { Constantes, PASOS } from '@utils/constantes';

@Component({
  selector: 'app-cambio-clave-temporal',
  templateUrl: './cambio-clave-temporal.component.html',
  styleUrls: ['./cambio-clave-temporal.component.scss']
})
export class CambioClaveTemporalComponent implements OnInit {

  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;
  valClave6D_1: number = 0;
  valClave6D_2: number = 0;
  isValidClaves: boolean = false;
  mensajeError: string = "";
  datosUsuario: dataAuthModel 

  constructor(
    private router:Router,
    private authService:AuthService,
    private authLoginStore:AuthLoginStore
  ) { 
    this.datosUsuario = authLoginStore.getDataAuth
    if(!this.datosUsuario?.sid) this.router.navigateByUrl(INTER_ROUTES.AUTH)
  }

  ngOnInit(): void {
  }

  regresarIni() {
    this.router.navigateByUrl(INTER_ROUTES.AUTH)
  }

  cambiarClaveTemporal(){
    const params: AppClaveCambiarOut = {
      primerCambioClave6D: true,
      codPers: this.datosUsuario.sid! ,
      numTarjeta: this.authLoginStore.getLoginForm.numTarjeta,
      clave6D: this.valClave6D_1.toString(),
      nuevaClave6D : this.valClave6D_1.toString(),
      numIp: ""
    };

    this.authService.appClaveCambiar(adapterAppClaveCambiarOut(params)).subscribe(resp => {
      if (resp > 0) this.numeroPaso = PASOS.FIN;
    }, (error: ErrorRespModel) => this.mensajeError = error.strDescripcion);
  }

  getClave6D(val: number, tipo: number) {
    switch (tipo) {
      case 1: this.valClave6D_1 = val;
        break;
      case 2: this.valClave6D_2 = val;
        break;
      default:
        break;
    }
    this.validarClaves();
  }

  validarClaves() {
    this.isValidClaves = false;
    this.mensajeError = "";
    if (this.valClave6D_1 && this.valClave6D_2 > 0) {
      if (this.valClave6D_1 === this.valClave6D_2) {
        this.isValidClaves = true;
      } else {
        this.mensajeError = Constantes.MSJ_CLAVES_DIF;
      }
    }
  }
}
