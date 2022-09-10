import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adapterAppClaveOut, adapterAppGenClaveOut } from '@modulos/modulo-auth/models-adapter/auth-login.adapter';
import { AppGenClaveOut, AppValidarGenClaveOut } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { adpaterComboDni, adpaterComboOperador } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { ErrorRespModel } from '@shared/models/generico/http.model';
import { AuthService } from '@shared/services/auth.service';
import { GenericoService } from '@shared/services/generico.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { Constantes, PASOS } from '@utils/constantes';

@Component({
  selector: 'app-gen-password',
  templateUrl: './gen-password.component.html',
  styleUrls: ['./gen-password.component.scss']
})
export class GenPasswordComponent implements OnInit {
  listaTiposDoi: ComboModel[] = [];
  listaTiposOperador: ComboModel[] = [];

  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;

  formGenClave!: FormGroup;
  codigoValidDatos: number = 0;
  valClave6D_1: number = 0;
  valClave6D_2: number = 0;
  isValidClaves: boolean = false;
  mensajeError: string = "";

  constructor(
    private authService: AuthService,
    private genericoService: GenericoService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.initForm();
  }

  initForm() {
    this.formGenClave = this.fb.group({
      numTarjeta: ["", [Validators.required, Validators.minLength(10)]],
      tipoDoi: [1, [Validators.required]],
      numDoi: ["", [Validators.required, Validators.minLength(8)]],
      tipoOperador: [1, [Validators.required]],
      numCelular: ["", [Validators.required, Validators.minLength(9)]],
      clave: ["", [Validators.required]],
    });
  }

  get frNumTarjeta() {
    return this.formGenClave.get("numTarjeta");
  }
  get frClave4D() {
    return this.formGenClave.get("clave");
  }

  ngOnInit(): void {
    this.getTiposDoiServ();
    this.getTiposOperadorServ();
  }

  //SERVICIOS
  getTiposDoiServ() {
    this.genericoService.getTipoDoiListar(1).subscribe(resp => {
      this.listaTiposDoi = adpaterComboDni(resp.data);
    });
  }

  getTiposOperadorServ() {
    this.genericoService.getTipoOperadorListar().subscribe(resp => {
      this.listaTiposOperador = adpaterComboOperador(resp);
    });
  }

  appValidarGenClaveServ() {
    const params: AppValidarGenClaveOut = { ...this.formGenClave.value };
    this.authService.appValidarGenerarClave(adapterAppGenClaveOut(params)).subscribe(resp => {
      if (resp > 0) {
        this.codigoValidDatos = resp;
        this.numeroPaso = PASOS.DOS;
      }
    }, (error: ErrorRespModel) => this.mensajeError = error.strDescripcion);
  }

  appGenClaveServ() {
    const params: AppGenClaveOut = {
      codPers: "",
      codValid: "" + this.codigoValidDatos,
      numTarjeta: this.frNumTarjeta?.value,
      clave: "" + this.valClave6D_1
    };

    this.authService.appGenerarClave(adapterAppClaveOut(params)).subscribe(resp => {
      if (resp > 0) {
        this.numeroPaso = PASOS.FIN;
      }
    }, (error: ErrorRespModel) => this.mensajeError = error.strDescripcion);
  }

  //BOTONES
  btnAceptar1() {
    this.mensajeError = "";
    this.appValidarGenClaveServ();
  }

  btnAceptar2() {
    this.mensajeError = "";
    this.appGenClaveServ();
  }

  btnRegresar2() {
    this.resetRegresarPaso1();
    this.numeroPaso = PASOS.INI;
  }

  btnRegresar1() {
    this.router.navigate([INTER_ROUTES.AUTH]);
  }

  //FUNCIONES
  getClave4D(val: number) {
    if (!!val) this.frClave4D?.setValue("" + val);
    else this.frClave4D?.setValue("");
  }

  getClave6D(val: number, tipo: number) {
    switch (tipo) {
      case 1:
        this.valClave6D_1 = val;
        break;
      case 2:
        this.valClave6D_2 = val;
        break;

      default:
        break;
    }
    this.validarClaves();
  }

  validarClaves() {
    this.isValidClaves = false;
    this.mensajeError = "";
    if (this.valClave6D_1 && this.valClave6D_2 > 0) {
      if (this.valClave6D_1 === this.valClave6D_2) {
        this.isValidClaves = true;
      } else {
        this.mensajeError = Constantes.MSJ_CLAVES_DIF ;
      }
    }
  }

  resetRegresarPaso1() {
    this.valClave6D_1 = 0;
    this.valClave6D_2 = 0;
    this.isValidClaves = false;
    this.mensajeError = "";
    this.formGenClave.setValue({
      numTarjeta: "",
      tipoDoi: 1,
      numDoi: "",
      tipoOperador: 1,
      numCelular: "",
      clave: "",
    });
  }
}
