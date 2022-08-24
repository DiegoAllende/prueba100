import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPagosRoutingModule } from './modulo-pagos-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuloPagosRoutingModule,
    SharedModule,
  ]
})
export class ModuloPagosModule { }
