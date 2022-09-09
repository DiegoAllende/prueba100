import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppSelloInsertarOut, selloSegAuth } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { AuthService } from '@shared/services/auth.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { PASOS } from '@utils/constantes';
import { adapterAppSelloInsertarOut, adapterSelloListaIn } from '../../models-adapter/auth-login.adapter'

@Component({
  selector: 'app-sello-generar',
  templateUrl: './sello-generar.component.html',
  styleUrls: ['./sello-generar.component.scss']
})
export class SelloGenerarComponent implements OnInit {
  selloIn!: selloSegAuth;
  listaSellos: selloSegAuth[] = []
  datosUsuario: dataAuthModel

  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;

  constructor(
    private authService: AuthService,
    private authLoginStore: AuthLoginStore,
    private router: Router,
  ) {
    this.datosUsuario = this.authLoginStore.getDataAuth
    if (!this.datosUsuario?.sid) this.router.navigateByUrl(INTER_ROUTES.AUTH)
  }

  ngOnInit(): void {
    this.getListaSellos()
  }

  getListaSellos() {
    this.authService.appGeListaSellos().subscribe(resp => {
      this.listaSellos = adapterSelloListaIn(resp)
    })
  }

  valueSello(sello: any) {
    this.selloIn = sello;
  }

  btnAceptarSello() {
    if (!this.selloIn) return;
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

    this.authService.appPersonaSelloInsertar(adapterAppSelloInsertarOut(params)).subscribe(resp => {
      if (resp > 0) {
        this.authLoginStore.loginSetData();
        this.numeroPaso = PASOS.FIN;
      }
    })
  }
}
