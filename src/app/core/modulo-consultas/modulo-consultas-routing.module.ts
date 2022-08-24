import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaExitoComponent } from './components/consulta-exito/consulta-exito.component';
import { AhorrosComponent } from './container/ahorros/ahorros.component';
import { CreditosComponent } from './container/creditos/creditos.component';
import { SegurosComponent } from './container/seguros/seguros.component';
import { ConsultasLayoutComponent } from './layout/consultas-layout/consultas-layout.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: ConsultasLayoutComponent,
  //   children:[
  //     {
  //       path: 'ahorros',
  //       component: AhorrosComponent
  //     },
  //     {
  //       path: 'creditos',
  //       component: CreditosComponent
  //     }

  //   ]
  // },
  {
    path: "", redirectTo: "/main", pathMatch: "full"
  },
  {
    path: 'ahorros',
    component: AhorrosComponent
  },
  {
    path: 'creditos',
    component: CreditosComponent
  },
  {
    path: 'seguros',
    component: SegurosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloConsultasRoutingModule { }
