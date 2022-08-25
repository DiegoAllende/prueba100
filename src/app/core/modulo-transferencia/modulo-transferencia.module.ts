import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloTransferenciaRoutingModule } from './modulo-transferencia-routing.module';
import { CuentasPropiasComponent } from './container/cuentas-propias/cuentas-propias.component';
import { CuentasTercerosComponent } from './container/cuentas-terceros/cuentas-terceros.component';
import { SharedModule } from '@shared/shared.module';
import { CuentasOtroBancoComponent } from './container/cuentas-otro-banco/cuentas-otro-banco.component';
import { EnviarGiroComponent } from './container/enviar-giro/enviar-giro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CuentasPropiasComponent,
    CuentasTercerosComponent,
    CuentasOtroBancoComponent,
    EnviarGiroComponent,
  ],
  imports: [
    CommonModule,
    ModuloTransferenciaRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ModuloTransferenciaModule { }
