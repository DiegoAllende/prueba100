import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() isDisabled: boolean = false;
  @Input() maxLength: number = 8;
  isDisabled2: boolean = false;
  teclasPermitidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ArrowLeft", "ArrowRight", "Backspace"];

  currentValue = "";
  value = {
    numDocumento: "",
    numDocumentoMask: "",
  };

  isVerDocumento = false;
  tiempoMaskDocumento: any;

  constructor() {
    // this.currentValue = "";
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearTimeout(this.tiempoMaskDocumento);
  }

  //Inicio: Implementar metodos de Form
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    if (value) {
      this.currentValue = value;
      this.value.numDocumento = value;
      this.value.numDocumentoMask = this.maskNum(this.value.numDocumento);
    } else {
      this.currentValue = "";
      this.value.numDocumento = "";
      this.value.numDocumentoMask = "";
    }
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }
  setDisabledState(isDisabled2: boolean): void {
    this.isDisabled2 = isDisabled2;
  }

  setNewValue(value: string) {  // metodo para enviar el nuevo valor
    this.currentValue = value;
    this.onChange(this.currentValue);
  }

  marcarTouched() { // metodo para marcar como touched
    this.onTouched();
  }
  //Fin

  keyIn: string = "";
  isDelete: boolean = false;

  keyDownDocumento(e: any) {
    this.keyIn = e.key;
    this.isDelete = this.keyIn === "Backspace";
    if (!this.teclasPermitidas.includes(e.key)) {
      e.preventDefault();
    }
  }

  eInput(eInputVal: HTMLInputElement) {
    clearTimeout(this.tiempoMaskDocumento);
    this.validarResp(eInputVal);
  }

  validarResp(eInput2: HTMLInputElement) {
    let pos = Number(eInput2.selectionStart);
    let auxAr = this.value.numDocumento.split("");

    if (this.isDelete) {
      auxAr.splice(pos, 1);
      let valUnido = this.unirNum(auxAr);

      this.value.numDocumento = valUnido;
      eInput2.value = this.isVerDocumento ? this.value.numDocumento : this.maskNum(this.value.numDocumento);

      eInput2.selectionStart = pos;
      eInput2.selectionEnd = pos;

      this.setNewValue(this.value.numDocumento);

    } else {
      auxAr.splice(pos - 1, 0, this.keyIn);
      let valUnido = this.unirNum(auxAr);

      this.value.numDocumento = valUnido;
      eInput2.value = this.isVerDocumento ? valUnido : this.maskNumAux(this.maskNum(valUnido), pos - 1, this.keyIn);

      if (!this.isVerDocumento) {
        this.tiempoMaskDocumento = setTimeout(() => {
          eInput2.value = this.maskNum(this.value.numDocumento);
          eInput2.selectionStart = pos;
          eInput2.selectionEnd = pos;
        }, 800);
      }

      eInput2.selectionStart = pos;
      eInput2.selectionEnd = pos;

      this.setNewValue(this.value.numDocumento);
    }
  }

  mostrarOcultarDocumento() {
    this.isVerDocumento = !this.isVerDocumento;
    if (this.isVerDocumento) this.value.numDocumentoMask = this.value.numDocumento;
    else {
      this.value.numDocumentoMask = this.maskNum(this.value.numDocumento);
    }
  }

  maskNumAux(val: string, pos: number, key: string): string {
    let aux = val.split("");
    aux.splice(pos, 1);
    aux.splice(pos, 0, key);
    return this.unirNum(aux);
  }

  maskNum(val: string): string {
    return val.replace(/[0-9a-zA-Z]/g, "*");
  }

  unirNum(val: string[]): string {
    return val.join("");
  }

}
