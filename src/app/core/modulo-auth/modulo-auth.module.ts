import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloAuthRoutingModule } from './modulo-auth-routing.module';
import { ConTarjetaComponent } from './components/con-tarjeta/con-tarjeta.component';
import { LoginComponent } from './container/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SinTarjetaComponent } from './components/sin-tarjeta/sin-tarjeta.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { GenerarLayoutComponent } from './layout/generar-layout/generar-layout.component';
import { SelloComponent } from './container/sello/sello.component';
import { ClaveComponent } from './container/clave/clave.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { LeftInfoComponent } from './components/left-info/left-info.component';
import { OlvidoClaveComponent } from './container/olvido-clave/olvido-clave.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { GenPasswordComponent } from './container/gen-password/gen-password.component';
import { PantallaExitoComponent } from './components/pantalla-exito/pantalla-exito.component';
import { SelloGenerarComponent } from './container/sello-generar/sello-generar.component';
import { InputTarjetaComponent } from './components/input-tarjeta/input-tarjeta.component';
import { InputDocumentoComponent } from './components/input-documento/input-documento.component';


@NgModule({
  declarations: [
    LoginComponent,
    ConTarjetaComponent,
    SinTarjetaComponent,
    LoginLayoutComponent,
    GenerarLayoutComponent,
    SelloComponent,
    ClaveComponent,
    AuthFooterComponent,
    LeftInfoComponent,
    OlvidoClaveComponent,
    AuthHeaderComponent,
    GenPasswordComponent,
    PantallaExitoComponent,
    SelloGenerarComponent,
    InputTarjetaComponent,
    InputDocumentoComponent
  ],
  imports: [
    CommonModule,
    ModuloAuthRoutingModule,
    SharedModule,
  ],
  exports: [
    LoginComponent,
    ConTarjetaComponent
  ]
})
export class ModuloAuthModule { }
