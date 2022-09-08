import { Component, Input, OnInit } from '@angular/core';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { Constantes } from '@utils/constantes';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {
  @Input() typeDesign!:number;
  selloByte: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.selloByte = localStorage.getItem(Constantes.SELLO_ACTUAL) ? JSON.parse(""+localStorage.getItem(Constantes.SELLO_ACTUAL)) : "";
  }

}
