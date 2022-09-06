import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockLoginGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {
    console.log("guard_blocklogin");
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const isLoginToken = this.cookieService.check(Constantes.TOKEN_ACCESS);
    const isLocalAuth = !!localStorage.getItem(Constantes.PROFILE_DATA);
    if (isLocalAuth) {
      this.router.navigate(['/main']);
      return false;
    } else {
      return true;
    }
  }
}
