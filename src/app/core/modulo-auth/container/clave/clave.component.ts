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
    this.selloAuth = this.authLoginStore.getLoginSello();
    this.reqAppLogin = this.authLoginStore.getLoginForm();
    if (!this.selloAuth.codigo) this.router.navigate(["/auth"]);
  }

  ngOnInit(): void {
    console.log("init clave");
  }

  //SERVICIOS
  appAutenticarServ() {
    this.authService.postAplicacionAutenticar(adapterAppAutenticarOut(this.reqAppLogin)).subscribe(resp => {
      console.log("LOGIN: ", resp);
      this.cookieService.set(Constantes.TOKEN_ACCESS, 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJTRUxFTkUgQ0hSSVNURUwgQlVTVEFNQU5URSBDQU5PIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNDMwNzQ5MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjAwMDIyOTgxNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkcnZAY2FqYXRydWppbGxvLmNvbS5wZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJjdXN0b21lci5jYXJkIiwiY3VzdG9tZXIubm9ibGFja2xpc3QiXSwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI1MTk5NzczMDczOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc2VyaWFsbnVtYmVyIjoiIiwiZXhwIjoxNjYxNTU2NDUyLCJpc3MiOiJodHRwczovL3NlY3VyaXR5dG9rZW5hcGkuY2FqYXRydWppbGxvLmNvbS5wZSIsImF1ZCI6Imh0dHBzOi8vd3d3LmNhamF0cnVqaWxsby5jb20ucGUifQ.NwJ7MQDpTM5258N9vRUYcBenNxhh56b6Uc0VMpxsdkS5OWkKEi-fG5BNVGHHWyXJBRdygWMWvpN11AImY9V5sQ', 1, '/');
      const dataFromJwt = this.authLoginStore.transformarDataToken(this.cookieService.get(Constantes.TOKEN_ACCESS));
      localStorage.setItem(Constantes.PROFILE_DATA, JSON.stringify(dataFromJwt));
      this.router.navigate(["/main"]);
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
