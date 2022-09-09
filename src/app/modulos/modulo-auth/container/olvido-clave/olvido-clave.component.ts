import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { adapterAppGenClaveOlvOut } from '@modulos/modulo-auth/models-adapter/auth-login.adapter';
import { AppGenClaveOlvidoOut } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adpaterComboDni } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { ErrorRespModel } from '@shared/models/generico/http.model';
import { AuthService } from '@shared/services/auth.service';
import { GenericoService } from '@shared/services/generico.service';
import { Constantes, PASOS } from '@utils/constantes';


@Component({
  selector: 'app-olvido-clave',
  templateUrl: './olvido-clave.component.html',
  styleUrls: ['./olvido-clave.component.scss']
})
export class OlvidoClaveComponent implements OnInit, OnDestroy {
  listaTiposDoi: ComboModel[] = [];
  formClaveOlv!: FormGroup;
  selloByte: string = "";
  valClave6D_1: number = 0;
  valClave6D_2: number = 0;
  mensajeError: string = "";

  PASOS = PASOS;
  numeroPaso: number = this.PASOS.INI;

  constructor(
    private authLoginStore: AuthLoginStore,
    private genericoService: GenericoService,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.initForm();

    this.selloByte = this.authLoginStore.getLoginSello.byteSello;
    if (this.selloByte) {
      localStorage.setItem(Constantes.SELLO_ACTUAL, JSON.stringify(this.selloByte))
    }
  }

  initForm() {
    this.formClaveOlv = this.fb.group({
      numTarjeta: ["", [Validators.required, Validators.minLength(10)]],
      tipoDoi: [1, [Validators.required]],
      numDoi: ["", [Validators.required, Validators.minLength(8)]],
      clave4D: ["", [Validators.required]],
      clave6D: ["", [Validators.required]],
    });
  }

  get frClave4D() {
    return this.formClaveOlv.get("clave4D");
  }
  get frClave6D() {
    return this.formClaveOlv.get("clave6D");
  }

  ngOnInit(): void {
    if (!this.selloByte) {
      this.selloByte = localStorage.getItem(Constantes.SELLO_ACTUAL) ? JSON.parse("" + localStorage.getItem(Constantes.SELLO_ACTUAL)) : "";
    }
    this.getTiposDoiServ();
  }
  ngOnDestroy(): void {
    localStorage.removeItem(Constantes.SELLO_ACTUAL);
  }

  //SERVICIOS
  getTiposDoiServ() {
    this.genericoService.getTipoDoiListar(1).subscribe(resp => {
      this.listaTiposDoi = adpaterComboDni(resp);
    });
  }

  appGenClaveServ() {
    const params: AppGenClaveOlvidoOut = {...this.formClaveOlv.value};
    this.authService.appGenerarClaveOlvido(adapterAppGenClaveOlvOut(params)).subscribe(resp => {
      if (resp > 0) {
        this.numeroPaso = this.PASOS.FIN;
      }
    }, (error: ErrorRespModel) => this.mensajeError = error.strDescripcion);
  }

  btnAceptarClave() {
    this.appGenClaveServ();
  }

  vlidarClave4D(val: number) {
    if (!!val) {
      this.frClave4D?.setValue("" + val);
    } else {
      this.frClave4D?.setValue("");
    }
  }

  validarClave6D(val: number, tipo: number) {
    switch (tipo) {
      case 1: this.valClave6D_1 = val;
        break;
      case 2: this.valClave6D_2 = val;
        break;
      default:
        break;
    }
    this.validarClaves();
  }

  validarClaves() {
    this.frClave6D?.setValue("");
    this.mensajeError = "";
    if (this.valClave6D_1 && this.valClave6D_2 > 0) {
      if (this.valClave6D_1 === this.valClave6D_2) {
        this.frClave6D?.setValue("" + this.valClave6D_1);
      } else {
        this.mensajeError = Constantes.MSJ_CLAVES_DIF;
      }
    }
  }

}
