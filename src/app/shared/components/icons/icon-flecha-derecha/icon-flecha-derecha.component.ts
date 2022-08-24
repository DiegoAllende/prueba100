import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-flecha-derecha',
  templateUrl: './icon-flecha-derecha.component.html',
  styleUrls: ['./icon-flecha-derecha.component.scss']
})
export class IconFlechaDerechaComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
