import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppAutenticarOutModel, AppGenClaveOlvidoOutModel, AppGenClaveOutModel, AppValidarGenClaveOutModel, PersonaLoginModel, PersonaSelloSegModel, SelloSegAuthOutModel } from '@shared/models/auth/auth.models';
import { ResponseModel } from '@shared/models/generico/http.model';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base = environment.urlbase;
  baseAuth = `${this.base}/random`;

  constructor(private http: HttpClient) { }

  getPersonaSelloSegAutObtener(params: SelloSegAuthOutModel) {
    const paramsOut = { ...params };
    // return this.http.get<ResponseModel<PersonaSelloSegModel>>(this.baseAuth).pipe(
    //   map(x => this.RESP_SELLO_AUTH)
    // );
    return of(this.RESP_SELLO_AUTH);
  }

  getToken(params: AppAutenticarOutModel) {
    const paramsOut = { ...params };
    // return this.http.get<ResponseModel<PersonaLoginModel>>(this.baseAuth).pipe(
    //   map(x => this.RESP_LOGIN)
    // );
    return of(this.RESP_LOGIN);
  }

  appValidarGenerarClave(params: AppValidarGenClaveOutModel) {
    // const paramsOut = { ...params };
    // return this.http.get<ResponseModel<number>>(this.baseAuth).pipe(
    //   map(x => 1)
    // );
    return of(1);
  }

  appGenerarClave(params: AppGenClaveOutModel) {
    const paramsOut = { ...params };
    // return this.http.get<ResponseModel<number>>(this.baseAuth).pipe(
    //   map(x => 1)
    // );
    return of(1);
  }

  appGenerarClaveOlvido(params: AppGenClaveOlvidoOutModel) {
    const paramsOut = { ...params };
    // return this.http.get<ResponseModel<number>>(this.baseAuth).pipe(
    //   map(x => 1)
    // );
    return of(1);
  }

  //Data Prueba
  RESP_SELLO_AUTH: PersonaSelloSegModel = {
    strCodPers: "12345",
    sello: {
      intCodSello: 1,
      strDescripcion: "barco",
      bytSello: "iVBORw0KGgoAAAANSUhEUgAAAEkAAABKCAIAAAB4he4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODhDNjg5Mjg1RDMxQzM2QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERkEyRDdCOTU0M0YxMUUxODlDMzk5Q0EyODk3MDIzNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERkEyRDdCODU0M0YxMUUxODlDMzk5Q0EyODk3MDIzNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxODAxMTc0MDcyMDY4MTE4OEM2ODkyODVEMzFDMzZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4OEM2ODkyODVEMzFDMzZBIi8+IDwvcmRmOkRlc2NyaXB0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",
    }
  }

  RESP_LOGIN: PersonaLoginModel = {
    token_type: "bearer",
    access_token: "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJTRUxFTkUgQ0hSSVNURUwgQlVTVEFNQU5URSBDQU5PIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNDMwNzg4OCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjAwMDIyOTgxNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkcnZAY2FqYXRydWppbGxvLmNvbS5wZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJjdXN0b21lci5jYXJkIiwiY3VzdG9tZXIubm9ibGFja2xpc3QiXSwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI1MTk5NzczMDczOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc2VyaWFsbnVtYmVyIjoiIiwiZXhwIjoxNjYyNDk2MDAwLCJpc3MiOiJodHRwczovL3NlY3VyaXR5dG9rZW5hcGkuY2FqYXRydWppbGxvLmNvbS5wZSIsImF1ZCI6Imh0dHBzOi8vd3d3LmNhamF0cnVqaWxsby5jb20ucGUifQ.4SgAfhVcHCWUsE_NzXUrgxEKi7bg96cLTO5vME9zHorNeg3hfrEciE7fabqHQLusXRogcNZcgXcOSXE1tw12Jg",
    refresh_token: null,
    phoneProvider: "4",
    userProfileId: "1",
    isNeedChangePassword: "False",
  }

}
