import { Component, EventEmitter, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from 'src/app/shared/components/contador/contador.service';
import { Constantes } from 'src/app/shared/utils/constantes';
import { Desencriptar, Encriptar } from 'src/app/shared/utils/funcion-crypto';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ComboModel } from '@shared/models/generico/generico.models';
import { AppAuhtOut } from '../../models/auth-login.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INTER_ROUTES } from '@utils/const-rutas';

@Component({
  selector: 'app-con-tarjeta',
  templateUrl: './con-tarjeta.component.html',
  styleUrls: ['./con-tarjeta.component.scss']
})
export class ConTarjetaComponent implements OnInit, OnDestroy {
  @Input() listaTipoDoi: ComboModel[] = [];
  @Output() outIngresar: EventEmitter<AppAuhtOut> = new EventEmitter();

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
    private router: Router,
  ) {
    this.initForm();
    this.valObs = this.contadorService.terminarSesionObs$().subscribe(resp => {
      // if (resp) this.value.numDoi = "";
    });
  }

  initForm() {
    this.formSelloAuth = this.fb.group({
      numTarjeta: ["", [Validators.required, Validators.minLength(10)]],
      tipoDoi: [1, [Validators.required]],
      numDoi: ["", [Validators.required, Validators.minLength(8)]],
      checkRecuerdame: false,
      tipoAuth: 1,
    });
  }

  get frNumTarjeta() {
    return this.formSelloAuth.get("numTarjeta");
  }
  get frNumDoi() {
    return this.formSelloAuth.get("numDoi");
  }
  get frCheckRec() {
    return this.formSelloAuth.get("checkRecuerdame");
  }

  ngOnInit(): void {
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
    this.router.navigateByUrl(INTER_ROUTES.GENERAR_CLAVE_INTERNET);
  }

}
