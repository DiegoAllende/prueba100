import { Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputTarjetaComponent implements OnDestroy, ControlValueAccessor {
  @Input() isDisabled: boolean = false;
  teclasPermitidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ArrowLeft", "ArrowRight", "Backspace"];
  PIN = "444686";
  PIN_MASK = "4446-86";

  currentValue;
  value = {
    numTarjeta: "",
    numTarjetaMask: "",
  };

  constructor() {
    this.currentValue = "";
  }

  ngOnDestroy(): void {
    clearTimeout(this.tiempoMaskNum);
  }

  //Inicio: Implementar metodos de Form
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {  
    
    if (value) {
      this.currentValue = value;
      this.value.numTarjeta = this.getformatoTarjeta(value);
      this.value.numTarjetaMask = this.maskNumInit(this.value.numTarjeta);
    } else {
      this.currentValue = "";
      this.value.numTarjeta = "";
      this.value.numTarjetaMask = "";
    }
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

  marcarTouched() { // metodo para marcar como touched
    this.onTouched();
  }
  //Fin

  keyIn: string = "";
  isDelete: boolean = false;
  tiempoMaskNum: any;
  isVerTarjeta: boolean = false;
  listaSaltos = [2, 3, 7, 8];

  keyDownTarjeta(e: any) {
    this.keyIn = e.key;
    this.isDelete = this.keyIn === "Backspace";
    if (!this.teclasPermitidas.includes(e.key)) {
      e.preventDefault();
    }
  }

  eInput(eInputVal: HTMLInputElement) {
    clearTimeout(this.tiempoMaskNum);
    this.validarResp(eInputVal);
  }

  validarResp(eInput2: HTMLInputElement) {
    let pos = Number(eInput2.selectionStart);
    let auxAr = this.value.numTarjeta.split("");

    if (this.isDelete) {
      let backGuion = this.getBackGuion(this.value.numTarjeta, pos);
      auxAr.splice(pos - backGuion, 1);
      let valUnido = this.unirNum(auxAr);

      this.value.numTarjeta = this.getformatoTarjeta(this.limpiarNum(valUnido));
      eInput2.value = this.isVerTarjeta ? this.value.numTarjeta : this.maskNum(this.value.numTarjeta);

      eInput2.selectionStart = pos;
      eInput2.selectionEnd = pos;

      this.setNewValue(this.limpiarNum(this.value.numTarjeta));

    } else {
      auxAr.splice(pos - 1, 0, this.keyIn);
      let valUnido = this.unirNum(auxAr);

      this.value.numTarjeta = this.getformatoTarjeta(this.limpiarNum(valUnido));
      eInput2.value = this.isVerTarjeta ? this.value.numTarjeta : this.maskNumAux(this.maskNum(this.value.numTarjeta), pos - 1, this.keyIn);

      if (!this.isVerTarjeta) {
        this.tiempoMaskNum = setTimeout(() => {
          eInput2.value = this.maskNum(this.value.numTarjeta);
          eInput2.selectionStart = this.listaSaltos.includes(pos) ? pos + 1 : pos;
          eInput2.selectionEnd = this.listaSaltos.includes(pos) ? pos + 1 : pos;
        }, 800);
      }

      eInput2.selectionStart = this.listaSaltos.includes(pos) ? pos + 1 : pos;
      eInput2.selectionEnd = this.listaSaltos.includes(pos) ? pos + 1 : pos;

      this.setNewValue(this.limpiarNum(this.value.numTarjeta));
    }
  }

  mostrarOcultarTarjeta() {
    this.isVerTarjeta = !this.isVerTarjeta;
    if (this.isVerTarjeta) this.value.numTarjetaMask = this.value.numTarjeta;
    else {
      this.value.numTarjetaMask = this.maskNum(this.value.numTarjeta);
    }
  }

  getformatoTarjeta(texto: string): string {
    let resp = "";
    let valArray = texto.split("");
    valArray.forEach((_item, index) => {
      resp = resp + texto.charAt(index);
      if (((index + 3) % 4) === 0) {
        if (index < 9) resp = resp + "-";
      }
    });
    return resp;
  }

  getBackGuion(val: string, pos: number): number {
    let aux = val.split("");
    return aux.splice(pos, 1).join("") === "-" ? 1 : 0;
  }

  limpiarNum(val: string): string {
    return val.replace(/\*/g, "").replace(/-/g, "");
  }

  maskNumAux(val: string, pos: number, key: string): string {
    let aux = val.split("");
    let aa = [2, 7].includes(pos) ? 1 : 0;
    aux.splice(pos + aa, 1);
    aux.splice(pos + aa, 0, key);
    return this.unirNum(aux);
  }

  maskNum(val: string): string {
    return val.replace(/[0-9]/g, "*");
  }

  maskNumInit(val: string): string {
    let auxFinal = "";
    let aux = val.split("");
    aux.forEach((x, index) => {
      if(index > 7 || x === "-") {
        auxFinal = auxFinal + x
      } else {
        auxFinal = auxFinal + "*" 
      }
    })
    return auxFinal;
  }

  unirNum(val: string[]): string {
    return val.join("");
  }

}

