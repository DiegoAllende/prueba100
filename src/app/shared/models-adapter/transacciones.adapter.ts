import { ApptransaccionPrepararDatosOut, AppTransaccionPrepararDatosOutModel } from "@shared/models/transacciones/transacciones.models";

export const adpaterTransaccionPrepararDatosOut = (dataIn: ApptransaccionPrepararDatosOut): AppTransaccionPrepararDatosOutModel => {
      return {
        pstrCodPers: dataIn.codPersona,
        pstrCodPersRep: dataIn.codPersonaRep,
        pshrCodTipOpe: dataIn.codTipoOperacion,
        pshrCodOpeDet: dataIn.codOperacionDetalle,
        pshrCodOpe: dataIn.codOperacion,
        pstrCtaOrigen: dataIn.cuentaOrigen,
        pstrDocDestino: dataIn.cuentaDestino,
        ngIdProducto: dataIn.idProducto,
        pstrTitularDestino: dataIn.titularDestino,
        pbytMoneda: dataIn.tipoMoneda,
        pdecMonto: dataIn.monto,
      }
}

export const adpaterTransaccionPrepararDatosIn = (dataIn: any): AppTransaccionPrepararDatosOutModel => {
    return dataIn.map((x:any) => {
      return {
        valor: x.strCodeMon,
        label: x.strMoneda,
      }
    });
  }