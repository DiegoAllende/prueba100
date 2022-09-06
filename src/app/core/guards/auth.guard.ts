import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {
    console.log("guard_auth");
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const isLoginToken = this.cookieService.check(Constantes.TOKEN_ACCESS);
    const isLocalAuth = !!localStorage.getItem(Constantes.PROFILE_DATA);
    if (isLocalAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
