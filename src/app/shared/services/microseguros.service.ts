import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguroBeneficiarioModel, SeguroClienteModel, SeguroModel } from '@shared/models/consultas/microseguro.models';
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
    return this.http.get<ResponseModel<SeguroClienteModel[]>>(this.baseCredito).pipe(
      map(x => this.RESP_SEGUROS_CLIENTE)
    );
    // return of(this.RESP_SEGUROS_CLIENTE);
  }

  getSeguroDatosObtener(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    return this.http.get<ResponseModel<SeguroModel>>(this.baseCredito).pipe(
      map(x => this.RESP_SEGUROS_DATOS.find(x => x.strNroSol === paramsOut.pstrCodSeguro))
    );
    // return of(this.RESP_SEGUROS_DATOS.find(x => x.strCodSeguro === paramsOut.pstrCodSeguro));
  }

  getSeguroBeneficiariosListar(params: any) {
    const paramsOut = { ...params, pobjTrace: this.trace };
    return this.http.get<ResponseModel<SeguroBeneficiarioModel[]>>(this.baseCredito).pipe(
      map(x => this.RESP_BENEFICIARIOS)
    );
    // return of(this.RESP_BENEFICIARIOS;
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
      strNroSol: "36475847293",
      strNomPer: "",
      intCodigo: 0,
      strNombre: "Siempre Protegido",
      intCodPlan: 0,
      strPlan: "1",
      intCuota: 0,
      bytMoneda: 1,
      strMonSimbolo: "S/",
    },
    {
      strNroSol: "783748374839",
      strNomPer: "",
      intCodigo: 0,
      strNombre: "Proteccion Accidental",
      intCodPlan: 0,
      strPlan: "2",
      intCuota: 0,
      bytMoneda: 1,
      strMonSimbolo: "S/",
    },
  ];

  RESP_SEGUROS_DATOS: SeguroModel[] = [
    {
      strNroSol: "36475847293",
      dtmAfiliacion: "",
      strCodePers: "",
      strNomPers: "",
      intCodigo: 0,
      strNombre: "",
      intCodPlan: 0,
      strPlan: "1",
      intCuota: 0,
      bytMoneda: 1,
      strMonSimbolo: "S/",
      strCodEstado: "",
      strEstado: "",
      dtmFechaUltPago: "2022-07-11T12:25:16",
      dtmFechaProxPago: "2022-08-11T12:25:16",
      decPrima: 3.50,
      strCuotasTotal: "15/20",
    },
    {
      strNroSol: "783748374839",
      dtmAfiliacion: "",
      strCodePers: "",
      strNomPers: "",
      intCodigo: 0,
      strNombre: "",
      intCodPlan: 0,
      strPlan: "1",
      intCuota: 0,
      bytMoneda: 1,
      strMonSimbolo: "S/",
      strCodEstado: "",
      strEstado: "",
      dtmFechaUltPago: "2022-06-11T12:25:16",
      dtmFechaProxPago: "2022-07-11T12:25:16",
      decPrima: 4.50,
      strCuotasTotal: "18/20",
    },
  ];

  RESP_BENEFICIARIOS: SeguroBeneficiarioModel[] = [
    {
      strCodPers: "",
      strNombre: "Carmen Alva",
      strApePaterno: "Duran",
      strApeMaterno: "Perez",
      intTipDoi: 1,
      strDoi: "78787676",
      intTipParentesco: 1,
      strParentesco: "Hija",
      intPorcentaje: 20,
      intTipBenef: 1,
      dtmFechaNacimiento: "2015-02-11T00:00:00",
    },
    {
      strCodPers: "",
      strNombre: "Juan Carlos",
      strApePaterno: "Benavides",
      strApeMaterno: "Tenorio",
      intTipDoi: 1,
      strDoi: "55686666",
      intTipParentesco: 1,
      strParentesco: "Padre",
      intPorcentaje: 20,
      intTipBenef: 1,
      dtmFechaNacimiento: "1970-11-15T00:00:00",
    },
  ];

}
