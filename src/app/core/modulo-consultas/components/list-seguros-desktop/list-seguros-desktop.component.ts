import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-seguros-desktop',
  templateUrl: './list-seguros-desktop.component.html',
  styleUrls: ['./list-seguros-desktop.component.scss']
})
export class ListSegurosDesktopComponent implements OnInit {

  @Input() seguros!:any[];
  @Output()  indexSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(index:number) {
    this.indexSelected.emit(index)
  }
}
