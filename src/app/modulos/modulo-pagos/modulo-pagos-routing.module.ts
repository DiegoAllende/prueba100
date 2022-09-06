import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosPropiosComponent } from './container/creditos-propios/creditos-propios.component';
import { CreditosTercerosComponent } from './container/creditos-terceros/creditos-terceros.component';
import { PagoServiciosComponent } from './container/pago-servicios/pago-servicios.component';
import { RecargasCelularComponent } from './container/recargas-celular/recargas-celular.component';
import { TarjetaCreditoComponent } from './container/tarjeta-credito/tarjeta-credito.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/main", pathMatch: "full"
  },
  {
    path: 'servicios',
    component: PagoServiciosComponent
  },
  {
    path: 'recargas',
    component: RecargasCelularComponent
  },
  {
    path: 'tarjeta-credito',
    component: TarjetaCreditoComponent
  },
  {
    path: 'creditos-propios',
    component: CreditosPropiosComponent
  },
  {
    path: 'creditos-terceros',
    component: CreditosTercerosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagosRoutingModule { }
