import { Component, Input, OnInit } from '@angular/core';
import { CreditoCliente, CreditoDatos, CreditoDatosAll } from '../../models/creditos.interface';

@Component({
  selector: 'app-informacion-creditos',
  templateUrl: './informacion-creditos.component.html',
  styleUrls: ['./informacion-creditos.component.scss']
})
export class InformacionCreditosComponent implements OnInit {
  @Input() creditoIn!:CreditoDatosAll;
  credito!: CreditoCliente;

  constructor() { }

  ngOnInit(): void {
    this.credito = this.creditoIn.credito;
  }

}
