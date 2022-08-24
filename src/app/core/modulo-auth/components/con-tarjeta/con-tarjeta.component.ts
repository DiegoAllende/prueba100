import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from 'src/app/shared/components/contador/contador.service';
import { Constantes } from 'src/app/shared/utils/constantes';
import { Desencriptar, Encriptar } from 'src/app/shared/utils/funcion-crypto';
import { getformatoTarjeta, getPartesTarjeta, getPosLetraTarjeta, obtenerMask } from 'src/app/shared/utils/funcion-enmascarar';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
    private cookieService: CookieService
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
    this.cookieService.set('token_access', '564654a89s4d65a4s98d4as6', 1, '/');
    this.validarCheck();
    this.outIngresar.emit({});
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
