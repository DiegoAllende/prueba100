import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sello-icon',
  templateUrl: './sello-icon.component.html',
})
export class SelloIconComponent implements OnInit {
  @Input() iconNombre:string = "Shape.svg";
  @Input() iconByte:string = "";
  @Input() tamanio:string = "md";
  @Input() check: string = "";

  iconUrl = "assets/icons/sellos/";
  validarTamaño = ["xs", "sm", "md", "lg"];

  tamanioaux = "sello-icon-";

  ngOnInit(): void {
    this.iconUrl = this.iconUrl + this.iconNombre;
    this.validarTamanio();
  }
  
  validarTamanio() {
    if(this.validarTamaño.includes(this.tamanio)) {
      this.tamanioaux = this.tamanioaux + this.tamanio;
    } else {
      this.tamanioaux = this.tamanioaux+"md";
    }
  }

}
