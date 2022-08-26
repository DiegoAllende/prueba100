import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-tercer-paso',
  templateUrl: './detalle-tercer-paso.component.html',
  styleUrls: ['./detalle-tercer-paso.component.scss']
})
export class DetalleTercerPasoComponent implements OnInit {

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
