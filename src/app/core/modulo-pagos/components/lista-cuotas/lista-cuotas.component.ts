import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cuotas',
  templateUrl: './lista-cuotas.component.html',
  styleUrls: ['./lista-cuotas.component.scss']
})
export class ListaCuotasComponent implements OnInit {

  @Input() total_cuenta: any;
  @Input() dataArray: object = [];

  dataCuotas:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataArray);
    this.dataCuotas = this.dataArray;
  }

}
