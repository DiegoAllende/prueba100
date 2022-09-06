import { TraceCMACTModel } from "../generico/http.model";

export interface SelloSegAuthOutModel {
  pstrTarjeta: string;
  pintTipDOI: number;
  pstrDOI: string;
  pobjTrace?: TraceCMACTModel;
}

export interface PersonaSelloSegModel {
  strCodPers: string;
  sello: SelloSeguridadModel
}

export interface SelloSeguridadModel {
  intCodSello: number;
  strDescripcion: string;
  bytSello: string;
}

export interface AppAutenticarOutModel {
  pbytTipAut: number;
  pstrTarjeta: string;
  pstrClave: string;
  pbytTipDOI: number;
  pstrDOI: string;
  pstrIP: string;
  pobjTrace?: TraceCMACTModel;
}

export interface PersonaLoginModel {
  bytTipAut: number;
  lngIdSesionApp: number;
  blnCambiarClave6D: boolean;
  blnTarjetaDesactivada: boolean;
  objPersona: PersonaAppModel;
}

export interface PersonaAppModel {
  strCodPers: string;
  strNomCliente: string;
  strApePaterno: string;
  strApeMaterno: string;
  bytTipDOI: number;
  strDOI: string;
  strEmail: string;
  bytOperador: number;
  strOperador: string;
  strCelular: string;
  blnLstNegativa: boolean;
}