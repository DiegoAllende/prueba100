import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-flecha-abajo',
  templateUrl: './icon-flecha-abajo.component.html',
  styleUrls: ['./icon-flecha-abajo.component.scss']
})
export class IconFlechaAbajoComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
