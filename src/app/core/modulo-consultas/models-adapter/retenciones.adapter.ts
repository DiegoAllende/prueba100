import { CuentaRetencionModel } from "@shared/models/consultas/consultas.model"
import { Retenciones } from "../models/retenciones.model"

export const adapterRetenciones = (dataIn: CuentaRetencionModel[]): Retenciones[] => {
  return dataIn.map(x => {
    return {
      operacion: x.strNomOperacion,
      fecha: x.dtmFecTran,
      referencia: x.strReferencia,
      desMonto: x.strSimbolo + x.decMonTran,
      monto: x.decMonTran,
      moneda: x.bytMoneda,
      simbolo: x.strSimbolo,
    }
  });
}