import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface selloLista {
  id: number;
  nombre: string;
  check: boolean;
}

@Component({
  selector: 'app-sello-lista',
  templateUrl: './sello-lista.component.html',
  styleUrls: ['./sello-lista.component.scss']
})
export class SelloListaComponent implements OnInit {
  @Input() listaSellos: selloLista[] = [];
  @Output() valueSello: EventEmitter<selloLista> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarSello(item: selloLista) {
    this.listaSellos.forEach(element => {
      element.check = false;
    });
    item.check = true;
    this.valueSello.emit({...item});
  }

}
