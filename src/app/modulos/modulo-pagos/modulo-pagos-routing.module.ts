import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLES } from '@utils/constantes';
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
    component: PagoServiciosComponent,
    data: {blockRoles: [ROLES.CON_CARD]}
  },
  {
    path: 'recargas',
    component: RecargasCelularComponent,
    data: {blockRoles: [ROLES.CON_CARD]}
  },
  {
    path: 'tarjeta-credito',
    component: TarjetaCreditoComponent,
    data: {blockRoles: [ROLES.CON_CARD]}
  },
  {
    path: 'creditos-propios',
    component: CreditosPropiosComponent,
    data: {blockRoles: [ROLES.CON_CARD, ROLES.LISTA_NEGRA_NO]}
  },
  {
    path: 'creditos-terceros',
    component: CreditosTercerosComponent,
    data: {blockRoles: [ROLES.CON_CARD]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagosRoutingModule { }
