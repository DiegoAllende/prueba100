import { Component, Input, OnInit } from '@angular/core';

interface valIcon {
  tipo: string;
  nombre: string;
}

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
  @Input() mensaje: string = "";
  @Input() tipo: string = "";

  iconVal:valIcon = {tipo:"", nombre:""};
  ArrayIcons:valIcon[] = [
    {tipo: "success", nombre:"assets/icons/info-down.svg"},
    {tipo: "info", nombre:"assets/icons/info-down.svg"},
    {tipo: "warn", nombre:"assets/icons/info-down.svg"},
    {tipo: "error", nombre:"assets/icons/info-down.svg"},
  ];

  constructor() {}

  ngOnInit(): void {
    this.iconVal = this.ArrayIcons.find(i => i.tipo === this.tipo) || {tipo: "", nombre:""};
  }

}
