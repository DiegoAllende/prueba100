import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguroClienteModel, SeguroModel } from '@shared/models/consultas/microseguro.models';
import { ResponseModel, TraceCMACTModel } from '@shared/models/generico/http.model';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicrosegurosService {
  base = environment.urlbase;
  baseCredito = `${this.base}/random`;

  constructor(private http: HttpClient) { }

  getCreditosClienteListar(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<SeguroClienteModel[]>>(this.baseCredito).pipe(
    //   map(x => this.RESP_SEGUROS_CLIENTE)
    // );
    return of(this.RESP_SEGUROS_CLIENTE);
  }

  getSeguroDatosObtener(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<SeguroModel>>(this.baseCredito).pipe(
    //   map(x => this.RESP_SEGUROS_DATOS.find(x => x.strCodSeguro === paramsOut.pstrCodSeguro))
    // );
    return of(this.RESP_SEGUROS_DATOS.find(x => x.strCodSeguro === paramsOut.pstrCodSeguro));
  }

  trace: TraceCMACTModel = {
    bytIdAplicacion: "40",
    bytIdCanal: "12",
    dFecha: "2019-01-01",
    lngIdSesion: 1,
    sTrace: "1"
  }

  // DATA DE PRUEBA
  RESP_SEGUROS_CLIENTE: SeguroClienteModel[] = [
    {
      strCodProd: "402",
      strCodSeguro: "36475847293",
      strSubProducto: "Siempre Protegido",
      strPlan: "1",
    },
    {
      strCodProd: "403",
      strCodSeguro: "783748374839",
      strSubProducto: "Proteccion Accidental",
      strPlan: "2",
    },
  ];

  RESP_SEGUROS_DATOS: SeguroModel[] = [
    {
      strCodSeguro: "36475847293",
      dtmFechaUltimoPago: "2022-07-11T12:25:16",
      dtmFechaProximoPago: "2022-08-11T12:25:16",
      decPrima: 3.50,
      strCuotasTotal: "15/20",
      bytMoneda: 1,
      strMonSimbolo: "S/",
    },
    {
      strCodSeguro: "783748374839",
      dtmFechaUltimoPago: "2022-06-11T12:25:16",
      dtmFechaProximoPago: "2022-07-11T12:25:16",
      decPrima: 4.50,
      strCuotasTotal: "18/20",
      bytMoneda: 1,
      strMonSimbolo: "S/",
    },
  ];

}
