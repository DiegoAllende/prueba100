import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-servicios',
  templateUrl: './icon-servicios.component.html',
  styleUrls: ['./icon-servicios.component.scss']
})
export class IconServiciosComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
