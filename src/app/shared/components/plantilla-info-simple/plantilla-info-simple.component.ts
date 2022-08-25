import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla-info-simple',
  templateUrl: './plantilla-info-simple.component.html',
})
export class PlantillaInfoSimpleComponent implements OnInit {
  @Input() ocultarCard: boolean = false;
  constructor() {
    console.log("plantilla info constr");
  }

  ngOnInit(): void {
    console.log("plantilla info");
  }

}
