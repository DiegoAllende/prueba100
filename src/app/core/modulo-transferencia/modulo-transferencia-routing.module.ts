import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasPropiasComponent } from './container/cuentas-propias/cuentas-propias.component';
import { CuentasTercerosComponent } from './container/cuentas-terceros/cuentas-terceros.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/main", pathMatch: "full"
  },
  {
    path: 'cuentas-propias',
    component: CuentasPropiasComponent
  },
  {
    path: 'cuentas-terceros',
    component: CuentasTercerosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloTransferenciaRoutingModule { }
