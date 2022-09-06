import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-exito',
  templateUrl: './consulta-exito.component.html',
  styleUrls: ['./consulta-exito.component.scss']
})
export class ConsultaExitoComponent implements OnInit {
  @Input () Titulo!: string;
  @Input () Icon!: string;
  @Input () btn_1!: string;
  @Input () btn_2!: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('Hola');
  }

  btnRegresar() {
    this.router.navigate(["/auth/login"]);
  }
}
