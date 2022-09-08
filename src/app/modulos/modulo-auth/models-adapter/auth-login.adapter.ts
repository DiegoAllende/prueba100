import { AppAutenticarOutModel, AppClaveCambiarOutModel, AppGenClaveOlvidoOutModel, AppGenClaveOutModel, AppSelloInsertarOutModel, AppValidarGenClaveOutModel, PersonaSelloSegModel, SelloSegAuthOutModel } from "@shared/models/auth/auth.models";
import { SelloSeguridadModel } from "@shared/models/generico/generico.models";
import { Constantes } from "@utils/constantes";
import { AppAuhtOut, AppClaveCambiarOut, AppGenClaveOlvidoOut, AppGenClaveOut, AppSelloInsertarOut, AppValidarGenClaveOut, selloSegAuth } from "../models/auth-login.interfaces";

export const adapterSelloAuthIn = (dataIn: PersonaSelloSegModel): selloSegAuth => {
  return {
    codigo: dataIn.sello.intCodSello,
    nombre: dataIn.sello.strDescripcion,
    byteSello: dataIn.sello.bytSello,
  }
}

export const adapterSelloListaIn = (dataIn: SelloSeguridadModel[]): selloSegAuth[] => {
  return dataIn.map(sello=>{
    return{
      codigo: sello.intCodSello,
      nombre:sello.strDescripcion,
      byteSello:sello.bytSello,
      check: false
    }
  })
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
    pstrTarjeta: dataIn?.numTarjeta ? (Constantes.PIN + dataIn.numTarjeta) : "",
    pstrClave: dataIn.clave,
    pbytTipDOI: dataIn.tipoDoi,
    pstrDOI: dataIn.numDoi,
    pstrIP: "",
  }
}

export const adapterAppGenClaveOut = (dataIn: AppValidarGenClaveOut): AppValidarGenClaveOutModel => {
  return {
    pbytTipDOI: dataIn.tipoDoi,
    pstrDOI: dataIn.numDoi,
    pbytOperador: dataIn.tipoOperador,
    pstrCelular: dataIn.numCelular,
    pstrTarjeta: Constantes.PIN + dataIn.numTarjeta,
    pstrClave: dataIn.clave,
    pstrIP: "",
  }
}

export const adapterAppClaveOut = (dataIn: AppGenClaveOut): AppGenClaveOutModel => {
  return {
    pstrCodPers: dataIn.codPers,
    plngCodValidaDatos: dataIn.codValid,
    pstrTarjeta: Constantes.PIN + dataIn.numTarjeta,
    pstrClave: dataIn.clave,
  }
}

export const adapterAppGenClaveOlvOut = (dataIn: AppGenClaveOlvidoOut): AppGenClaveOlvidoOutModel => {
  return {
    pbytTipDOI: dataIn.tipoDoi,
    pstrDOI: dataIn.numDoi,
    pstrTarjeta: dataIn.numTarjeta,
    pstrClave4D: dataIn.clave4D,
    pstrClaveNueva6D: dataIn.clave6D,
    pstrIP: "",
  }
}

export const adapterAppClaveCambiarOut = (dataIn: AppClaveCambiarOut): AppClaveCambiarOutModel => {
  return {
    pblnPrimerCambioClave6D: dataIn.primerCambioClave6D,
    pstrCodPers: dataIn.codPers,
    pstrTarjeta: dataIn.numTarjeta,
    pstrClave6D: dataIn.clave6D,
    pstrClaveNueva6D: dataIn.nuevaClave6D,
    pstrIP: dataIn.numIp,
  }
}

export const adapterAppSelloInsertarOut = (dataIn: AppSelloInsertarOut): AppSelloInsertarOutModel => {
  return {
    pintCodSello:dataIn.codSello,
    pstrCodPers:dataIn.codPers
  }
}


