import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-segundo-paso',
  templateUrl: './detalle-segundo-paso.component.html',
  styleUrls: ['./detalle-segundo-paso.component.scss']
})
export class DetalleSegundoPasoComponent implements OnInit {

  @Input() listItemsSecondStep!:any

  constructor() { }

  ngOnInit(): void {
  }

}
