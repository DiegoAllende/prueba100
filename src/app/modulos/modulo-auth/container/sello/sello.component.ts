import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INTER_ROUTES } from '@utils/const-rutas';
import { selloSegAuth } from '../../models/auth-login.interfaces';
import { AuthLoginStore } from '../../services/authLogin.store';

@Component({
  selector: 'app-sello',
  templateUrl: './sello.component.html',
})
export class SelloComponent {
  selloAuth!: selloSegAuth;

  constructor(
    private router: Router,
    private authLoginStore: AuthLoginStore
  ) {
    this.selloAuth = this.authLoginStore.getLoginSello;
    if (!this.selloAuth.codigo) this.router.navigate([INTER_ROUTES.AUTH]);
  }

  btnRespuesta(data: boolean) {
    if (data) this.router.navigate([INTER_ROUTES.AUTH_CLAVE]);
    else this.router.navigate([INTER_ROUTES.AUTH]);
  }

}
