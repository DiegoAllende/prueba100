import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INTER_ROUTES } from '@utils/const-rutas';

@Component({
  selector: 'app-consulta-exito',
  templateUrl: './consulta-exito.component.html',
  styleUrls: ['./consulta-exito.component.scss']
})
export class ConsultaExitoComponent {
  @Input () Titulo!: string;
  @Input () Icon!: string;
  @Input () btn_1!: string;
  @Input () btn_2!: string;

  constructor(
    private router: Router,
  ) { }

  btnRegresar() {
    this.router.navigate([INTER_ROUTES.AUTH]);
  }
}
