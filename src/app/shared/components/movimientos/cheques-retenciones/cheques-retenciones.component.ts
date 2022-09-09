import { Component, Input } from '@angular/core';
import { Retenciones } from '@modulos/modulo-consultas/models/retenciones.model';

@Component({
  selector: 'app-cheques-retenciones',
  templateUrl: './cheques-retenciones.component.html',
  styleUrls: ['./cheques-retenciones.component.scss']
})
export class ChequesRetencionesComponent {
  @Input() lista: Retenciones[];

  constructor() {
    this.lista = [];
  }

}
