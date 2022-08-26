import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla-info-compleja',
  templateUrl: './plantilla-info-compleja.component.html',
})
export class PlantillaInfoComplejaComponent implements OnInit {
  @Input() ocultarCard: boolean = false;
  constructor() {
    console.log("plantilla info compleja constr");
  }

  ngOnInit(): void {
    console.log("plantilla info compleja");
  }

}
