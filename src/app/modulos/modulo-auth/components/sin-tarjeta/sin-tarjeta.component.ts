import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComboModel } from '@shared/models/generico/generico.models';

@Component({
  selector: 'app-sin-tarjeta',
  templateUrl: './sin-tarjeta.component.html',
  styleUrls: ['./sin-tarjeta.component.scss']
})
export class SinTarjetaComponent implements OnInit {
  @Input() listaTipoDoi: ComboModel[] = [];
  @Output() outIngresarSin: EventEmitter<any> = new EventEmitter();

  mensaje = "Para el uso de clientes que solo cuenten con depósito a plazo fijo y/o créditos";

  value = {
    tipoDocumento: 1,
    numeroDocumento: "",
  };

  formLoginsin!: FormGroup;
  isRecaptcha = false;

  constructor(
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  initForm() {
    this.formLoginsin = this.fb.group({
      tipoDoi: [1, [Validators.required]],
      numDoi: ["", [Validators.required, Validators.minLength(8)]],
      clave: ["", [Validators.required]],
      tipoAuth: 2,
    });
  }

  get frNumDoi() {
    return this.formLoginsin.get("numDoi");
  }
  get frClave() {
    return this.formLoginsin.get("clave");
  }

  ngOnInit(): void {
    console.log('SinTarjetaComponent');
  }

  getValuePad(val:number){
    if (!!val) {
      this.frClave?.setValue(""+val);
    } else {
      this.frClave?.setValue("");
    }
  }

  btnRecaptcha(resp: boolean) {
    console.log("recaptcha: ", resp);
    this.isRecaptcha = resp;
  }

  btnIngresar() {
    this.outIngresarSin.emit({});
  }
  
}
