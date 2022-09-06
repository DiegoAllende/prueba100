import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloConsultasRoutingModule } from './modulo-consultas-routing.module';
import { ConsultasLayoutComponent } from './layout/consultas-layout/consultas-layout.component';
import { AhorrosComponent } from './container/ahorros/ahorros.component';
import { CreditosComponent } from './container/creditos/creditos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChequesRetencionesComponent } from './components/cheques-retenciones/cheques-retenciones.component';
import { SegurosComponent } from './container/seguros/seguros.component';
import { ListSegurosMobileComponent } from './components/list-seguros-mobile/list-seguros-mobile.component';
import { ListSegurosDesktopComponent } from './components/list-seguros-desktop/list-seguros-desktop.component';
import { ConsultaExitoComponent } from './components/consulta-exito/consulta-exito.component';
import { InformacionSegurosComponent } from './components/informacion-seguros/informacion-seguros.component';
import { BeneficiariosSegurosComponent } from './components/beneficiarios-seguros/beneficiarios-seguros.component';
import { InformacionCreditosComponent } from './components/informacion-creditos/informacion-creditos.component';


@NgModule({
  declarations: [
    ConsultasLayoutComponent,
    AhorrosComponent,
    CreditosComponent,
    ChequesRetencionesComponent,
    SegurosComponent,
    ListSegurosMobileComponent,
    ListSegurosDesktopComponent,
    ConsultaExitoComponent,
    InformacionSegurosComponent,
    BeneficiariosSegurosComponent,
    InformacionCreditosComponent
  ],
  imports: [
    CommonModule,
    ModuloConsultasRoutingModule,
    SharedModule,
  ]
})
export class ModuloConsultasModule { }
