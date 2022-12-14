import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CuentaClienteModel, CuentaModel, CuentaMovimientoModel, CuentaRetencionModel, EstadoCuentaModel } from '@shared/models/consultas/consultas.model';
import { ResponseModel, TraceCMACTModel } from '@shared/models/generico/http.model';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  base = environment.urlbase;
  baseCuenta = `${this.base}/random`;

  constructor(private http: HttpClient) { }

  getCuentasClienteListar() {
    // return this.http.get<ResponseModel<CuentaClienteModel[]>>(this.baseCuenta).pipe(
    //   map(x => this.RESP_CUENTAS_CLIENTE)
    // );

    return of(this.RESP_CUENTAS_CLIENTE);
  }

  getCuentaDatosObtener(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };

    const aux = Number(paramsOut.pstrCodCta) - 1;
    // return this.http.get<ResponseModel<CuentaModel>>(this.baseCuenta).pipe(
    //   map(x => this.RESP_CUENTA_DATOS[aux])
    // );

    return of(this.RESP_CUENTA_DATOS[aux]);
  }

  getCuentaMovimientosListar(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<CuentaMovimientoModel>>(this.baseCuenta).pipe(
    //   map(x => this.RESP_MOV)
    // );

    return of(this.RESP_MOV);
  }

  getCuentaRetencionesListar(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<CuentaRetencionModel>>(this.baseCuenta).pipe(
    //   map(x => this.RESP_RETENCIONES)
    // );

    return of(this.RESP_RETENCIONES);
  }

  getEstadoCuentaObtener(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<EstadoCuentaModel>>(this.baseCuenta).pipe(
    //   map(x => this.RESP_ESTADO_CUENTA)
    // );

    return of(this.RESP_ESTADO_CUENTA);
  }

  trace: TraceCMACTModel = {
    bytIdAplicacion: "40",
    bytIdCanal: "12",
    dFecha: "2019-01-01",
    lngIdSesion: 1,
    sTrace: "1"
  }

  // DATA DE PRUEBA
  RESP_ESTADO_CUENTA: EstadoCuentaModel[] = [];

  RESP_RETENCIONES: CuentaRetencionModel[] = [
    {
      dtmFecTran: "2019-01-08",
      strNomOperacion: "Cheque",
      decMonTran: 2500,
      bytMoneda: 1,
      strSimbolo: "S/",
      strReferencia: "Agencia Lima"
    },
    {
      dtmFecTran: "2019-01-07",
      strNomOperacion: "AC/RETENCI??N JUDICIAL",
      decMonTran: 1500,
      bytMoneda: 1,
      strSimbolo: "S/",
      strReferencia: "Expediente 7"
    },
    {
      dtmFecTran: "2019-01-06",
      strNomOperacion: "RETENCI??N",
      decMonTran: 3500,
      bytMoneda: 1,
      strSimbolo: "S/",
      strReferencia: "Agencia Sur"
    },
  ];

  RESP_MOV: CuentaMovimientoModel[] = [
    {
      intNumTran: 1,
      dtmFecTran: "2019-01-07",
      strNomOperacion: "SEGURO ADM DE TARJETA",
      decMonTran: 3500,
      bytMoneda: 1,
      strSimbolo: "S/",
      detDetalle: {
        intNumTran: 1,
        dtmFecOpe: "2019-01-07",
        dtmFecProc: "2019-01-08",
        decMontoOri: 3500,
        decITFOri: 0,
        bytMonedaOri: 1,
        strSimboloOri: "S/",
        decMontoDest: 3500,
        decComisionDest: 0,
        bytMonedaDest: 1,
        strSimboloDest: "S/",
        strNumDocDest: "",
        decTipCambio: 0,
        strReferencia: "VRM MARKET LIMA PE 1",
      }
    },
    {
      intNumTran: 2,
      dtmFecTran: "2019-01-06",
      strNomOperacion: "CAPITALIZACION ACTIVA",
      decMonTran: -2416,
      bytMoneda: 1,
      strSimbolo: "S/",
      detDetalle: {
        intNumTran: 2,
        dtmFecOpe: "2019-01-06",
        dtmFecProc: "2019-01-05",
        decMontoOri: -2416,
        decITFOri: 0,
        bytMonedaOri: 1,
        strSimboloOri: "S/",
        decMontoDest: -2416,
        decComisionDest: 0,
        bytMonedaDest: 1,
        strSimboloDest: "S/",
        strNumDocDest: "",
        decTipCambio: 0,
        strReferencia: "VRM MARKET LIMA PE 2",
      }
    },
    {
      intNumTran: 3,
      dtmFecTran: "2019-01-05",
      strNomOperacion: "SEGURO MANTENIMIENTO",
      decMonTran: 165.45,
      bytMoneda: 1,
      strSimbolo: "S/",
      detDetalle: {
        intNumTran: 3,
        dtmFecOpe: "2019-01-05",
        dtmFecProc: "2019-01-04",
        decMontoOri: 165.45,
        decITFOri: 0,
        bytMonedaOri: 1,
        strSimboloOri: "S/",
        decMontoDest: 165.45,
        decComisionDest: 0,
        bytMonedaDest: 1,
        strSimboloDest: "S/",
        strNumDocDest: "",
        decTipCambio: 0,
        strReferencia: "VRM MARKET LIMA PE 3",
      }
    },
  ];

  RESP_CUENTA_DATOS: CuentaModel[] = [
    {
      strCodCta: "13243453454",
      strCodProd: "Ahorro",
      strSubProducto: "Ahorro Sueldo Efectivo",
      strCCI: "156729403782",
      dtmFecVencimiento: "2022-03-01 14:30:00",
      strEstadoCta: "",
      decSaldCnt: 1200,
      decSaldDisp: 1200,
      bytMoneda: 1,
      strSimbolo: "S/",
    },
    {
      strCodCta: "23243453454",
      strCodProd: "Ahorro",
      strSubProducto: "Ahorro total disponibilidad",
      strCCI: "256729403782",
      dtmFecVencimiento: "2022-03-01 14:30:00",
      strEstadoCta: "",
      decSaldCnt: 291.79,
      decSaldDisp: 221.79,
      bytMoneda: 1,
      strSimbolo: "S/",
    },
    {
      strCodCta: "33243453454",
      strCodProd: "CTS",
      strSubProducto: "CTS iletrado",
      strCCI: "356729403782",
      dtmFecVencimiento: "2022-03-01 14:30:00",
      strEstadoCta: "",
      decSaldCnt: 4509.15,
      decSaldDisp: 4209.15,
      bytMoneda: 1,
      strSimbolo: "S/",
    },
  ];

  RESP_CUENTAS_CLIENTE: CuentaClienteModel[] = [
    {
      strCodProd: "232",
      strProducto: "Ahorro",
      strCodCta: "1",
      strSubProducto: "Ahorro sueldo efectivo",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 1200,
      blnOrigen: true,
    },
    {
      strCodProd: "232",
      strProducto: "Ahorro",
      strCodCta: "2",
      strSubProducto: "Ahorro total disponibilidad",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 221.79,
      blnOrigen: true,
    },
    {
      strCodProd: "234",
      strProducto: "CTS",
      strCodCta: "3",
      strSubProducto: "CTS iletrado",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 4209.15,
      blnOrigen: true,
    },
  ];

}
