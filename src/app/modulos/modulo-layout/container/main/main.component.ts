import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { adapterDatosCuenta } from '@modulos/modulo-consultas/models-adapter/ahorro.adapter';
import { adapterMovimientos } from '@modulos/modulo-consultas/models-adapter/movimientos.adapter';
import { adapterRetenciones } from '@modulos/modulo-consultas/models-adapter/retenciones.adapter';
import { CuentaDatos } from '@modulos/modulo-consultas/models/cuenta-datos.model';
import { Movimientos } from '@modulos/modulo-consultas/models/movimientos.model';
import { Retenciones } from '@modulos/modulo-consultas/models/retenciones.model';
import { CuentasService } from '@shared/services/cuentas.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { PASOS, ROLES } from '@utils/constantes';
import { combineLatest } from 'rxjs';
import { adapterListaCuentas } from '../../models-adapter/inicio.adapter';
import { ListaCuenta } from '../../models/lista-cuenta.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  codigoPers = "";

  listaAhorros: ListaCuenta[] = [];
  listaPagos: any = [];
  listaTansf: any = [];

  isConCard: boolean = false;
  isCuentas: boolean = false;
  cuenta!: CuentaDatos;
  listaMovimientos: Movimientos[] = [];
  listaRetenciones: Retenciones[] = [];

  PASOS = PASOS;
  numPaso: number = PASOS.INI;

  constructor(
    private router: Router,
    private cuentasService: CuentasService,
    private authLoginStore: AuthLoginStore,
  ) {
    this.isConCard = this.authLoginStore.getDataAuth.role.includes(ROLES.CON_CARD);
    this.codigoPers = this.authLoginStore.getDataAuth.sid || "";
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
      if (this.listaAhorros.length === 0) {
        this.isCuentas = false;
      } else {
        const aux = this.listaAhorros.find(y => y.active);
        if (aux) this.btnCard(aux);
      }
    }, error => console.log("**error**: ", error));
  }

  getDatosCuenta(params: any) {
    return this.cuentasService.getCuentaDatosObtener(params);
  }

  getMovimientos(params: any) {
    return this.cuentasService.getCuentaMovimientosListar(params);
  }

  getRetenciones(params: any) {
    return this.cuentasService.getCuentaRetencionesListar(params);
  }

  btnCard(item: ListaCuenta) {
    this.listaMovimientos = [];
    this.listaRetenciones = [];

    this.numPaso = PASOS.INI;
    this.listaAhorros.forEach((x) => x.active = false);
    item.active = true;

    const params = {pstrCodPers: this.codigoPers, pstrCodCta: item.codCuenta};
    combineLatest([
      this.getDatosCuenta(params),
      this.getMovimientos(params),
      this.getRetenciones(params)
    ]).subscribe(resp => {
      if (resp[0]) this.cuenta = adapterDatosCuenta(resp[0]);
      if (resp[1]) this.listaMovimientos = adapterMovimientos(resp[1]);
      if (resp[2]) this.listaRetenciones = adapterRetenciones(resp[2]);
    }, error => {
      console.log("**error**: ", error);
    });
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

  btnEstadoCuenta(val: any) {
    console.log("val: ", val);
  }

  btnChequesRet() {
    this.numPaso = PASOS.FIN;
  }
  
  btnRegresar() {
    this.numPaso = PASOS.INI;
  }

}
