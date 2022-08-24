import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-celular',
  templateUrl: './icon-celular.component.html',
  styleUrls: ['./icon-celular.component.scss']
})
export class IconCelularComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
