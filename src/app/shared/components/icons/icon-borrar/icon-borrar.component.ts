import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-borrar',
  templateUrl: './icon-borrar.component.html',
  styleUrls: ['./icon-borrar.component.scss']
})
export class IconBorrarComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
