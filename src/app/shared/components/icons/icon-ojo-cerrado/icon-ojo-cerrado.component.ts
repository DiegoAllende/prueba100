import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-ojo-cerrado',
  templateUrl: './icon-ojo-cerrado.component.html',
  styleUrls: ['./icon-ojo-cerrado.component.scss']
})
export class IconOjoCerradoComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
