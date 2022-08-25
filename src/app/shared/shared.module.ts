import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material.module';
import { PadNumericoComponent } from './components/pad-numerico/pad-numerico.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaComponent } from '../core/modulo-auth/components/recaptcha/recaptcha.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { CardAhorrosComponent } from './components/card-ahorros/card-ahorros.component';
import { ContadorComponent } from './components/contador/contador.component';
import { AcordeonMovimientoComponent } from './components/acordeon-movimiento/acordeon-movimiento.component';
import { SelloIconComponent } from './components/sello-icon/sello-icon.component';
import { IconsComponent } from './components/icons/icons.component';
import { IconLockSquareComponent } from './components/icons/icon-lock-square/icon-lock-square.component';
import { IconUserComponent } from './components/icons/icon-user/icon-user.component';
import { IconBorrarComponent } from './components/icons/icon-borrar/icon-borrar.component';
import { IconDeleteComponent } from './components/icons/icon-delete/icon-delete.component';
import { IconTarjetaComponent } from './components/icons/icon-tarjeta/icon-tarjeta.component';
import { IconLlaveComponent } from './components/icons/icon-llave/icon-llave.component';
import { IconSelloDeSeguridadComponent } from './components/icons/icon-sello-de-seguridad/icon-sello-de-seguridad.component';
import { IconBilleteraComponent } from './components/icons/icon-billetera/icon-billetera.component';
import { IconPagosComponent } from './components/icons/icon-pagos/icon-pagos.component';
import { IconTransferenciaComponent } from './components/icons/icon-transferencia/icon-transferencia.component';
import { IconServiciosComponent } from './components/icons/icon-servicios/icon-servicios.component';
import { IconCelularComponent } from './components/icons/icon-celular/icon-celular.component';
import { IconPersonComponent } from './components/icons/icon-person/icon-person.component';
import { IconPersonasComponent } from './components/icons/icon-personas/icon-personas.component';
import { IconBancoComponent } from './components/icons/icon-banco/icon-banco.component';
import { IconDimeroComponent } from './components/icons/icon-dimero/icon-dimero.component';
import { IconFlechaDerechaComponent } from './components/icons/icon-flecha-derecha/icon-flecha-derecha.component';
import { IconFlechaAbajoComponent } from './components/icons/icon-flecha-abajo/icon-flecha-abajo.component';
import { IconPowerComponent } from './components/icons/icon-power/icon-power.component';
import { IconRelojComponent } from './components/icons/icon-reloj/icon-reloj.component';
import { IconCreditoComponent } from './components/icons/icon-credito/icon-credito.component';
import { IconEscudoSeguroComponent } from './components/icons/icon-escudo-seguro/icon-escudo-seguro.component';
import { IconInfoComponent } from './components/icons/icon-info/icon-info.component';
import { SelloListaComponent } from './components/sello-lista/sello-lista.component';
import { IconOjoCerradoComponent } from './components/icons/icon-ojo-cerrado/icon-ojo-cerrado.component';
import { IconOjoAbiertoComponent } from './components/icons/icon-ojo-abierto/icon-ojo-abierto.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { IconArrowRightComponent } from './components/icons/icon-arrow-right/icon-arrow-right.component';
import { IconFlechaArribaComponent } from './components/icons/icon-flecha-arriba/icon-flecha-arriba.component';
import { PlantillaInfoSimpleComponent } from './components/plantilla-info-simple/plantilla-info-simple.component';
import { PlantillaInfoComplejaComponent } from './components/plantilla-info-compleja/plantilla-info-compleja.component';
import { LoaderComponent } from './components/loader/loader.component';
import { IconCloseComponent } from './components/icons/icon-close/icon-close.component';
import { IconEstrellaComponent } from './components/icons/icon-estrella/icon-estrella.component';
import { AgregarFavoritoComponent } from './components/agregar-favorito/agregar-favorito.component';
import { ClaveSmsComponent } from './components/clave-sms/clave-sms.component';
import { IconReloadComponent } from './components/icons/icon-reload/icon-reload.component';
import { ProcesoExitosoComponent } from './components/proceso-exitoso/proceso-exitoso.component';
import { CardSegundoPasoComponent } from './components/card-segundo-paso/card-segundo-paso.component';
import { SelectCuentasComponent } from './components/formulario/select-cuentas/select-cuentas.component';


@NgModule({
  declarations: [
    PadNumericoComponent,
    RecaptchaComponent,
    CardAhorrosComponent,
    ContadorComponent,
    AcordeonMovimientoComponent,
    SelloIconComponent,
    IconsComponent,
    IconLockSquareComponent,
    IconUserComponent,
    IconBorrarComponent,
    IconDeleteComponent,
    IconTarjetaComponent,
    IconLlaveComponent,
    IconSelloDeSeguridadComponent,
    IconBilleteraComponent,
    IconPagosComponent,
    IconTransferenciaComponent,
    IconServiciosComponent,
    IconCelularComponent,
    IconPersonComponent,
    IconPersonasComponent,
    IconBancoComponent,
    IconDimeroComponent,
    IconFlechaDerechaComponent,
    IconFlechaAbajoComponent,
    IconPowerComponent,
    IconRelojComponent,
    IconCreditoComponent,
    IconEscudoSeguroComponent,
    IconInfoComponent,
    SelloListaComponent,
    IconOjoCerradoComponent,
    IconOjoAbiertoComponent,
    AlertaComponent,
    IconArrowRightComponent,
    IconFlechaArribaComponent,
    PlantillaInfoSimpleComponent,
    PlantillaInfoComplejaComponent,
    LoaderComponent,
    IconCloseComponent,
    IconEstrellaComponent,
    AgregarFavoritoComponent,
    ClaveSmsComponent,
    IconReloadComponent,
    ProcesoExitosoComponent,
    CardSegundoPasoComponent,
    SelectCuentasComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
  ],
  exports: [
    MaterialModule,
    PadNumericoComponent,
    RecaptchaComponent,
    RecaptchaFormsModule,
    RecaptchaModule,
    CardAhorrosComponent,
    ContadorComponent,
    AcordeonMovimientoComponent,
    SelloIconComponent,
    IconsComponent,
    IconLockSquareComponent,
    IconUserComponent,
    IconBorrarComponent,
    IconDeleteComponent,
    IconTarjetaComponent,
    IconLlaveComponent,
    IconSelloDeSeguridadComponent,
    IconBilleteraComponent,
    IconPagosComponent,
    IconTransferenciaComponent,
    IconServiciosComponent,
    IconCelularComponent,
    IconPersonComponent,
    IconPersonasComponent,
    IconBancoComponent,
    IconDimeroComponent,
    IconFlechaDerechaComponent,
    IconFlechaAbajoComponent,
    IconPowerComponent,
    IconRelojComponent,
    IconCreditoComponent,
    IconEscudoSeguroComponent,
    IconInfoComponent,
    SelloListaComponent,
    IconOjoCerradoComponent,
    IconOjoAbiertoComponent,
    AlertaComponent,
    IconArrowRightComponent,
    IconFlechaArribaComponent,
    PlantillaInfoSimpleComponent,
    PlantillaInfoComplejaComponent,
    LoaderComponent,
    IconCloseComponent,
    IconEstrellaComponent,
    AgregarFavoritoComponent,
    ClaveSmsComponent,
    IconReloadComponent,
    ProcesoExitosoComponent,
    CardSegundoPasoComponent,
    SelectCuentasComponent
  ]
})
export class SharedModule { }
