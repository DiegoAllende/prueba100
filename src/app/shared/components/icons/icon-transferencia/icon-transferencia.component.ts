import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-transferencia',
  templateUrl: './icon-transferencia.component.html',
  styleUrls: ['./icon-transferencia.component.scss']
})
export class IconTransferenciaComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
