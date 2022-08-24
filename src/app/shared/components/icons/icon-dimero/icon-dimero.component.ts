import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-dimero',
  templateUrl: './icon-dimero.component.html',
  styleUrls: ['./icon-dimero.component.scss']
})
export class IconDimeroComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
