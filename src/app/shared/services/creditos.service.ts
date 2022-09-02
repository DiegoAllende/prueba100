import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditoClienteModel, CreditoCuotaModel, CreditoModel } from '@shared/models/consultas/creditos.models';
import { ResponseModel, TraceCMACTModel } from '@shared/models/generico/http.model';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditosService {
  base = environment.urlbase;
  baseCredito = `${this.base}/random`;

  constructor(private http: HttpClient) { }

  getCreditosClienteListar(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<CreditoClienteModel[]>>(this.baseCredito).pipe(
    //   map(x => this.RESP_CREDITOS_CLIENTE)
    // );
    return of(this.RESP_CREDITOS_CLIENTE);
  }

  getCreditosDatosObtener(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    // return this.http.get<ResponseModel<CreditoModel>>(this.baseCredito).pipe(
    //   map(x => this.RESP_CREDITOS_DATOS.find(x => x.strCodCta === paramsOut.pstrCodCta))
    // );
    return of(this.RESP_CREDITOS_DATOS.find(x => x.strCodCta === paramsOut.pstrCodCta));
  }

  getCreditoCuotasPagoListar(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    return this.http.get<ResponseModel<CreditoCuotaModel[]>>(this.baseCredito).pipe(
      map(x => this.RESP_CREDITO_CUOTA)
    );
    // return of(this.RESP_CREDITO_CUOTA);
  }

  trace: TraceCMACTModel = {
    bytIdAplicacion: "40",
    bytIdCanal: "12",
    dFecha: "2019-01-01",
    lngIdSesion: 1,
    sTrace: "1"
  }

  // DATA DE PRUEBA
  RESP_CREDITOS_CLIENTE: CreditoClienteModel[] = [
    {
      strCodProd: "302",
      strProducto: "Ahorros",
      strSubProducto: "Garantía de deposito EFE",
      strCodCta: "493021102300",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decMontoApertura: 5000.00,
      dtmFechaDesembolso: "2018-10-11T12:25:16",
      decSaldo: 4342.05
    },
    {
      strCodProd: "303",
      strProducto: "Ahorros",
      strCodCta: "593021102300",
      strSubProducto: "Garantía de auto",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decMontoApertura: 4000.00,
      dtmFechaDesembolso: "2018-09-11T12:25:16",
      decSaldo: 2342.00
    },
  ];

  RESP_CREDITOS_DATOS: CreditoModel[] = [
    {
      strCodCta: "493021102300",
      strCuotasTotal: "5/24",
      intNroDiasAtraso: 3,
      intUltCuotaPagada: 4,
      iCuotas: 24,
      decTotalCuota: 255.10,
      decSaldo: 4342.05,
      strSimbolo: "S/",
      bytMoneda: 1,
      dtmFechaDesembolso: "2018-10-11T12:25:16",
      decMontoApertura: 5000.00,
      decMontoCuota: 255.10,
      decTEA: 19.00,
      strTipoProducto: "Garantía de deposito EFE",
      strCalifica2: "N",
    },
    {
      strCodCta: "593021102300",
      strCuotasTotal: "8/24",
      intNroDiasAtraso: 4,
      intUltCuotaPagada: 5,
      iCuotas: 24,
      decTotalCuota: 200.00,
      decSaldo: 2342.00,
      strSimbolo: "S/",
      bytMoneda: 1,
      dtmFechaDesembolso: "2018-09-11T12:25:16",
      decMontoApertura: 4000.00,
      decMontoCuota: 255.10,
      decTEA: 18.00,
      strTipoProducto: "Garantía de auto",
      strCalifica2: "N",
    },
  ];

  RESP_CREDITO_CUOTA: CreditoCuotaModel[] = [
    {
      strEstado: "",
      strCuotaRango: "40/40",
      dtmFechaVencimiento: "2019-04-13T00:00:00",
      intCuota: 0,
      decMontoCuota: 629.12,
      decMontoMínimo: 629.12,
      intNroDiasAtraso: 0,
      bytMoneda: 1,
      strSimbolo: "S/",
      strCalifica2: "",
    }
  ];

}
