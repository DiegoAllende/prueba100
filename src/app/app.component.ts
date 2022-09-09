import { Component, HostListener } from '@angular/core';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { Constantes } from '@utils/constantes';
import { ContadorService } from './shared/components/contador/contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'cajaTrujilloApp';

  constructor(
    private contadorService: ContadorService,
    private authLoginStore: AuthLoginStore,
  ) {
    if (!this.authLoginStore.getDataAuth.sid) {
      const aux = localStorage.getItem(Constantes.PROFILE_DATA) ? JSON.parse("" + localStorage.getItem(Constantes.PROFILE_DATA)) : {};
      authLoginStore.setDataAuth(aux);
    }
    console.log("appDataAuth: ", authLoginStore.getDataAuth);
  }

  @HostListener('document:keydown', ['$event'])
  handleKey(): void {
    this.reiniciarContador();
  }

  @HostListener('document:click', ['$event'])
  handleClick(): void {
    this.reiniciarContador();
  }

  reiniciarContador() {
    this.contadorService.setTerminoSesion(false);
  }
}
