import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-estrella-delgada',
  templateUrl: './icon-estrella-delgada.component.html',
  styleUrls: ['./icon-estrella-delgada.component.scss']
})
export class IconEstrellaDelgadaComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() { 
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
