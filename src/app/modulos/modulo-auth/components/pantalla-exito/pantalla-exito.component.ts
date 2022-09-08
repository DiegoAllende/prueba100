import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTER_ROUTES } from '@utils/const-rutas';

@Component({
  selector: 'app-pantalla-exito',
  templateUrl: './pantalla-exito.component.html',
  styleUrls: ['./pantalla-exito.component.scss']
})
export class PantallaExitoComponent implements OnInit {
  @Input () Titulo!: string;
  @Input () Icon!: string;
  @Input () Mensaje!: string;
  @Input () Ruta:string = INTER_ROUTES.AUTH;
  @Input () TituloBoton:string = "Regresa a tu Home Banking";

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Hola');
  }

  btnRegresar() {
    this.router.navigate([this.Ruta]);
  }

}
