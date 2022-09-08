import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-exito',
  templateUrl: './pantalla-exito.component.html',
  styleUrls: ['./pantalla-exito.component.scss']
})
export class PantallaExitoComponent implements OnInit {
  @Input () Titulo!: string;
  @Input () Icon!: string;
  @Input () Mensaje!: string;
  @Input () Ruta:string = "/auth/login"
  @Input () TituloBoton:string = "Regresa a tu Home Banking"

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Hola');
  }

  btnRegresar() {
    this.router.navigate([this.Ruta]);
  }

}
