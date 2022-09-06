import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-seguros-mobile',
  templateUrl: './list-seguros-mobile.component.html',
  styleUrls: ['./list-seguros-mobile.component.scss']
})
export class ListSegurosMobileComponent implements OnInit {

  @Input() seguros!:any[]
  @Output()  indexSelected = new EventEmitter<number>();

  public element!:ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {      
  }

  toggle(index:number) {
    this.indexSelected.emit(index);
  }

}
