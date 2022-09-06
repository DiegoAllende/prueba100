import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adpaterComboDni } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { AuthService } from '@shared/services/auth.service';
import { GenericoService } from '@shared/services/generico.service';
import { Constantes } from '@utils/constantes';
import { CookieService } from 'ngx-cookie-service';
import { adapterSelloAuthIn, adapterSelloAuthOut, adpaterAppAuth } from '../../models-adapter/auth-login.adapter';
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
      this.router.navigate(["auth/sello"]);
    });
  }

  btnIngresar(data: AppAuhtOut) {
    this.getSelloAuthServ(data);
  }

  btnIngresarSin(data: any) {
    this.cookieService.set(Constantes.TOKEN_ACCESS, 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJTRUxFTkUgQ0hSSVNURUwgQlVTVEFNQU5URSBDQU5PIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNDMwNzQ5MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjAwMDIyOTgxNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkcnZAY2FqYXRydWppbGxvLmNvbS5wZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJjdXN0b21lci5jYXJkIiwiY3VzdG9tZXIubm9ibGFja2xpc3QiXSwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI1MTk5NzczMDczOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc2VyaWFsbnVtYmVyIjoiIiwiZXhwIjoxNjYxNTU2NDUyLCJpc3MiOiJodHRwczovL3NlY3VyaXR5dG9rZW5hcGkuY2FqYXRydWppbGxvLmNvbS5wZSIsImF1ZCI6Imh0dHBzOi8vd3d3LmNhamF0cnVqaWxsby5jb20ucGUifQ.NwJ7MQDpTM5258N9vRUYcBenNxhh56b6Uc0VMpxsdkS5OWkKEi-fG5BNVGHHWyXJBRdygWMWvpN11AImY9V5sQ', 1, '/');
    const dataFromJwt = this.authLoginStore.transformarDataToken(this.cookieService.get(Constantes.TOKEN_ACCESS));
    localStorage.setItem(Constantes.PROFILE_DATA, JSON.stringify(dataFromJwt));

    this.router.navigate(["main"]);
  }
  

}
