import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasService } from '@shared/services/cuentas.service';
import { adapterListaCuentas } from '../../models-adapter/inicio.adapter';
import { ListaCuenta } from '../../models/lista-cuenta.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  listaAhorros: ListaCuenta[] = [];
  listaPagos: any = [];
  listaTansf: any = [];

  constructor(
    private router: Router,
    private cuentasService: CuentasService,
  ) { }

  ngOnInit(): void {
    this.getListAhorros();
    this.getListPagos();
    this.getListTransferencia();
  }

  //SERVICIOS
  getListAhorros() {
    this.cuentasService.getCuentasClienteListar().subscribe(resp => {
      this.listaAhorros = adapterListaCuentas(resp);
    });
  }

  getListPagos() {
    this.listaPagos = [
      { icono: "servicios", titulo: "Pago de servicios", url: "/main/pagos/servicios" },
      { icono: "celular", titulo: "Recargas de celular", url: "/main/pagos/recargas" },
      { icono: "Tarjeta", titulo: "Pago de tarjetas a otros bancos", url: "/main/pagos/tarjeta-credito" },
      { icono: "persona1", titulo: "Pago de créditos propios", url: "/main/pagos/creditos-propios" },
      { icono: "personas", titulo: "Pago de créditos a terceros", url: "/main/pagos/creditos-terceros" },
    ];
  }

  getListTransferencia() {
    this.listaTansf = [
      { icono: "persona1", titulo: "A cuentas propias", url: "/main/transferencias/cuentas-propias" },
      { icono: "personas", titulo: "A cuentas de terceros", url: "/main/transferencias/cuentas-terceros" },
      { icono: "banco", titulo: "A otros bancos", url: "/main/transferencias/cuentas-otros-bancos" },
      { icono: "dinero", titulo: "Envíos de giros", url: "/main/transferencias/enviar-giro" },
    ];
  }

  
  //BOTONES
  btnIrAhorros(item: ListaCuenta) {
    if (!item.url) return;
    this.router.navigate([item.url, item.codCuenta]);
  }

  btnIrPagos(item: any) {
    if (!item.url) return;
    this.router.navigate([item.url]);
  }

  btnIrTransferencia(item: any) {
    if (!item.url) return;
    this.router.navigate([item.url]);
  }

}
