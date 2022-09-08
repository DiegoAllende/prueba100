import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppSelloInsertarOut, selloSegAuth } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { AuthService } from '@shared/services/auth.service';
import { PASOS } from '@utils/constantes';
import {adapterAppSelloInsertarOut, adapterSelloListaIn} from '../../models-adapter/auth-login.adapter'

interface selloLista {
  id: number;
  nombre: string;
  check: boolean;
}

@Component({
  selector: 'app-sello-generar',
  templateUrl: './sello-generar.component.html',
  styleUrls: ['./sello-generar.component.scss']
})
export class SelloGenerarComponent implements OnInit {
  selloIn!: selloSegAuth;
  listaSellos:selloSegAuth[] =[]
  datosUsuario :dataAuthModel
  

  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;

  constructor(
      private authService:AuthService,
      private authLoginStore:AuthLoginStore,
      private router:Router,

      
    ) { 
    this.datosUsuario = authLoginStore.getDataAuth
    if(!this.datosUsuario?.sid){
      router.navigate(['/auth'])
    }
  }

  ngOnInit(): void {
    this.getListaSellos()
  }

  getListaSellos(){
    this.authService.appGeListaSellos().subscribe(resp=>{
      this.listaSellos = adapterSelloListaIn(resp)
    })
  }

  valueSello(sello: any) {
    this.selloIn = sello;
    console.log("este es el sello selecionado",this.selloIn)
  }

  btnAceptarSello() {
    if (!this.selloIn) {
      console.log("Selecione un sello");
      return;
    }
    this.numeroPaso = PASOS.DOS;
    
  }

  btnRegresar() {
    this.numeroPaso = PASOS.INI;
  }

  btnSiguiente() {
    const params: AppSelloInsertarOut = {
      codPers: this.datosUsuario.sid!,
      codSello: this.selloIn.codigo
    };

    this.authService.appPersonaSelloInsertar(adapterAppSelloInsertarOut(params)).subscribe(resp=>{
      if(resp > 0){
        this.numeroPaso = PASOS.FIN;
        this.authLoginStore.loginSetData()
      }
    })
    
  }

}
