import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { INTER_ROUTES } from '@utils/const-rutas';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  dataAsuario!: dataAuthModel;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private authLoginStore: AuthLoginStore,
  ) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.dataAsuario = this.authLoginStore.getDataAuth;
    console.log("guard_auth: ", this.dataAsuario);
    // const isLoginToken = this.cookieService.check(Constantes.TOKEN_ACCESS);
    if (route.data['blockRoles']) {
      const sinPermiso = this.dataAsuario.role?.some(x=> route.data['blockRoles'].includes(x));
      if(sinPermiso) {
        console.log("sin permiso");
      } else {
        console.log("con permiso");
      }
    } else {
      console.log("acceso fulll");
    }

    const isLocalAuth = !!localStorage.getItem(Constantes.PROFILE_DATA);
    if (isLocalAuth) {
      return true;
    } else {
      this.router.navigateByUrl(INTER_ROUTES.AUTH);
      return false;
    }
  }

}
