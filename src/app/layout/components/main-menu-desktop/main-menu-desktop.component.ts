import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-menu-desktop',
  templateUrl: './main-menu-desktop.component.html',
  styleUrls: ['./main-menu-desktop.component.scss']
})
export class MainMenuDesktopComponent implements OnInit {

  @ViewChild('toggleButton', {static: true}) toggleButton!: ElementRef;

  @Input() list!:any[]
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Output() close:EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2) {
   }

  ngOnInit(): void {
  }

  toggle(indice:number){
    this.selected.emit(indice)
  }

  closeMenu(value:boolean){
    this.close.emit(value)
  }

}
