import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ahorros',
  templateUrl: './card-ahorros.component.html',
  styleUrls: ['./card-ahorros.component.scss']
})
export class CardAhorrosComponent implements OnInit {
  @Input() icono: string = "billetera";
  @Input() titulo: string = "";
  @Input() subTitulo: string = "";
  @Input() monto: string = "";

  iconoEnd: string = "assets/icons/";

  ngOnInit(): void {
    this.iconoEnd = this.iconoEnd + this.icono + ".svg";
    console.log('ngOnInit card-ahorros')
  }

}
