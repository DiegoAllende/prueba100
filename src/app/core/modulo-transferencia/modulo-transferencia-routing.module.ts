import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: CuentasPropiasComponent
  },
  {
    path: 'cuentas-terceros',
    component: CuentasTercerosComponent
  },
  {
    path: 'cuentas-otros-bancos',
    component: CuentasOtroBancoComponent
  },
  {
    path: 'enviar-giro',
    component: EnviarGiroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloTransferenciaRoutingModule { }
