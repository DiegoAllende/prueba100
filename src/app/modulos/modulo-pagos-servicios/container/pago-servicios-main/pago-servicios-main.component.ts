import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-servicios-main',
  templateUrl: './pago-servicios-main.component.html',
  styleUrls: ['./pago-servicios-main.component.scss']
})
export class PagoServiciosMainComponent implements OnInit {

  public listaServicios!:any[]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.listaServicios = [
      { icono: "luz", titulo: "Pago de luz", url: "/main/pagos-servicios/luz" },
      { icono: "agua", titulo: "Pago de agua", url: "/main/pagos-servicios/agua" },
      { icono: "telefonia", titulo: "Pago de telefonia", url: "/main/pagos-servicios" },
      { icono: "empresas-instituciones", titulo: "Pago a empresas e instituciones", url: "/main/pagos-servicios/empresas-instituciones" },
      { icono: "universidades", titulo: "Pago de universidades", url: "/main/pagos-servicios/universidades" },
      { icono: "predial-impuestos", titulo: "Pago predial e impuestos", url: "/main/pagos-servicios" },
    ];
  }

  btnIrServicios(item: any) {
    if (!item.url) return;
    this.router.navigate([item.url]);
  }

}
