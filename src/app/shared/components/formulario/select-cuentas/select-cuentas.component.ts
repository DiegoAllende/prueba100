import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { appCuentaSaldoIn } from '@modulos/modulo-transferencia/models/transferencias-model.interfaces';

@Component({
  selector: 'select-cuentas',
  templateUrl: './select-cuentas.component.html',
  styleUrls: ['./select-cuentas.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCuentasComponent),
      multi: true
    }
  ]
})
export class SelectCuentasComponent implements ControlValueAccessor {
  @Input() lista:appCuentaSaldoIn[] = [];

  labelSelect = "Seleccione";
  currentValue = "";
  isDisabled: boolean = false;

  constructor() { }
  
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(valueIn: any): void {
    if (valueIn) {
      this.currentValue = valueIn;
      this.changeSelect({value: valueIn});
    }
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setNewValue(value: string) {  // metodo para enviar el nuevo valor
    this.currentValue = value;
    this.onChange(this.currentValue);
  }

  changeSelect(val: any) {
    console.log(val)
    this.labelSelect = this.lista.find(x => x.codigoCuenta === val.value)?.descripcionSubProducto || "";
    this.setNewValue(val.value);
  }

}
