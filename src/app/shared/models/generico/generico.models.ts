import { TraceCMACTModel } from "./http.model";

export interface ComboModel {
  label: string;
  valor: string | number | boolean;
}

export interface TipoDoiModel {
  bytTipoPers: number;
  bytTipoDOI: number;
  strDOI: string;
  strAbreviatura: string;
  blnNumCarFijo: boolean;
  bytNumCarMin: number;
  bytNumCarMax: number;
}

export interface TipoOperadorModel {
  bytCodOperador: number;
  strOperador: string;
}

export interface SelloSeguridadModel {
  intCodSello: number;
  strDescripcion: string;
  bytSello: any;
}

export interface TipoCuentaSaldoInModel{
  strCodProd: string;
  strProducto: string;
  strCodCta: string;
  strSubProducto: string;
  bytMoneda: number;
  strMonSimbolo: string;
  decSaldoDisp: number;
  blnOrigen: boolean
}

export interface ParamsListaCuentasOutModel{
  pstrCodPers:string;
  pintCanalAtencion : number;
  pobjTrace?:TraceCMACTModel;
}

export  interface TipoMonedaInModel{
  strCodeMon: number;
  strMoneda: string;
}





