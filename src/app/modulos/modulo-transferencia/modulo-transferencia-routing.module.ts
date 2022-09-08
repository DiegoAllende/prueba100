import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { ROLES } from '@utils/constantes';
import { CuentasOtroBancoComponent } from './container/cuentas-otro-banco/cuentas-otro-banco.component';
import { CuentasPropiasComponent } from './container/cuentas-propias/cuentas-propias.component';
import { CuentasTercerosComponent } from './container/cuentas-terceros/cuentas-terceros.component';
import { EnviarGiroComponent } from './container/enviar-giro/enviar-giro.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/main", pathMatch: "full"
  },
  {
    path: 'cuentas-propias',
    component: CuentasPropiasComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.CON_CARD]}
  },
  {
    path: 'cuentas-terceros',
    component: CuentasTercerosComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.LISTA_NEGRA_SI, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: 'cuentas-otros-bancos',
    component: CuentasOtroBancoComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: 'enviar-giro',
    component: EnviarGiroComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.CON_CARD]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloTransferenciaRoutingModule { }
