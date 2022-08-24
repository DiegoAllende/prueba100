import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-ojo-abierto',
  templateUrl: './icon-ojo-abierto.component.html',
  styleUrls: ['./icon-ojo-abierto.component.scss']
})
export class IconOjoAbiertoComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
