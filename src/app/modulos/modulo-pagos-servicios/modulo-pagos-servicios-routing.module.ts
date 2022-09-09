import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTER_PATHS } from '@utils/const-rutas';
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
    path: INTER_PATHS.PAGOSEV_LUZ,
    component: PagoLuzComponent
  },
  {
    path: INTER_PATHS.PAGOSEV_AGUA,
    component: PagoAguaComponent
  },
  {
    path: INTER_PATHS.PAGOSEV_EMPRESA_INST,
    component: PagoEmpresasInstitucionesComponent
  },
  {
    path: INTER_PATHS.PAGOSEV_UNIVERSIDAD,
    component: PagoUniversidadesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagosServiciosRoutingModule { }
