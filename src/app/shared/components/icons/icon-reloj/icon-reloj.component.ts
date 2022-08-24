import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-reloj',
  templateUrl: './icon-reloj.component.html',
  styleUrls: ['./icon-reloj.component.scss']
})
export class IconRelojComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
