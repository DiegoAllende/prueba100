import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { Constantes } from '@utils/constantes';
import { ContadorService } from './shared/components/contador/contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cajaTrujilloApp';
  isSesion: boolean = false;

  constructor(
    private contadorService: ContadorService,
    private authLoginStore: AuthLoginStore,
    private http: HttpClient,
    private router: Router

  ) {
    if (localStorage.getItem("only6") === "1") {
      alert("Ya tiene una pestaña abierta")
      // router.navigateByUrl("icons")
      window.location.href = "https://google.com";
    } else {
      localStorage.setItem("only6", "1");
      this.isSesion = true;
      console.log("setLocal: ", this.isSesion)
    }


    if (!this.authLoginStore.getDataAuth.sid) {
      const aux = localStorage.getItem(Constantes.PROFILE_DATA) ? JSON.parse("" + localStorage.getItem(Constantes.PROFILE_DATA)) : {};
      authLoginStore.setDataAuth(aux);
    }

    window.addEventListener("unload", (evento: any) => {
      console.log("unload");
      
      if (this.isSesion) {
        console.log("unload cerrar");
        localStorage.removeItem("only6")
      }
    });

    window.addEventListener("beforeunload", (evento: any) => {
      console.log("beforeunload");
      
      if (this.isSesion) {
        console.log("beforeunload cerrar");
        localStorage.removeItem("only6")
      }
    });

    window.addEventListener("pagehide", (evento: any) => {
      console.log("pagehide ");
      
      if (this.isSesion) {
        console.log("pagehide cerrar");
        localStorage.removeItem("only6")
      }
    });

    window.addEventListener("pageshow", (evento: any) => {
      console.log("pageshow ");
      
      if (this.isSesion) {
        console.log("pageshow cerrar");
        localStorage.removeItem("only6")
      }
    });

    // window.addEventListener("beforeunload", (evento: BeforeUnloadEvent) => {
    //   // console.log("evento: ", evento);
    //   // evento.preventDefault();
    //   // // evento.returnValue = "";
    //   // this.getDataBack().subscribe(resp => {
    //   //   console.log("resp: ", resp);
    //   // });
    //   //   return "";
    // });

    // window.addEventListener("pagehide", (evento: any) => {
    //   console.log("pagehide: ", evento);
    // });

    // document.onvisibilitychange = () => {
    //   if (document.visibilityState === 'hidden') {
    //     navigator.sendBeacon('https://animechan.vercel.app/api/random');
    //   }
    // };
  }
  ngOnInit(): void {
    console.log("INIT");

  }
  ngOnDestroy(): void {
    // localStorage.removeItem("only")
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
