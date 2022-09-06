import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloLayoutRoutingModule } from './modulo-layout-routing.module';
import { MainComponent } from './container/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ModuloLayoutRoutingModule,
    SharedModule
  ]
})
export class ModuloLayoutModule { }
