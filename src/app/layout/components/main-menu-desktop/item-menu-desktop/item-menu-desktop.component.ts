import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-menu-desktop',
  templateUrl: './item-menu-desktop.component.html',
  styleUrls: ['./item-menu-desktop.component.scss']
})
export class ItemMenuDesktopComponent implements OnInit {

  @ViewChild('toggleMenu', {static: true}) toggleMenu!: ElementRef;
  @ViewChild('childMenu', {static: true}) public childMenu:any;
  
  @Input() items!: any[];
  @Output() close:EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2) { 
  }

  ngOnInit(): void {
  }

  closeMenu(){
    this.close.emit(false)
  }

}
