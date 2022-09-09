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
    

    const isLocalAuth = !!localStorage.getItem(Constantes.PROFILE_DATA);
    if (isLocalAuth) {
      if (route.data['miroles']) {
        const conPermiso = this.authLoginStore.hasAccess(route.data['miroles']);
        if(conPermiso) {
          console.log("con permiso");
        } else {
          console.log("sin permiso");
          return false;
        }
      }
      return true;
    } else {
      this.router.navigateByUrl(INTER_ROUTES.AUTH);
      return false;
    }
  }

}
