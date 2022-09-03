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

