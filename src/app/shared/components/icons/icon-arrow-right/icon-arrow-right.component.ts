import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-arrow-right',
  templateUrl: './icon-arrow-right.component.html',
  styleUrls: ['./icon-arrow-right.component.scss']
})
export class IconArrowRightComponent implements OnInit {
  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
   }

  ngOnInit(): void {
  }

}
