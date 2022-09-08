import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./container/main-layout/main-layout.component";
import {IconsComponent} from "../shared/components/icons/icons.component";
import { AuthGuard } from '@core/guards/auth.guard';
import { BlockLoginGuard } from '@core/guards/block-login.guard';
import { INTER_PATHS } from '@utils/const-rutas';

const routes: Routes = [
  {
    path: "", redirectTo: INTER_PATHS.AUTH_DEFAULT, pathMatch: "full"
  },
  {
    path: INTER_PATHS.AUTH_DEFAULT,
    loadChildren: () => import('../modulos/modulo-auth/modulo-auth.module').then(p => p.ModuloAuthModule),
    canActivate: [BlockLoginGuard],
  },
  {
    path: INTER_PATHS.MAIN_DEFAULT,
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../modulos/modulo-layout/modulo-layout.module').then(p => p.ModuloLayoutModule)
      },
      {
        path: INTER_PATHS.MAIN_CONSULTAS,
        loadChildren: () => import('../modulos/modulo-consultas/modulo-consultas.module').then(p=>p.ModuloConsultasModule)
      },
      {
        path: INTER_PATHS.MAIN_PAGOS,
        loadChildren: () => import('../modulos/modulo-pagos/modulo-pagos.module').then(p=>p.ModuloPagosModule)
      },
      {
        path: INTER_PATHS.MAIN_TRANSFERENCIA,
        loadChildren: () => import('../modulos/modulo-transferencia/modulo-transferencia.module').then(p=>p.ModuloTransferenciaModule)
      },
      {
        path: INTER_PATHS.MAIN_PAGOS_SERVICIOS,
        loadChildren: () => import('../modulos/modulo-pagos-servicios/modulo-pagos-servicios.module').then(p=>p.ModuloPagosServiciosModule)
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: "**", redirectTo: INTER_PATHS.AUTH_DEFAULT, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
