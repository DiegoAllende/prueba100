import { Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
})
export class LoginLayoutComponent {
  tiempoSesion = 0;
  mensajeTime = "";

  constructor() {
    this.tiempoSesion = 120;
    this.mensajeTime = "Esta ventana se cerrará";
  }

}
