import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-personas',
  templateUrl: './icon-personas.component.html',
  styleUrls: ['./icon-personas.component.scss']
})
export class IconPersonasComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
