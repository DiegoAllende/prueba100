import { CuentaMovimientoModel } from "@shared/models/consultas/consultas.model";
import { Movimientos } from "../models/movimientos.model";

export const adapterMovimientos = (dataIn: CuentaMovimientoModel[]): Movimientos[] => {
  return dataIn.map(x => {
    return {
      operacion: x.strNomOperacion,
      fecha: x.dtmFecTran,
      desMonto: x.strSimbolo + x.decMonTran,
      numTran: x.intNumTran,
      monto: x.decMonTran,
      moneda: x.bytMoneda,
      simbolo: x.strSimbolo,
      active: false,
    }
  });
}