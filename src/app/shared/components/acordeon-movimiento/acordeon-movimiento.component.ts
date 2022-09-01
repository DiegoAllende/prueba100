import { Component, Input } from '@angular/core';
import { Movimientos } from 'src/app/core/modulo-consultas/models/movimientos.model';

@Component({
  selector: 'app-acordeon-movimiento',
  templateUrl: './acordeon-movimiento.component.html',
  styleUrls: ['./acordeon-movimiento.component.scss']
})
export class AcordeonMovimientoComponent {
  @Input() movimiento!:Movimientos;

  constructor() {}
  
  toggle() {
    this.movimiento.active = !this.movimiento.active;
  }
}
