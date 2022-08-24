import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-billetera',
  templateUrl: './icon-billetera.component.html',
  styleUrls: ['./icon-billetera.component.scss']
})
export class IconBilleteraComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
