import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-power',
  templateUrl: './icon-power.component.html',
  styleUrls: ['./icon-power.component.scss']
})
export class IconPowerComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
