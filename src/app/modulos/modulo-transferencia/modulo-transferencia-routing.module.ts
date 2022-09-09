import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { INTER_PATHS, INTER_ROUTES } from '@utils/const-rutas';
import { ROLES } from '@utils/constantes';
import { CuentasOtroBancoComponent } from './container/cuentas-otro-banco/cuentas-otro-banco.component';
import { CuentasPropiasComponent } from './container/cuentas-propias/cuentas-propias.component';
import { CuentasTercerosComponent } from './container/cuentas-terceros/cuentas-terceros.component';
import { EnviarGiroComponent } from './container/enviar-giro/enviar-giro.component';

const routes: Routes = [
  {
    path: "", redirectTo: INTER_ROUTES.MAIN, pathMatch: "full"
  },
  {
    path: INTER_PATHS.TRAN_CUENTA_PROPIA,
    component: CuentasPropiasComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.LISTA_NEGRA_SI, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: INTER_PATHS.TRAN_CUENTA_TERCERO,
    component: CuentasTercerosComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.LISTA_NEGRA_SI, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: INTER_PATHS.TRAN_CUENTA_OTRO_BAMCO,
    component: CuentasOtroBancoComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.BLOQUEO_TEMP_SI]}
  },
  {
    path: INTER_PATHS.TRAN_ENVIAR_GIRO,
    component: EnviarGiroComponent,
    canActivate: [AuthGuard],
    data: {blockRoles: [ROLES.SIN_CARD, ROLES.LISTA_NEGRA_SI, ROLES.BLOQUEO_TEMP_SI]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloTransferenciaRoutingModule { }
