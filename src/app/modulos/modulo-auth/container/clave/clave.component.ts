import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';
import { adapterAppAutenticarOut } from '../../models-adapter/auth-login.adapter';
import { AppAuhtOut, selloSegAuth } from '../../models/auth-login.interfaces';
import { AuthLoginStore } from '../../services/authLogin.store';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.component.html',
  styleUrls: ['./clave.component.scss']
})
export class ClaveComponent implements OnInit {
  selloAuth!: selloSegAuth;
  reqAppLogin!: AppAuhtOut;
  isValidCalve: boolean = false;
  isTieneSello = true;

  constructor(
    private authLoginStore: AuthLoginStore,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
  ) {
    this.selloAuth = this.authLoginStore.getLoginSello;
    this.reqAppLogin = this.authLoginStore.getLoginForm;
    if (!this.selloAuth.codigo) this.router.navigate(["/auth"]);
  }

  ngOnInit(): void {
    console.log("init clave");
  }

  //SERVICIOS
  appAutenticarServ() {
    this.authService.getToken(adapterAppAutenticarOut(this.reqAppLogin)).subscribe(resp => {
      console.log("LOGIN: ", resp);
      this.cookieService.set(Constantes.TOKEN_ACCESS, resp.access_token, 1, '/');
      this.authLoginStore.transformarDataToken(this.cookieService.get(Constantes.TOKEN_ACCESS));
    });
  }

  ingresarClave() {
    this.appAutenticarServ();
  }

  vlidarClave(val: number) {
    if (!!val) {
      this.reqAppLogin.clave = "" + val;
      this.isValidCalve = true;
    } else {
      this.reqAppLogin.clave = "";
      this.isValidCalve = false;
    }
  }

  btnOlvideCalve() {
    this.router.navigate(["/auth/generar/olvide-clave"]);
  }

}
