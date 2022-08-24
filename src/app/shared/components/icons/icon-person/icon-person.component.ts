import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-person',
  templateUrl: './icon-person.component.html',
  styleUrls: ['./icon-person.component.scss']
})
export class IconPersonComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
