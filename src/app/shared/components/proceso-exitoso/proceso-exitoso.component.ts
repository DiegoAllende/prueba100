import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceso-exitoso',
  templateUrl: './proceso-exitoso.component.html',
  styleUrls: ['./proceso-exitoso.component.scss']
})
export class ProcesoExitosoComponent implements OnInit {

  @Input() icono: string = "";
  @Input() titulo: string = "";
  @Input() numOp: string = "";
  @Input() dataArray: object = [];

  dataTransaccion:any;

  iconoEnd: string = "assets/icons/";

  ngOnInit(): void {
    this.iconoEnd = this.iconoEnd + this.icono + ".svg";
    this.dataTransaccion = this.dataArray;
  }

}
