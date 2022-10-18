import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adpaterComboDni } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { AuthService } from '@shared/services/auth.service';
import { GenericoService } from '@shared/services/generico.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { Constantes, TIPO_PERSONA } from '@utils/constantes';
import { encryptWithPublicKey, encryptWithPublicKey3 } from '@utils/funcion-crypto';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
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
  mensajeError: string = "";

  

  constructor(
    private router: Router,
    private genericoService: GenericoService,
    private authService: AuthService,
    private authLoginStore: AuthLoginStore,
    private cookieService: CookieService,
  ) {
    // console.log('constructor login');
  }

  ngOnInit(): void {
    this.getTiposDoiServ();
  }

  //SERVICIOS
  getTiposDoiServ() {
    this.genericoService.getTipoDoiListar(TIPO_PERSONA.NATURAL).subscribe(resp => {
      this.listaTiposDoi = adpaterComboDni(resp.data);
    }, error => this.mensajeError = error?.message);
  }

  getSelloAuthServ(data: AppAuhtOut) {
    this.authService.getPersonaSelloSegAutObtener(adapterSelloAuthOut(data)).subscribe(resp => {
      
      this.authLoginStore.setLoginSello(adapterSelloAuthIn(resp));
      this.authLoginStore.setLoginForm(adpaterAppAuth(data));

      if(this.authLoginStore.getLoginSello.codigo > 0)this.router.navigate([INTER_ROUTES.AUTH_SELLO]);
      else this.router.navigate([INTER_ROUTES.AUTH_CLAVE]);
    });
  }

  appAutenticarServ(data: AppAuhtOut) {
    this.authService.getToken(adapterAppAutenticarOut(data)).subscribe(resp => {
      this.cookieService.set(Constantes.TOKEN_ACCESS, resp.access_token, 1, '/');
      this.authLoginStore.transformarDataToken(resp.access_token);
      this.authLoginStore.login();
    });
  }

  //BOTONES
  btnIngresar(data: AppAuhtOut) {
    console.log("cifrado1: ", encryptWithPublicKey("peru", environment.keyPublic));
    console.log("cifrado3: ", encryptWithPublicKey3("mexico", environment.keyPublic));
    // this.getSelloAuthServ(data);
  }

  btnIngresarSin(data: AppAuhtOut) {
    this.appAutenticarServ(data);
  }

  btnGeneratePass() {
    this.router.navigateByUrl(INTER_ROUTES.GENERAR_CLAVE_INTERNET);
  }

}
