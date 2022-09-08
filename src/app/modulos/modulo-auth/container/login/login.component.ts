import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adpaterComboDni } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { AuthService } from '@shared/services/auth.service';
import { GenericoService } from '@shared/services/generico.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';
import { adapterAppAutenticarOut, adapterSelloAuthIn, adapterSelloAuthOut, adpaterAppAuth } from '../../models-adapter/auth-login.adapter';
import { AppAuhtOut } from '../../models/auth-login.interfaces';
import { AuthLoginStore } from '../../services/authLogin.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  listaTiposDoi: ComboModel[] = [];

  constructor(
    private router: Router,
    private genericoService: GenericoService,
    private authService: AuthService,
    private authLoginStore: AuthLoginStore,
    private cookieService: CookieService,
  ) {
    console.log('constructor login');
  }

  ngOnInit(): void {
    this.getTiposDoiServ();
  }

  //SERVICIOS
  getTiposDoiServ() {
    this.genericoService.getTipoDoiListar(1).subscribe(resp => {
      this.listaTiposDoi = adpaterComboDni(resp);
    });
  }

  getSelloAuthServ(data: AppAuhtOut) {
    this.authService.getPersonaSelloSegAutObtener(adapterSelloAuthOut(data)).subscribe(resp => {
      
      this.authLoginStore.setLoginSello(adapterSelloAuthIn(resp));
      this.authLoginStore.setLoginForm(adpaterAppAuth(data));
      console.log("aaa: ", this.authLoginStore.getLoginSello);
      console.log("bbb: ", this.authLoginStore.getLoginForm);
      

      if(this.authLoginStore.getLoginSello.codigo)this.router.navigate([INTER_ROUTES.AUTH_SELLO]);
      else this.router.navigate([INTER_ROUTES.AUTH_CLAVE]);
    });
  }

  appAutenticarServ(data: AppAuhtOut) {
    console.log("dataOut: ", adapterAppAutenticarOut(data));

    this.authService.getToken(adapterAppAutenticarOut(data)).subscribe(resp => {
      this.cookieService.set(Constantes.TOKEN_ACCESS, resp.access_token, 1, '/');
      this.authLoginStore.transformarDataToken(this.cookieService.get(Constantes.TOKEN_ACCESS));
      this.authLoginStore.login();
    });
  }

  btnIngresar(data: AppAuhtOut) {
    this.getSelloAuthServ(data);
  }

  btnIngresarSin(data: AppAuhtOut) {
    console.log("dataIn: ", data);
    
    this.appAutenticarServ(data);
  }

}
