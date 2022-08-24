import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon-movimiento',
  templateUrl: './acordeon-movimiento.component.html',
  styleUrls: ['./acordeon-movimiento.component.scss']
})
export class AcordeonMovimientoComponent implements OnInit {

  @Input() item!:number;
  
  public movimiento:any = {
    nameOperation: "CAPITALIZACION ACTIVA",
    date: '05/04/2019',
    mount: '+ S/16.00',
  }

  ngOnInit(): void {
    this.movimiento.active = false
  }
  
  toggle() {
    this.movimiento.active = !this.movimiento.active;
  }
}
