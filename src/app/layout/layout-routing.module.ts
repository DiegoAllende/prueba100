import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./container/main-layout/main-layout.component";
import {IconsComponent} from "../shared/components/icons/icons.component";
import { AuthGuard } from '@core/guards/auth.guard';
import { BlockLoginGuard } from '@core/guards/block-login.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "/auth/login", pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('../modulos/modulo-auth/modulo-auth.module').then(p => p.ModuloAuthModule),
    canActivate: [BlockLoginGuard],
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../modulos/modulo-layout/modulo-layout.module').then(p => p.ModuloLayoutModule)
      },
      {
        path: 'consultas',
        loadChildren: () => import('../modulos/modulo-consultas/modulo-consultas.module').then(p=>p.ModuloConsultasModule)
      },
      {
        path: 'pagos',
        loadChildren: () => import('../modulos/modulo-pagos/modulo-pagos.module').then(p=>p.ModuloPagosModule)
      },
      {
        path: 'transferencias',
        loadChildren: () => import('../modulos/modulo-transferencia/modulo-transferencia.module').then(p=>p.ModuloTransferenciaModule)
      },
      {
        path: 'pagos-servicios',
        loadChildren: () => import('../modulos/modulo-pagos-servicios/modulo-pagos-servicios.module').then(p=>p.ModuloPagosServiciosModule)
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'icons',
    component: IconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
