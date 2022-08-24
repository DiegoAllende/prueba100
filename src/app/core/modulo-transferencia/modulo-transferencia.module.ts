import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloTransferenciaRoutingModule } from './modulo-transferencia-routing.module';
import { CuentasPropiasComponent } from './container/cuentas-propias/cuentas-propias.component';
import { CuentasTercerosComponent } from './container/cuentas-terceros/cuentas-terceros.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CuentasPropiasComponent,
    CuentasTercerosComponent,
  ],
  imports: [
    CommonModule,
    ModuloTransferenciaRoutingModule,
    SharedModule
  ]
})
export class ModuloTransferenciaModule { }
