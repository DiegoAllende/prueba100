import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLoginStore } from '@modulos/modulo-auth/services/authLogin.store';
import { CuentasService } from '@shared/services/cuentas.service';
import { INTER_ROUTES } from '@utils/const-rutas';
import { PASOS } from '@utils/constantes';
import { adapterDatosCuenta } from '../../models-adapter/ahorro.adapter';
import { adapterMovimientos } from '../../models-adapter/movimientos.adapter';
import { adapterRetenciones } from '../../models-adapter/retenciones.adapter';
import { CuentaDatos } from '../../models/cuenta-datos.model';
import { Movimientos } from '../../models/movimientos.model';
import { Retenciones } from '../../models/retenciones.model';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.scss']
})
export class AhorrosComponent implements OnInit {
  codigoCuenta = "";
  codigoPers = "";
  cuenta!: CuentaDatos;
  listaRetenciones: Retenciones[] = [];
  listaMovimientos: Movimientos[] = [];

  PASOS = PASOS;
  numPaso: number = PASOS.INI;

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute,
    private cuentasService: CuentasService,
    private authLoginStore: AuthLoginStore,
  ) {
    this.codigoCuenta = this.activeRoute.snapshot.paramMap.get('codCuenta') || "";
    this.codigoPers = this.authLoginStore.getDataAuth.sid || "";
  }

  ngOnInit(): void {
    this.getDatosCuenta();
    this.getMovimientos();
    this.getRetenciones();
  }

  //SERVICIOS
  getDatosCuenta() {
    const params = {pstrCodPers: this.codigoPers, pstrCodCta: this.codigoCuenta};
    this.cuentasService.getCuentaDatosObtener(params).subscribe(resp => {
      this.cuenta = adapterDatosCuenta(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  getMovimientos() {
    const params = {pstrCodPers: this.codigoPers, pstrCodCta: this.codigoCuenta};
    this.cuentasService.getCuentaMovimientosListar(params).subscribe(resp => {
      this.listaMovimientos = adapterMovimientos(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  getRetenciones() {
    const params = {pstrCodPers: this.codigoPers, pstrCodCta: this.codigoCuenta};
    this.cuentasService.getCuentaRetencionesListar(params).subscribe(resp => {
      this.listaRetenciones = adapterRetenciones(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  btnEstadoCuenta(val: any) {
    console.log("val: ", val);
  }

  btnChequesRet() {
    this.numPaso = PASOS.FIN;
    const params = {pintAnio: "", pintMes: "", pstrCodCta: this.codigoCuenta};
  }
  
  btnRegresar() {
    if(this.numPaso === PASOS.INI) this.router.navigateByUrl(INTER_ROUTES.MAIN);
    this.numPaso = PASOS.INI;
  }
}
