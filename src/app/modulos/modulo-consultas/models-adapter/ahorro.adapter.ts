import { CuentaModel } from "@shared/models/consultas/consultas.model";
import { CuentaDatos } from "../models/cuenta-datos.model";

export const adapterDatosCuenta = (dataIn: CuentaModel): CuentaDatos => {
  return {
    titulo: dataIn.strSubProducto,
    numCuenta: dataIn.strCodCta,
    numCCI: dataIn.strCCI,
    saldoContable: dataIn.strSimbolo + dataIn.decSaldCnt,
    saldoDisponible: dataIn.strSimbolo + dataIn.decSaldDisp,
  }
}