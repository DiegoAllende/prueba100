import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  listaAhorros: any = [];

  listaPagos = [
    { icono: "servicios", titulo: "Pago de servicios", url: "" },
    { icono: "celular", titulo: "Recargas de celular", url: "" },
    { icono: "Tarjeta", titulo: "Pago de tarjetas a otros bancos", url: "" },
    { icono: "persona1", titulo: "Pago de créditos propios", url: "" },
    { icono: "personas", titulo: "Pago de créditos a terceros", url: "" },
  ];

  listaTansf = [
    { icono: "persona1", titulo: "A cuentas propias", url: "/main/transferencias/cuentas-propias" },
    { icono: "personas", titulo: "A cuentas de terceros", url: "/main/transferencias/cuentas-terceros" },
    { icono: "banco", titulo: "A otros bancos", url: "" },
    { icono: "dinero", titulo: "Envíos de giros", url: "" },
  ];



  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit main')
    // this.http.get('https://animechan.vercel.app/api/random').subscribe((resp:any) => {
    //   console.log(resp)
    // })
    this.getListAhorros();
  }

  getListAhorros() {
    this.listaAhorros = [
      { icono: "billetera", titulo: "Ahorro Sueldo Efectivo", subTitulo: "Saldo  disponible", monto: "S/1,200", url: "/main/consultas/ahorros" },
      { icono: "billetera", titulo: "Ahorro Total Disponibilidad", subTitulo: "Saldo  disponible", monto: "S/221.79", url: "/main/consultas/ahorros" },
      { icono: "billetera", titulo: "CTS", subTitulo: "Saldo  disponible", monto: "S/4,209.15", url: "/main/consultas/ahorros" },
    ];
  }

  btnIrAhorros(ruta: string) {
    if(!ruta) return;
    this.router.navigate([ruta]);
  }

}
