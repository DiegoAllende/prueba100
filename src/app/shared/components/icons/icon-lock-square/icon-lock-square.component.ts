import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-lock-square',
  templateUrl: './icon-lock-square.component.html',
  styleUrls: ['./icon-lock-square.component.scss']
})
export class IconLockSquareComponent implements OnInit {

  @Input() color : string;
  @Input() size: string;

  constructor() {
    this.color = '#F90000'
    this.size = '24'
  }

  ngOnInit(): void {

  }

}
