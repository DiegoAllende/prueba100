import { Component } from '@angular/core';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { dataAuthModel } from '@shared/models/auth/auth.models';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  tiempoSesion = 60;
  mensajeTime = "Su sesión se cerrará";
  dataAuhtMain!: dataAuthModel;

  constructor(private authLoginStore: AuthLoginStore) {
    this.dataAuhtMain = authLoginStore.getDataAuth;
  }

  btnLogout() {
    this.authLoginStore.setLogout();
  }

}
