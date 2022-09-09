import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { CuentasService } from '@shared/services/cuentas.service';
import { INTER_PATHS, INTER_ROUTES } from '@utils/const-rutas';
import { ROLES } from '@utils/constantes';
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

  isConCard: boolean = true;

  constructor(
    private router: Router,
    private cuentasService: CuentasService,
    private authLoginStore: AuthLoginStore,
  ) {
    // this.isConCard = this.authLoginStore.getDataAuth.role.includes(ROLES.CON_CARD);
  }

  ngOnInit(): void {
    this.getListAhorros();
    this.getListPagos();
    this.getListTransferencia();
  }

  //SERVICIOS
  getListAhorros() {
    this.cuentasService.getCuentasClienteListar().subscribe(resp => {
      this.listaAhorros = adapterListaCuentas(resp);
    }, error => console.log("**error**: ", error));
  }

  getListPagos() {
    this.listaPagos = [
      { icono: "servicios", titulo: "Pago de servicios", url: INTER_ROUTES.MAIN_PAGOS_SERVICIOS },
      { icono: "celular", titulo: "Recargas de celular", url: INTER_ROUTES.PAGO_RECARGA },
      { icono: "Tarjeta", titulo: "Pago de tarjetas a otros bancos", url: INTER_ROUTES.PAGO_CREDITO_TARJETA },
      { icono: "persona1", titulo: "Pago de créditos propios", url: INTER_ROUTES.PAGO_CREDITO_PROPIO },
      { icono: "personas", titulo: "Pago de créditos a terceros", url: INTER_ROUTES.PAGO_CREDITO_TERCERO },
    ];
  }

  getListTransferencia() {
    this.listaTansf = [
      { icono: "persona1", titulo: "A cuentas propias", url: INTER_ROUTES.TRAN_CUENTA_PROPIA },
      { icono: "personas", titulo: "A cuentas de terceros", url: INTER_ROUTES.TRAN_CUENTA_TERCERO },
      { icono: "banco", titulo: "A otros bancos", url: INTER_ROUTES.TRAN_CUENTA_OTRO_BAMCO },
      { icono: "dinero", titulo: "Envíos de giros", url: INTER_ROUTES.TRAN_ENVIAR_GIRO },
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
