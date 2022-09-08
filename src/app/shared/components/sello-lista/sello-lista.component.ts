import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { selloSegAuth } from '@modulos/modulo-auth/models/auth-login.interfaces';


@Component({
  selector: 'app-sello-lista',
  templateUrl: './sello-lista.component.html',
  styleUrls: ['./sello-lista.component.scss']
})
export class SelloListaComponent implements OnInit {
  @Input() listaSellos: selloSegAuth[] = [];
  @Output() valueSello: EventEmitter<selloSegAuth> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarSello(item: selloSegAuth) {
    this.listaSellos.forEach(element => {
      element.check = false;
    });
    item.check = true;
    this.valueSello.emit({...item});
  }

}
