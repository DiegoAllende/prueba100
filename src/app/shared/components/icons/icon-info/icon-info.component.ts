import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-info',
  templateUrl: './icon-info.component.html',
  styleUrls: ['./icon-info.component.scss']
})
export class IconInfoComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
