import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-plantilla-info-simple',
  templateUrl: './plantilla-info-simple.component.html',
})
export class PlantillaInfoSimpleComponent implements OnInit {
  @Input() ocultarCard: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("ocultarCard", this.ocultarCard);
  }

}
