import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguroCliente, SeguroDatosAll } from '../../models/microseguro.interface';

@Component({
  selector: 'app-informacion-seguros',
  templateUrl: './informacion-seguros.component.html',
  styleUrls: ['./informacion-seguros.component.scss']
})
export class InformacionSegurosComponent implements OnInit {
  @Input() seguroIn!:SeguroDatosAll;
  seguro!: SeguroCliente;

  constructor() { }

  ngOnInit(): void {
    this.seguro = this.seguroIn.seguro;
  }


}
