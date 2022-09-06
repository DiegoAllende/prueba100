import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtDecoderService } from '@shared/services/jwt-decoder.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppAuhtOut, selloSegAuth } from '../models/auth-login.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginStore {
  private loginSelloStore: selloSegAuth = { codigo: 0, nombre: "", byteSello: "" };
  private loginAppAuthStore: AppAuhtOut = { tipoAuth: 0, numTarjeta: "", clave: "", tipoDoi: 0, numDoi: "", numIp: ""};
  // private personaLogin: BehaviorSubject<any> = new BehaviorSubject({});
  private personaLogin: any = {};
  

  constructor(private router: Router, private jwtService: JwtDecoderService) { }

  setLoginSello(data: selloSegAuth) {
    return this.loginSelloStore = {...this.loginSelloStore, ...data};
  }

  getLoginSello() {
    return { ...this.loginSelloStore };
  }

  setLoginForm(data: AppAuhtOut) {
    return this.loginAppAuthStore = {...this.loginAppAuthStore, ...data};
  }

  getLoginForm() {
    return { ...this.loginAppAuthStore };
  }

  // terminarSesionObs$(): Observable<boolean> {
  //   return this.loginSelloStore$.asObservable();
  // }

  // setTerminoSesion(val: boolean) {
  //   this.loginSelloStore$.next(val);
  // }

  irLogin() {
    this.router.navigate(["/auth"]);
  }

  transformarDataToken(token: string) {
    let newData: any = [];
    let data = this.jwtService.DecodeToken(token);
    console.log('Esta es la data Jwt🔑', data);
    Object.keys(data).forEach((key: any) => {
      if (key.startsWith('http://schemas.microsoft.com/ws/2008/06/identity/claims/')) {
        let newNameKey = key.split('http://schemas.microsoft.com/ws/2008/06/identity/claims/')[1];
        newData.push({
          name: newNameKey,
          data: data[key],
        })
      } else if (key.startsWith('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/')) {
        let newNameKey = key.split('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/')[1];
        newData.push({
          name: newNameKey,
          data: data[key],
        })
      }
    });

    return newData;
  }


}
