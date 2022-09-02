import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPagosServiciosRoutingModule } from './modulo-pagos-servicios-routing.module';
import { PagoLuzComponent } from './container/pago-luz/pago-luz.component';
import { PagoAguaComponent } from './container/pago-agua/pago-agua.component';
import { PagoEmpresasInstitucionesComponent } from './container/pago-empresas-instituciones/pago-empresas-instituciones.component';
import { PagoUniversidadesComponent } from './container/pago-universidades/pago-universidades.component';
import { PagoServiciosMainComponent } from './container/pago-servicios-main/pago-servicios-main.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PagoLuzComponent,
    PagoAguaComponent,
    PagoEmpresasInstitucionesComponent,
    PagoUniversidadesComponent,
    PagoServiciosMainComponent
  ],
  imports: [
    CommonModule,
    ModuloPagosServiciosRoutingModule,
    SharedModule
  ]
})
export class ModuloPagosServiciosModule { }
