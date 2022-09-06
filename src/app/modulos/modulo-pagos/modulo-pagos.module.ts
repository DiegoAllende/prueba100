import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPagosRoutingModule } from './modulo-pagos-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CreditosPropiosComponent } from './container/creditos-propios/creditos-propios.component';
import { CreditosTercerosComponent } from './container/creditos-terceros/creditos-terceros.component';
import { TarjetaCreditoComponent } from './container/tarjeta-credito/tarjeta-credito.component';
import { PagoServiciosComponent } from './container/pago-servicios/pago-servicios.component';
import { RecargasCelularComponent } from './container/recargas-celular/recargas-celular.component';
import { ListaCuotasComponent } from './components/lista-cuotas/lista-cuotas.component';

@NgModule({
  declarations: [
    CreditosPropiosComponent,
    CreditosTercerosComponent,
    TarjetaCreditoComponent,
    PagoServiciosComponent,
    RecargasCelularComponent,
    ListaCuotasComponent
  ],
  imports: [
    CommonModule,
    ModuloPagosRoutingModule,
    SharedModule,
  ],
})
export class ModuloPagosModule { }
