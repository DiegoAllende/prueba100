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
  givenname?: string;
  sid?: string;
  nameidentifier?: string;
  emailaddress?: string;
  role?: string[];
  mobilephone?: string;
  serialnumber?: string;
}