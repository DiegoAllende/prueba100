import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-informacion-seguros',
  templateUrl: './informacion-seguros.component.html',
  styleUrls: ['./informacion-seguros.component.scss']
})
export class InformacionSegurosComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() seguro!:any

  constructor() { }

  ngOnInit(): void {
  }


}
