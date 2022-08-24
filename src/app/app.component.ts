import { Component, HostListener } from '@angular/core';
import { ContadorService } from './shared/components/contador/contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'cajaTrujilloApp';

  constructor(
    private contadorService: ContadorService,
    ) {}

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
