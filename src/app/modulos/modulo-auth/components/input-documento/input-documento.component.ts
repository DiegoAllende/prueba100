import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getPartesTarjeta, getPosLetraTarjeta, obtenerMask } from '@utils/funcion-enmascarar';

@Component({
  selector: 'input-documento',
  templateUrl: './input-documento.component.html',
  styleUrls: ['./input-documento.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDocumentoComponent),
      multi: true
    }
  ]
})
export class InputDocumentoComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private regex: RegExp = new RegExp(/[0-9]/g);
  teclasPermitidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ArrowLeft", "ArrowRight"];
  teclasPermitidasAll = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ArrowLeft", "ArrowRight", "Backspace", "Delete"];

  value = {
    numDocumento: "",
    numDocumentoMask: "",
  };

  isVerDocumento = false;
  tiempoMaskDocumento: any;
  currentValue = "";
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearTimeout(this.tiempoMaskDocumento);
  }

  //Inicio: Implementar metodos de Form
  onChange = (_: any) => {};
  onTouched = () => { };

  writeValue(value: any): void {
    if (value) {
      this.currentValue = value;
      this.value.numDocumento = value;
      this.value.numDocumentoMask = obtenerMask(value);
    } else {
      this.value.numDocumento = "";
      this.value.numDocumentoMask = "";
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

  // DOCUMENTO
  keyDownDocumento(e: any) {
    if (!this.isVerDocumento) {

      // if (!this.teclasPermitidas.includes(e.key)) {
      if (!String(e.key).match(this.regex)) {
        e.preventDefault();
      } else {
        clearTimeout(this.tiempoMaskDocumento);
        this.value.numDocumentoMask = obtenerMask(this.value.numDocumentoMask);
      }
    }
    if (this.isVerDocumento && !this.teclasPermitidasAll.includes(e.key)) {
      e.preventDefault();
    }
  }

  changeInputDocumento(valInput: string) {
    let valLimpio = valInput;
    if (this.isVerDocumento) {
      this.value.numDocumentoMask = valLimpio;
      this.value.numDocumento = valLimpio;

      this.setNewValue(this.value.numDocumento);
    } else {
      let objLetra = getPosLetraTarjeta(valLimpio);
      let objPartes = getPartesTarjeta(this.value.numDocumento, objLetra.pos, objLetra.letra);
      this.value.numDocumentoMask = objPartes.valorMask;
      this.value.numDocumento = objPartes.valor;
      this.tiempoMaskDocumento = setTimeout(() => {
        this.value.numDocumentoMask = obtenerMask(valLimpio);
      }, 1000);

      this.setNewValue(this.value.numDocumento);
    }
  }

  mostrarOcultarDocumento() {
    this.isVerDocumento = !this.isVerDocumento;
    if (this.isVerDocumento) this.value.numDocumentoMask = this.value.numDocumento;
    else this.value.numDocumentoMask = obtenerMask(this.value.numDocumento);
  }

}
