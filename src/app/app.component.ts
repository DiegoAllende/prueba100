import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
  ) {
    if (!this.authLoginStore.getDataAuth.sid) {
      const aux = localStorage.getItem(Constantes.PROFILE_DATA) ? JSON.parse("" + localStorage.getItem(Constantes.PROFILE_DATA)) : {};
      authLoginStore.setDataAuth(aux);
    }
    // window.addEventListener("beforeunload", (evento: BeforeUnloadEvent) => {
    //   console.log("evento: ", evento.returnValue);

    //   evento.preventDefault();
    //   evento.returnValue = "";
    //   this.getDataBack().subscribe(resp => {
    //     console.log("resp: ", resp);
    //   });
    //   // return "";
    // });
  }

  @HostListener('document:keydown', ['$event'])
  handleKey(): void {
    this.reiniciarContador();
  }

  @HostListener('document:click', ['$event'])
  handleClick(): void {
    this.reiniciarContador();
  }

  // @HostListener('window:beforeunload')
  // doSomething() {
  //   alert("hola")
  // }

  reiniciarContador() {
    this.contadorService.setTerminoSesion(false);
  }

  getDataBack() {
    console.log("back");
    return this.http.get<any>('https://animechan.vercel.app/api/random');
  }
}
