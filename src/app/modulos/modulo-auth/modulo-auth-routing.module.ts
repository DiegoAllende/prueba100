import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { ClaveComponent } from './container/clave/clave.component';
import { GenPasswordComponent } from './container/gen-password/gen-password.component';
import { LoginComponent } from './container/login/login.component';
import { SelloComponent } from './container/sello/sello.component';
import { GenerarLayoutComponent } from './layout/generar-layout/generar-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { OlvidoClaveComponent } from "./container/olvido-clave/olvido-clave.component";
import { SelloGenerarComponent } from './container/sello-generar/sello-generar.component';
import { CambioClaveTemporalComponent } from './container/cambio-clave-temporal/cambio-clave-temporal.component';
import { INTER_PATHS } from '@utils/const-rutas';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', redirectTo: INTER_PATHS.AUTH_LOGIN, pathMatch: 'full' },
      { path: INTER_PATHS.AUTH_LOGIN, component: LoginComponent },
      { path: INTER_PATHS.AUTH_SELLO, component: SelloComponent },
      { path: INTER_PATHS.AUTH_CLAVE, component: ClaveComponent },
    ]
  },
  {
    path: INTER_PATHS.GENERAR_DEFAULT,
    component: GenerarLayoutComponent,
    children: [
      { path: '', component: AuthFooterComponent },
      { path: INTER_PATHS.GENERAR_CLAVE_INTERNET, component: GenPasswordComponent },
      { path: INTER_PATHS.GENERAR_CLAVE_OLVIDE, component: OlvidoClaveComponent },
      { path: INTER_PATHS.GENERAR_SELLO, component: SelloGenerarComponent },
      { path: INTER_PATHS.GENERAR_CLAVE_CAMBIAR_TEMP,component:CambioClaveTemporalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloAuthRoutingModule { }
