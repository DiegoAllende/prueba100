import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  tiempoSesion = 60;
  mensajeTime = "Su sesión se cerrará";

  constructor() { }

  ngOnInit(): void {
  }

}
