import { ParamsListaCuentasOutModel, TipoCuentaSaldoInModel } from "@shared/models/generico/generico.models"
import { appCuentaSaldoIn, AppParamsListCuentasOut } from "../models/transferencias-model.interfaces"

export const adapterParamsgetCuentasOut = (dataIn: AppParamsListCuentasOut): ParamsListaCuentasOutModel => {
    return {
      pintCanalAtencion : dataIn.canalAtencion,
      pstrCodPers: dataIn.codPers
    }
}

export const adapterCuentasListIn = (dataIn: TipoCuentaSaldoInModel[]): appCuentaSaldoIn[] => {
    return dataIn.map(cuenta=>{
      return{
        codProd : cuenta.strCodProd,
        descripcionProducto: cuenta.strProducto,
        codigoCuenta: cuenta.strCodCta,
        descripcionSubProducto: cuenta.strSubProducto,
        bytMoneda: cuenta.bytMoneda,
        monedaSimbolo: cuenta.strMonSimbolo,
        saldoDisponible: cuenta.decSaldoDisp,
        permiteTransaccion: cuenta.blnOrigen
      }
    })
  }