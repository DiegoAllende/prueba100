import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-flecha-arriba',
  templateUrl: './icon-flecha-arriba.component.html',
  styleUrls: ['./icon-flecha-arriba.component.scss']
})
export class IconFlechaArribaComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#565656'
    this.size = '24'
   }

  ngOnInit(): void {
  }

}
