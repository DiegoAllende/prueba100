import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getformatoTarjeta, getPartesTarjeta, getPosLetraTarjeta, obtenerMask } from '@shared/utils/funcion-enmascarar';

@Component({
  selector: 'input-tarjeta',
  templateUrl: './input-tarjeta.component.html',
  styleUrls: ['./input-tarjeta.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTarjetaComponent),
      multi: true
    }
  ]
})
export class InputTarjetaComponent implements OnInit, OnDestroy, ControlValueAccessor {
  teclasPermitidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ArrowLeft", "ArrowRight"];
  teclasPermitidasAll = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ArrowLeft", "ArrowRight", "Backspace", "Delete"];
  PIN = "444686";
  PIN_MASK = "4446-86";
  value = {
    numTarjeta: "",
    numTarjetaMask: "",
  };

  isVerTarjeta = false;
  tiempoMaskTarjeta: any;
  currentValue = "";
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearTimeout(this.tiempoMaskTarjeta);
  }

  //Inicio: Implementar metodos de Form
  onChange = (_: any) => {};
  onTouched = () => { };

  writeValue(value: any): void {
    if (value) {
      this.currentValue = value;
      this.value.numTarjeta = value;
      this.value.numTarjetaMask = this.obtenerFormatoTarjeta(obtenerMask(value));
    } else {
      this.value.numTarjeta = "";
      this.value.numTarjetaMask = "";
    };
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  
  setNewValue(value: string) {  // metodo para enviar el nuevo valor
    this.currentValue = value;
    this.onChange(this.currentValue);
  }
  //Fin

  //TARJETA
  keyDownTarjeta(e: any) {
    if (!this.isVerTarjeta) {
      if (!this.teclasPermitidas.includes(e.key)) {
        e.preventDefault();
      } else {
        clearTimeout(this.tiempoMaskTarjeta);
        let valLimpio = this.limpiarInputTarjeta(this.value.numTarjetaMask);
        this.value.numTarjetaMask = this.obtenerFormatoTarjeta(obtenerMask(valLimpio));
      }
    }
    if (this.isVerTarjeta && !this.teclasPermitidasAll.includes(e.key)) {
      e.preventDefault();
    }
  }

  changeInputTarjeta(valInput: string) {
    let valLimpio = this.limpiarInputTarjeta(valInput);
    if (this.isVerTarjeta) {
      this.value.numTarjetaMask = this.obtenerFormatoTarjeta(valLimpio);
      this.value.numTarjeta = valLimpio;

      this.setNewValue(this.value.numTarjeta);
    } else {
      let objLetra = getPosLetraTarjeta(valLimpio);
      let objPartes = getPartesTarjeta(this.value.numTarjeta, objLetra.pos, objLetra.letra);
      this.value.numTarjetaMask = this.obtenerFormatoTarjeta(objPartes.valorMask);
      this.value.numTarjeta = objPartes.valor;
      this.tiempoMaskTarjeta = setTimeout(() => {
        this.value.numTarjetaMask = this.obtenerFormatoTarjeta(obtenerMask(valLimpio));
      }, 1000);

      this.setNewValue(this.value.numTarjeta);
    }
  }

  mostrarOcultarTarjeta() {
    this.isVerTarjeta = !this.isVerTarjeta;
    if (this.isVerTarjeta) this.value.numTarjetaMask = this.obtenerFormatoTarjeta(this.value.numTarjeta);
    else {
      let newVal = this.limpiarInputTarjeta(this.value.numTarjeta);
      this.value.numTarjetaMask = this.obtenerFormatoTarjeta(obtenerMask(newVal));
    }
  }

  limpiarInputTarjeta(val: string): string {
    return val.replace(/-/g, "");
  }

  obtenerFormatoTarjeta(val: string): string {
    return getformatoTarjeta(val, "-", 10);
  }

}
