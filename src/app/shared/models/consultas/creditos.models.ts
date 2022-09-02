export interface CreditoClienteModel {
  strCodProd: string;
  strProducto: string;
  strCodCta: string;
  strSubProducto: string;
  bytMoneda: number;
  strMonSimbolo: string;
  decMontoApertura: number;
  dtmFechaDesembolso: string;
  decSaldo: number;
}

export interface CreditoModel {
  strCodCta: string;
  strCuotasTotal: string;
  intNroDiasAtraso: number;
  intUltCuotaPagada: number;
  iCuotas: number;
  decTotalCuota: number;
  decSaldo: number;
  strSimbolo: string;
  bytMoneda: number;
  dtmFechaDesembolso: string;
  decMontoApertura: number;
  decMontoCuota: number;
  decTEA: number;
  strTipoProducto: string;
  strCalifica2: string;
}

export interface CreditoCuotaModel {
  strEstado: string;
  strCuotaRango: string;
  dtmFechaVencimiento: string;
  intCuota: number;
  decMontoCuota: number;
  decMontoMínimo: number;
  intNroDiasAtraso: number;
  bytMoneda: number;
  strSimbolo: string;
  strCalifica2: string;
}