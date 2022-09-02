export interface SeguroClienteModel {
  strNroSol: string;
  strNomPer: string;
  intCodigo: number;
  strNombre: string;
  intCodPlan: number;
  strPlan: string;
  intCuota: number;
  bytMoneda: number;
  strMonSimbolo: string;
}

export interface SeguroModel {
  strNroSol: string;
  dtmAfiliacion: string;
  strCodePers: string;
  strNomPers: string;
  intCodigo: number;
  strNombre: string;
  intCodPlan: number;
  strPlan: string;
  intCuota: number;
  bytMoneda: number;
  strMonSimbolo: string;
  strCodEstado: string;
  strEstado: string;
  dtmFechaUltPago: string;
  dtmFechaProxPago: string;
  decPrima: number;
  strCuotasTotal: string;
}

export interface SeguroBeneficiarioModel {
  strCodPers: string;
  strNombre: string;
  strApePaterno: string;
  strApeMaterno: string;
  intTipDoi: number;
  strDoi: string;
  intTipParentesco: number;
  strParentesco: string;
  intPorcentaje: number;
  intTipBenef: number;
  dtmFechaNacimiento: string;
}