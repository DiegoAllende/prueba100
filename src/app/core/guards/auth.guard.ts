import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { INTER_ROUTES } from '@utils/const-rutas';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private authLoginStore: AuthLoginStore,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const isLoginToken = this.cookieService.check(Constantes.TOKEN_ACCESS);
    if (route.data['blockRoles']) {
      const conPermiso = this.authLoginStore.hasAccess(route.data['blockRoles']);
      if(conPermiso) {
        console.log("con permiso");
      } else {
        console.log("sin permiso");
        return false;
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
