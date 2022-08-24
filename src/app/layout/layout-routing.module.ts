import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./container/main-layout/main-layout.component";
import {IconsComponent} from "../shared/components/icons/icons.component";
import { AuthGuard } from '@shared/guards/auth.guard';
import { BlockLoginGuard } from '@shared/guards/block-login.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "/auth/login", pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('../core/modulo-auth/modulo-auth.module').then(p => p.ModuloAuthModule),
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../core/modulo-layout/modulo-layout.module').then(p => p.ModuloLayoutModule)
      },
      {
        path: 'consultas',
        loadChildren: () => import('../core/modulo-consultas/modulo-consultas.module').then(p=>p.ModuloConsultasModule)
      },
      {
        path: 'pagos',
        loadChildren: () => import('../core/modulo-pagos/modulo-pagos.module').then(p=>p.ModuloPagosModule)
      },
      {
        path: 'transferencias',
        loadChildren: () => import('../core/modulo-transferencia/modulo-transferencia.module').then(p=>p.ModuloTransferenciaModule)
      },
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
