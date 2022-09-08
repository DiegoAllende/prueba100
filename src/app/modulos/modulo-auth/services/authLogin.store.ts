import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { dataAuthModel } from '@shared/models/auth/auth.models';
import { JwtDecoderService } from '@shared/services/jwt-decoder.service';
import { Constantes } from '@utils/constantes';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppAuhtOut, selloSegAuth } from '../models/auth-login.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginStore {
  private loginSelloStore: selloSegAuth = { codigo: 0, nombre: "", byteSello: "" };
  private loginAppAuthStore: AppAuhtOut = { tipoAuth: 0, numTarjeta: "", clave: "", tipoDoi: 0, numDoi: "", numIp: "" };
  private dataAuth$: BehaviorSubject<any> = new BehaviorSubject(null);
  // private dataAuth: dataAuthModel | null = null;


  constructor(private router: Router, private jwtService: JwtDecoderService) { }

  setLoginSello(data: selloSegAuth) {
    return this.loginSelloStore = { ...this.loginSelloStore, ...data };
  }

  get getLoginSello() {
    return { ...this.loginSelloStore };
  }

  setLoginForm(data: AppAuhtOut) {
    return this.loginAppAuthStore = { ...this.loginAppAuthStore, ...data };
  }

  get getLoginForm() {
    return { ...this.loginAppAuthStore };
  }

  setDataAuth(data: dataAuthModel | null) {
    this.dataAuth$.next(data ? { ...this.dataAuth$.value, ...data } : null);
  }

  get getDataAuth() {
    return this.dataAuth$.value ? { ...this.dataAuth$.value } : null;
  }

  setLogout() {
    localStorage.removeItem(Constantes.PROFILE_DATA);
    this.dataAuth$.next(null);
    this.router.navigate(["/auth"]);
  }

  // terminarSesionObs$(): Observable<boolean> {
  //   return this.loginSelloStore$.asObservable();
  // }

  // setTerminoSesion(val: boolean) {
  //   this.loginSelloStore$.next(val);
  // }

  transformarDataToken(token: string): void {
    let newData: { name: string, data: string }[] = [];
    const data = this.jwtService.DecodeToken(token);
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
      } else if (key.startsWith("exp")) {
        newData.push({
          name: "exp",
          data: data[key],
        })
      }
    });

    this.dataAuth$.next(this.tranformarDataTokenObject(newData));
  }

  tranformarDataTokenObject(val: any[]) {
    let auxData: any = {};
    val.forEach(x => {
      auxData[x.name] = x.data;
    });
    return auxData;
  }

  login() {
    localStorage.setItem(Constantes.PROFILE_DATA, JSON.stringify(this.dataAuth$.value));
    this.router.navigate(["/main"]);
  }
}
