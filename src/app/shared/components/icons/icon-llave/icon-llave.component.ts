import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-llave',
  templateUrl: './icon-llave.component.html',
  styleUrls: ['./icon-llave.component.scss']
})
export class IconLlaveComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
