import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-credito',
  templateUrl: './icon-credito.component.html',
  styleUrls: ['./icon-credito.component.scss']
})
export class IconCreditoComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
