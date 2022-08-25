import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-segundo-paso',
  templateUrl: './card-segundo-paso.component.html',
  styleUrls: ['./card-segundo-paso.component.scss']
})
export class CardSegundoPasoComponent implements OnInit {

  @Input() item!:any

  constructor() { }

  ngOnInit(): void {
  }

}
