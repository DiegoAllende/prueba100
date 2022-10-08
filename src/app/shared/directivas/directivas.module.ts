import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosDecimalesDirective } from './dos-decimales.directive';
import { NumerosDirective } from './numeros.directive';



@NgModule({
  declarations: [
    DosDecimalesDirective,
    NumerosDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DosDecimalesDirective,
    NumerosDirective,
  ]
})
export class DirectivasModule { }
