import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from 'src/app/shared/components/contador/contador.service';
import { Constantes } from 'src/app/shared/utils/constantes';
import { Desencriptar, Encriptar } from 'src/app/shared/utils/funcion-crypto';
import { getformatoTarjeta, getPartesTarjeta, getPosLetraTarjeta, obtenerMask } from 'src/app/shared/utils/funcion-enmascarar';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtDecoderService } from '@shared/services/jwt-decoder.service';

@Component({
  selector: 'app-con-tarjeta',
  templateUrl: './con-tarjeta.component.html',
  styleUrls: ['./con-tarjeta.component.scss']
})
export class ConTarjetaComponent implements OnInit, OnDestroy {
  @Output() outIngresar: EventEmitter<any> = new EventEmitter();

  keyEnCrypto = environment.keyCryptoTarjeta;
  PIN = "444686";
  PIN_MASK = "4446-86";
  checkRecuerdame = false;
  isRecuerdame = false;
  valObs!: Subscription;
  value = {
    numeroTarjeta: "",
    tipoDocumento: "1",
    numeroDocumento: "",
  };

  constructor(
    private contadorService: ContadorService,
    private router: Router,
    private cookieService: CookieService,
    private jwtService:JwtDecoderService
  ) {
    this.valObs = this.contadorService.terminarSesionObs$().subscribe(resp => {
      if (resp) this.value.numeroDocumento = "";
    });
  }

  ngOnInit(): void {
    this.obtenerNumTarjeta();
  }

  ngOnDestroy(): void {
    this.valObs.unsubscribe();
  }

  btnRecaptcha(resp: boolean) {
    console.log("recaptcha: ", resp);
  }

  btnIngresar() {
    this.cookieService.set('token_access', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJTRUxFTkUgQ0hSSVNURUwgQlVTVEFNQU5URSBDQU5PIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNDMwNzQ5MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjAwMDIyOTgxNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkcnZAY2FqYXRydWppbGxvLmNvbS5wZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJjdXN0b21lci5jYXJkIiwiY3VzdG9tZXIubm9ibGFja2xpc3QiXSwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI1MTk5NzczMDczOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc2VyaWFsbnVtYmVyIjoiIiwiZXhwIjoxNjYxNTU2NDUyLCJpc3MiOiJodHRwczovL3NlY3VyaXR5dG9rZW5hcGkuY2FqYXRydWppbGxvLmNvbS5wZSIsImF1ZCI6Imh0dHBzOi8vd3d3LmNhamF0cnVqaWxsby5jb20ucGUifQ.NwJ7MQDpTM5258N9vRUYcBenNxhh56b6Uc0VMpxsdkS5OWkKEi-fG5BNVGHHWyXJBRdygWMWvpN11AImY9V5sQ', 1, '/');
    var dataFromJwt = this.transformarDataToken(this.cookieService.get('token_access'));
    localStorage.setItem('profileData', JSON.stringify(dataFromJwt));
    this.validarCheck();
    this.outIngresar.emit({});
  }

  transformarDataToken(token: string){
    var newData:any =[];
    var data = this.jwtService.DecodeToken(token);
    console.log('Esta es la data Jwt🔑', data);
    Object.keys(data).forEach((key:any) => {
      if(key.startsWith('http://schemas.microsoft.com/ws/2008/06/identity/claims/')){
        var newNameKey = key.split('http://schemas.microsoft.com/ws/2008/06/identity/claims/')[1];
        newData.push({
          name: newNameKey,
          data: data[key],
        })
      } else if(key.startsWith('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/')){
        var newNameKey = key.split('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/')[1];
        newData.push({
          name: newNameKey,
          data: data[key],
        })
      }
    });
    console.log('newData🐅', newData);
    return newData;
  }

  obtenerNumTarjeta() {
    let valor = JSON.parse(localStorage.getItem(Constantes.LS_NUM_TARJETA) + "");
    if (valor) {
      const respDesencrypt = Desencriptar(valor, this.keyEnCrypto);
      this.value.numeroTarjeta = respDesencrypt;
      this.checkRecuerdame = true;
      this.isRecuerdame = true;
    }
  }

  changeRecuerdame() {
    this.isRecuerdame = false;
    if (!this.checkRecuerdame) {
      this.value.numeroTarjeta = "";
    }
  }

  validarCheck() {
    if (this.checkRecuerdame) {
      let respEncrypt = Encriptar(this.value.numeroTarjeta, this.keyEnCrypto);
      localStorage.setItem(Constantes.LS_NUM_TARJETA, JSON.stringify(respEncrypt));
    } else {
      localStorage.removeItem(Constantes.LS_NUM_TARJETA);
    }
  }

  generatePassword() {
    this.router.navigate(['auth/generar/clave-internet']);
  }

}
