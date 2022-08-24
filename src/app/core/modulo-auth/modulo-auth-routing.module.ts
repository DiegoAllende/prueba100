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

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'sello', component: SelloComponent },
      { path: 'clave', component: ClaveComponent },
    ]
  },
  {
    path: 'generar',
    component: GenerarLayoutComponent,
    children: [
      { path: '', component: AuthFooterComponent },
      { path: 'clave-internet', component: GenPasswordComponent },
      { path: 'olvide-clave', component: OlvidoClaveComponent },
      { path: 'sello', component: SelloGenerarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloAuthRoutingModule { }
