import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-tarjeta',
  templateUrl: './icon-tarjeta.component.html',
  styleUrls: ['./icon-tarjeta.component.scss']
})
export class IconTarjetaComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
