import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoAguaComponent } from './container/pago-agua/pago-agua.component';
import { PagoEmpresasInstitucionesComponent } from './container/pago-empresas-instituciones/pago-empresas-instituciones.component';
import { PagoLuzComponent } from './container/pago-luz/pago-luz.component';
import { PagoServiciosMainComponent } from './container/pago-servicios-main/pago-servicios-main.component';
import { PagoUniversidadesComponent } from './container/pago-universidades/pago-universidades.component';

const routes: Routes = [
  
  {
    path: '',
    component: PagoServiciosMainComponent
  },
  {
    path: 'luz',
    component: PagoLuzComponent
  },
  {
    path: 'agua',
    component: PagoAguaComponent
  },
  {
    path: 'empresas-instituciones',
    component: PagoEmpresasInstitucionesComponent
  },
  {
    path: 'universidades',
    component: PagoUniversidadesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagosServiciosRoutingModule { }
