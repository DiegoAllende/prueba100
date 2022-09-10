import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppAuhtOut } from '@modulos/modulo-auth/models/auth-login.interfaces';
import { ComboModel } from '@shared/models/generico/generico.models';
import { Constantes, TIPO_AUTH } from '@utils/constantes';

@Component({
  selector: 'app-sin-tarjeta',
  templateUrl: './sin-tarjeta.component.html',
  styleUrls: ['./sin-tarjeta.component.scss']
})
export class SinTarjetaComponent implements OnInit {
  @Output() outIngresarSin: EventEmitter<any> = new EventEmitter();
  @Input() listaTipoDoi: ComboModel[] = [];

  mensajeInfo = Constantes.MSJ_INFO_SIN_TARJETA;
  formLoginsin!: FormGroup;
  isRecaptcha = false;
  dataOut!: AppAuhtOut;

  constructor(
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  initForm() {
    this.formLoginsin = this.fb.group({
      tipoDoi: [null, [Validators.required]],
      numDoi: ["", [Validators.required, Validators.minLength(8)]],
      clave: ["", [Validators.required]],
      tipoAuth: TIPO_AUTH.SIN_CARD,
    });
  }

  get frTipoDoi() {
    return this.formLoginsin.get("tipoDoi");
  }
  get frNumDoi() {
    return this.formLoginsin.get("numDoi");
  }
  get frClave() {
    return this.formLoginsin.get("clave");
  }

  ngOnInit(): void {
    if(this.listaTipoDoi.length > 0) this.frTipoDoi?.setValue(this.listaTipoDoi[0].valor);
  }

  getValuePad(val: string) {
    if (val) this.frClave?.setValue(val);
    else this.frClave?.setValue("");
  }

  btnRecaptcha(resp: boolean) {
    this.isRecaptcha = resp;
  }

  btnIngresar() {
    this.dataOut = { ...this.formLoginsin.value };
    this.outIngresarSin.emit(this.dataOut);
  }

}
