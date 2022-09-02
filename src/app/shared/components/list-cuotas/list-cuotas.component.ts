import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Couta } from 'src/app/core/modulo-pagos/container/creditos-terceros/creditos-terceros.component';

@Component({
  selector: 'app-list-cuotas',
  templateUrl: './list-cuotas.component.html',
  styleUrls: ['./list-cuotas.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListCuotasComponent),
      multi: true
    }
  ]
})
export class ListCuotasComponent implements ControlValueAccessor {

  @Input() cuotas!: Couta[];

  currentValue:any[] = [];
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

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

  setNewValue(value:any) {  // metodo para enviar el nuevo valor
    this.currentValue = value
    this.onChange(this.currentValue);
  }

  changeSelect(val: any) {
    this.setNewValue(val);
  }

  getValue(selectedOption: any,i:number) {

      //CAMBIANDO EL ESTADO DEL ITEM SELECCIONADO
      this.cuotas = this.cuotas.map((cuota:any,index:number)=>{
        if(i===index)return{...cuota,completed:selectedOption.checked}
        else return {...cuota}
      })

      //FILTRANDO SOLO LOS SELECCIONADOS Y SUS NOMBRES
      let namesCuotas = this.cuotas.filter(elemen=>elemen.completed).map(elemtn=>elemtn.name)
      this.changeSelect(namesCuotas)
  }
}
