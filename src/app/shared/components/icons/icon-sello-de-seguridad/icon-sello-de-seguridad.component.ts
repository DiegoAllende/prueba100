import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-sello-de-seguridad',
  templateUrl: './icon-sello-de-seguridad.component.html',
  styleUrls: ['./icon-sello-de-seguridad.component.scss']
})
export class IconSelloDeSeguridadComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
