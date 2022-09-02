export interface SeguroClienteModel {
  strCodSeguro: string;
  strCodProd: string;
  strSubProducto: string;
  strPlan: string;
}

export interface SeguroModel {
  strCodSeguro: string;
  dtmFechaUltimoPago: string;
  dtmFechaProximoPago: string;
  decPrima: number;
  strCuotasTotal: string;
  bytMoneda: number;
  strMonSimbolo: string;
}

export interface SeguroBeneficiariosModel {
  
}