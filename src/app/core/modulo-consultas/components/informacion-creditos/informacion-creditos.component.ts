import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-creditos',
  templateUrl: './informacion-creditos.component.html',
  styleUrls: ['./informacion-creditos.component.scss']
})
export class InformacionCreditosComponent implements OnInit {
  @Input() creditoIn:any;

  constructor() { }

  ngOnInit(): void {
  }

}
