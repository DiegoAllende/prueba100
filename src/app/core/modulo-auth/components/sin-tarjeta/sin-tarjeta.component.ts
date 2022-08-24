import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sin-tarjeta',
  templateUrl: './sin-tarjeta.component.html',
  styleUrls: ['./sin-tarjeta.component.scss']
})
export class SinTarjetaComponent implements OnInit {
  @Output() outIngresarSin: EventEmitter<any> = new EventEmitter();

  mensaje = "Para el uso de clientes que solo cuenten con depósito a plazo fijo y/o créditos";

  value = {
    tipoDocumento: "1",
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
