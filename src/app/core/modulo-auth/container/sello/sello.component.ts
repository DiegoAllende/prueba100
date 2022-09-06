import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    this.selloAuth = this.authLoginStore.getLoginSello();
    if (!this.selloAuth.codigo) this.router.navigate(["/auth"]);
  }

  btnRespuesta(data: boolean) {
    if (data) this.router.navigate(["/auth/clave"]);
    else this.router.navigate(["/auth"]);
  }

}
