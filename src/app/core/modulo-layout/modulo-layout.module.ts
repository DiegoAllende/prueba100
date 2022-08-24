import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloLayoutRoutingModule } from './modulo-layout-routing.module';
import { MainComponent } from './container/main/main.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ModuloLayoutRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ModuloLayoutModule { }
