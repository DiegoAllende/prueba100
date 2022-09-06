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
  @Input() subMensaje:string = "" 
  @Input() tipo: string = "";
  //si se desea centrar enviar este parametro en true
  @Input() textCenter: boolean = false;
  //Si la alerta no tiene icono pero si requiere lo estilos se enviara este parametro y ya no tipo
  //recibe succes, info, error o warn
  @Input() soloStyle = ""

  iconVal:valIcon = {tipo:"", nombre:""};
  ArrayIcons:valIcon[] = [
    {tipo: "success", nombre:"assets/icons/info-down.svg"},
    {tipo: "info", nombre:"assets/icons/info-down.svg"},
    {tipo: "warn", nombre:"assets/icons/info-down.svg"},
    {tipo: "error", nombre:"assets/icons/error-triangle.svg"},
    {tipo: "amount", nombre:"assets/icons/amount.svg"},
    {tipo: "user", nombre:"assets/icons/user.svg"}
  ];

  constructor() {}

  ngOnInit(): void {
    console.log("que valoe llego",this.textCenter,this.soloStyle)
    if(this.soloStyle === "" && this.tipo.length > 0){
      this.iconVal = this.ArrayIcons.find(i => i.tipo === this.tipo) || {tipo: "", nombre:""};
    }else{
      let icon
      icon = this.ArrayIcons.find(i => i.tipo === this.soloStyle) ||{tipo: "", nombre:""}
      icon.nombre = ""
      this.iconVal = icon
    }
  }

}
