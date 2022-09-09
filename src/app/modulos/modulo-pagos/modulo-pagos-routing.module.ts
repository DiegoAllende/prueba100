import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { INTER_PATHS, INTER_ROUTES } from '@utils/const-rutas';
import { ROLES } from '@utils/constantes';
import { CreditosPropiosComponent } from './container/creditos-propios/creditos-propios.component';
import { CreditosTercerosComponent } from './container/creditos-terceros/creditos-terceros.component';
import { RecargasCelularComponent } from './container/recargas-celular/recargas-celular.component';
import { TarjetaCreditoComponent } from './container/tarjeta-credito/tarjeta-credito.component';

const routes: Routes = [
  {
    path: "", redirectTo: INTER_ROUTES.MAIN, pathMatch: "full"
  },
  {
    path: INTER_PATHS.PAGO_RECARGA,
    component: RecargasCelularComponent,
    canActivate: [AuthGuard],
  },
  {
    path: INTER_PATHS.PAGO_CREDITO_TARJETA,
    component: TarjetaCreditoComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.LISTA_NEGRA_SI, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: INTER_PATHS.PAGO_CREDITO_PROPIO,
    component: CreditosPropiosComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: INTER_PATHS.PAGO_CREDITO_TERCERO,
    component: CreditosTercerosComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.LISTA_NEGRA_SI, ROLES.BLOQUEO_TEMP_SI]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagosRoutingModule { }
