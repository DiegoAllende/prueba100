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
  token_type: string;
  access_token: string;
  refresh_token: string | null;
  phoneProvider: string;
  userProfileId: string;
  isNeedChangePassword: string;
}

export interface dataAuthModel {
  sid: string | null;
  givenname: string;
  nameidentifier: string;
  emailaddress: string;
  role: string[];
  mobilephone: string;
  serialnumber: string;
  exp: number;
}

export interface AppValidarGenClaveOutModel {
  pbytTipDOI: number;
  pstrDOI: string;
  pbytOperador: number;
  pstrCelular: string;
  pstrTarjeta: string;
  pstrClave: string;
  pstrIP: string;
  pobjTrace?: TraceCMACTModel;
}

export interface AppGenClaveOutModel {
  pstrCodPers: string;
  plngCodValidaDatos: string;
  pstrTarjeta: string;
  pstrClave: string;
  pobjTrace?: TraceCMACTModel;
}

export interface AppGenClaveOlvidoOutModel {
  pbytTipDOI: number;
  pstrDOI: string;
  pstrTarjeta: string;
  pstrClave4D: string;
  pstrClaveNueva6D: string;
  pstrIP: string;
  pobjTrace?: TraceCMACTModel;
}

export interface AppClaveCambiarOutModel {
  pblnPrimerCambioClave6D : boolean;
  pstrCodPers: string;
  pstrTarjeta: string;
  pstrClave6D: string;
  pstrClaveNueva6D: string;
  pstrIP: string;
  pobjTrace?: TraceCMACTModel;
}

export interface AppSelloInsertarOutModel{
  pstrCodPers:string;
  pintCodSello: number;
  pobjTrace?:TraceCMACTModel
}
