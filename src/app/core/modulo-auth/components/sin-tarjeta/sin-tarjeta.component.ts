import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
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

  ngOnInit(): void {
    console.log('SinTarjetaComponent');
  }

  getValuePad(event:number){
    console.log(event);
  }

  btnRecaptcha(resp: boolean) {
    console.log("recaptcha: ", resp);
  }

  btnIngresar() {
    this.outIngresarSin.emit({});
  }
  
}
