import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-pagos',
  templateUrl: './icon-pagos.component.html',
  styleUrls: ['./icon-pagos.component.scss']
})
export class IconPagosComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
