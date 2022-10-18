import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dirNumero]'
})
export class NumerosDirective {
  private isPaste: boolean = false;
  private isTecla: boolean = true;
  private elNat;
  private valFinal: string = "";

  constructor(private el: ElementRef) {
    this.elNat = this.el.nativeElement;
  }

  //VALIDAR SI SE DIGITO UN NUMERO
  @HostListener('keypress', ['$event']) onKeyPress(e: KeyboardEvent) {
    this.isTecla = true;
    // if (!String(e.key).match(/[0-9]/g)) e.preventDefault();
  }
  //VALIDAR SI SE REALIZO UN CTRL-V O PEGAR CON EL MOUSE
  @HostListener('paste', ['$event']) onPaste() {

    this.isPaste = true;
  }
  //AL PEGAR EL VALOR, OBTENER SOLO LOS NUMEROS Y ACTUALIZAR EL INPUT
  @HostListener('ngModelChange', ['$event']) onInput(val: string) {

    if (this.isTecla || this.isPaste) {
      this.isPaste = false;
      this.isTecla = false;
      this.valFinal = val.replace(/[^0-9]+/g, "");
      setTimeout(() => {
        this.elNat.value = this.valFinal;
        let T = document.createEvent("Event");
        T.initEvent("input", true, true);
        Object.defineProperty(T, "target", { value: this.elNat, enumerable: true })
        this.elNat.dispatchEvent(T);
      });
    }
  }

}
