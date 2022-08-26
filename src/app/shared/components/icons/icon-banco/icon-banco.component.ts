import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-banco',
  templateUrl: './icon-banco.component.html',
  styleUrls: ['./icon-banco.component.scss']
})
export class IconBancoComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
