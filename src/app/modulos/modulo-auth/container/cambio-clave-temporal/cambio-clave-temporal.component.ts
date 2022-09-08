import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adapterAppClaveCambiarOut } from '@modulos/modulo-auth/models-adapter/auth-login.adapter';
import { AppClaveCambiarOut } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { ErrorRespModel } from '@shared/models/generico/http.model';
import { AuthService } from '@shared/services/auth.service';
import { PASOS } from '@utils/constantes';

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
    if(!this.datosUsuario?.sid){
      router.navigate(['/auth'])
    }
    console.log("data",authLoginStore.getLoginForm)
    
  }

  ngOnInit(): void {
  }

  regresarIni() {
    this.router.navigate(["/auth"]);
  }

  cambiarClaveTemporal(){
    
    console.log("debemos obtener las nuevas claves")
    const params: AppClaveCambiarOut = {
      primerCambioClave6D: true,
      codPers: this.datosUsuario.sid! ,
      numTarjeta: this.authLoginStore.getLoginForm.numTarjeta,
      clave6D: this.valClave6D_1.toString(),
      nuevaClave6D : this.valClave6D_1.toString(),
      numIp: ""
    };

    console.log("params correcots",params)

    console.log("conectarse al servicio y dependiendo de la respuesta pasar a la parte 3")
    this.authService.appClaveCambiar(adapterAppClaveCambiarOut(params)).subscribe(resp => {
      if (resp > 0) {
        this.numeroPaso = PASOS.FIN;
      }
    }, (error: ErrorRespModel) => this.mensajeError = error.strDescripcion);
    
  }

  getClave6D(val: number, tipo: number) {
    switch (tipo) {
      case 1:
        this.valClave6D_1 = val;
        break;
      case 2:
        this.valClave6D_2 = val;
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
        this.mensajeError = "las claves deben ser iguales. Vuelva a ingresar las claves, por favor.";
      }
    }
  }

  // irSellos(){
  //   this.router.navigate(["/auth/generar/sello"]);
  // }

}
