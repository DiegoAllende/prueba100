import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-escudo-seguro',
  templateUrl: './icon-escudo-seguro.component.html',
  styleUrls: ['./icon-escudo-seguro.component.scss']
})
export class IconEscudoSeguroComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {
  }

}
