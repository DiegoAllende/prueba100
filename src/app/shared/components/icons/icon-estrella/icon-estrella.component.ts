import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-estrella',
  templateUrl: './icon-estrella.component.html',
  styleUrls: ['./icon-estrella.component.scss']
})
export class IconEstrellaComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() { 
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
