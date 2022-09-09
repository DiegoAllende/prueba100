import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { INTER_PATHS, INTER_ROUTES, ROLES_RESOLVE } from '@utils/const-rutas';
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
    data: {miroles: ROLES_RESOLVE.TRAN_CUENTA_PROPIA}
  },
  {
    path: INTER_PATHS.TRAN_CUENTA_TERCERO,
    component: CuentasTercerosComponent,
    canActivate: [AuthGuard],
    data: {miroles: ROLES_RESOLVE.TRAN_CUENTA_TERCERO}
  },
  {
    path: INTER_PATHS.TRAN_CUENTA_OTRO_BAMCO,
    component: CuentasOtroBancoComponent,
    canActivate: [AuthGuard],
    data: {miroles: ROLES_RESOLVE.TRAN_CUENTA_OTRO_BAMCO}
  },
  {
    path: INTER_PATHS.TRAN_ENVIAR_GIRO,
    component: EnviarGiroComponent,
    canActivate: [AuthGuard],
    data: {miroles: ROLES_RESOLVE.TRAN_ENVIAR_GIRO}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloTransferenciaRoutingModule { }
