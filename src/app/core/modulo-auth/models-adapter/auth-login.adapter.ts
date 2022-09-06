import { AppAutenticarOutModel, PersonaSelloSegModel, SelloSegAuthOutModel } from "@shared/models/auth/auth.models";
import { Constantes } from "@utils/constantes";
import { AppAuhtOut, selloSegAuth } from "../models/auth-login.interfaces";

export const adapterSelloAuthIn = (dataIn: PersonaSelloSegModel): selloSegAuth => {
  return {
    codigo: dataIn.sello.intCodSello,
    nombre: dataIn.sello.strDescripcion,
    byteSello: dataIn.sello.bytSello,
  }
}

export const adapterSelloAuthOut = (dataIn: AppAuhtOut): SelloSegAuthOutModel => {
  return {
    pstrTarjeta: Constantes.PIN + dataIn.numTarjeta,
    pintTipDOI: dataIn.tipoDoi,
    pstrDOI: dataIn.numDoi,
  }
}

export const adpaterAppAuth = (dataIn: AppAuhtOut): AppAuhtOut => {
  return {
    tipoAuth: dataIn.tipoAuth,
    tipoDoi: dataIn.tipoDoi,
    numDoi: dataIn.numDoi,
    numTarjeta: Constantes.PIN + dataIn.numTarjeta,
    clave: dataIn.clave || "",
    numIp: dataIn.numIp || "",
  }
}

export const adapterAppAutenticarOut = (dataIn: AppAuhtOut): AppAutenticarOutModel => {
  return {
    pbytTipAut: dataIn.tipoAuth,
    pstrTarjeta: dataIn.numTarjeta,
    pstrClave: dataIn.clave,
    pbytTipDOI: dataIn.tipoDoi,
    pstrDOI: dataIn.numDoi,
    pstrIP: "",
  }
}
