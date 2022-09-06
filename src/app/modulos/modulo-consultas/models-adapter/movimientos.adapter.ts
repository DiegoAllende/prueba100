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
      detalle: {
        fechaOperacion: x.detDetalle.dtmFecOpe,
        fechaProceso: x.detDetalle.dtmFecProc,
        horaOperacion: "25:25:25",
        horaProceso: "26:26:26",
        referencia: x.detDetalle.strReferencia,
      }
    }
  });
}