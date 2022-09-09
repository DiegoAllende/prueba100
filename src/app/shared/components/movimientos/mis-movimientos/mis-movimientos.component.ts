import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movimientos } from '@modulos/modulo-consultas/models/movimientos.model';
import { fnDatesMonthYear } from '@utils/funciones';

@Component({
  selector: 'app-mis-movimientos',
  templateUrl: './mis-movimientos.component.html',
  styleUrls: ['./mis-movimientos.component.scss']
})
export class MisMovimientosComponent {
  @Output() eVerPdf: EventEmitter<any> = new EventEmitter();
  @Input() lista: Movimientos[] = [];
  
  listDates:any[] = [];
  mesAnio:string = '';

  constructor() {
    this.listDates = fnDatesMonthYear(12);
  }

  btnVerPdf() {
    this.eVerPdf.emit(this.mesAnio);
  }

}
