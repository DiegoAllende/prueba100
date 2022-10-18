import { Component, EventEmitter, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from 'src/app/shared/components/contador/contador.service';
import { Constantes, TIPO_AUTH } from 'src/app/shared/utils/constantes';
import { Desencriptar, Encriptar } from 'src/app/shared/utils/funcion-crypto';
import { environment } from 'src/environments/environment';
import { ComboModel } from '@shared/models/generico/generico.models';
import { AppAuhtOut } from '../../models/auth-login.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-con-tarjeta',
  templateUrl: './con-tarjeta.component.html',
  styleUrls: ['./con-tarjeta.component.scss']
})
export class ConTarjetaComponent implements OnInit, OnDestroy {
  @Input() listaTipoDoi: ComboModel[] = [];
  @Output() outIngresar: EventEmitter<AppAuhtOut> = new EventEmitter();
  @Output() eGenPass: EventEmitter<boolean> = new EventEmitter();

  maxDni = 8;
  public customPatterns = { 'C': { pattern: new RegExp('\[-a-zA-Z0-9\]')} };
  public customPatterns2 = { 'D': { pattern: new RegExp('\[-a-zA-Z \]')} };

  keyEnCrypto = environment.keyCryptoTarjeta;
  PIN = Constantes.PIN;
  PIN_MASK = Constantes.PIN_MASK;
  valObs!: Subscription;

  formSelloAuth!: FormGroup;
  checkRecuerdame = false;
  isRecuerdame = false;
  isRecaptcha = false;

  constructor(
    private fb: FormBuilder,
    private contadorService: ContadorService,
  ) {
    console.log("CON TARJETA")

    this.initForm();
    this.valObs = this.contadorService.terminarSesionObs$().subscribe(resp => {
      // if (resp) this.value.numDoi = "";
    });
  }

  initForm() {
    this.formSelloAuth = this.fb.group({
      numTarjeta: ["", [Validators.required, Validators.minLength(10)]],
      tipoDoi: [null, [Validators.required]],
      numDoi: ["", [Validators.required, Validators.minLength(8)]],
      checkRecuerdame: false,
      tipoAuth: TIPO_AUTH.CON_CARD,
      prueba: "",
      prueba1: "",
      prueba2: "",
      prueba3: "",
      prueba4: "",
      prueba5: "",
      mascarCard: "",
    });
  }

  get frNumTarjeta() {
    return this.formSelloAuth.get("numTarjeta");
  }
  get frTipoDoi() {
    return this.formSelloAuth.get("tipoDoi");
  }
  get frNumDoi() {
    return this.formSelloAuth.get("numDoi");
  }
  get frCheckRec() {
    return this.formSelloAuth.get("checkRecuerdame");
  }

  get frPrueba() {
    return this.formSelloAuth.get("prueba");
  }

  ngOnInit(): void {
    if(this.listaTipoDoi.length > 0) this.frTipoDoi?.setValue(this.listaTipoDoi[0].valor);
    this.obtenerNumTarjeta();
  }

  ngOnDestroy(): void {
    this.valObs.unsubscribe();
  }

  obtenerNumTarjeta() {
    let valor = JSON.parse(localStorage.getItem(Constantes.LS_NUM_TARJETA) + "");
    if (valor) {
      const respDesencrypt = Desencriptar(valor, this.keyEnCrypto);
      this.frNumTarjeta?.setValue(respDesencrypt);
      this.frCheckRec?.setValue(true);
      this.isRecuerdame = true;
    }
  }

  changeRecuerdame() {
    this.isRecuerdame = false;
    if (!this.frCheckRec?.value) this.frNumTarjeta?.setValue("");
  }

  btnRecaptcha(resp: boolean) {
    this.isRecaptcha = resp;
  }

  btnIngresar() {
    this.validarCheck();
    this.outIngresar.emit(this.formSelloAuth.value);
  }

  validarCheck() {
    if(!this.isRecuerdame) {
      if (this.frCheckRec?.value) {
        const respEncrypt = Encriptar(this.frNumTarjeta?.value, this.keyEnCrypto);
        localStorage.setItem(Constantes.LS_NUM_TARJETA, JSON.stringify(respEncrypt));
      } else {
        localStorage.removeItem(Constantes.LS_NUM_TARJETA);
      }
    }
  }

  generatePassword() {
    this.eGenPass.emit(true);
  }

  abriPrueba() {
    console.log("aaa");
    
    window.open("https://www.google.com.mx/");
  }

  BANKS: Bank[] = [
    {name: 'Bank A (Switzerland)', id: 'A'},
    {name: 'Bank B (Switzerland)', id: 'B'},
    {name: 'Bank C (France)', id: 'C'},
    {name: 'Bank D (France)', id: 'D'},
    {name: 'Bank E (France)', id: 'E'},
    {name: 'Bank F (Italy)', id: 'F'},
    {name: 'Bank G (Italy)', id: 'G'},
    {name: 'Bank H (Italy)', id: 'H'},
    {name: 'Bank I (Italy)', id: 'I'},
    {name: 'Bank J (Italy)', id: 'J'},
    {name: 'Bank Kolombia (United States of America)', id: 'K'},
    {name: 'Bank L (Germany)', id: 'L'},
    {name: 'Bank M (Germany)', id: 'M'},
    {name: 'Bank N (Germany)', id: 'N'},
    {name: 'Bank O (Germany)', id: 'O'},
    {name: 'Bank P (Germany)', id: 'P'},
    {name: 'Bank Q (Germany)', id: 'Q'},
    {name: 'Bank R (Germany)', id: 'R'}
  ];

}

export interface Bank {
  id: string;
  name: string;
}

export interface BankGroup {
  name: string;
  banks: Bank[];
}
