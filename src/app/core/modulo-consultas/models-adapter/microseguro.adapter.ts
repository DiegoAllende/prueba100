import { SeguroClienteModel, SeguroModel } from "@shared/models/consultas/microseguro.models";
import { SeguroCliente, SeguroDatos, SeguroDatosAll } from "../models/microseguro.interface";

export const adapterSeguroCliente = (dataIn: SeguroClienteModel[]): SeguroDatosAll[] => {
  return dataIn.map((x, index) => {
    return {
      seguro: {
        titulo: x.strSubProducto,
        numSeguro: x.strCodSeguro,
        plan: x.strPlan,
        active: index === 0 ? true : false,
      }
    }
  });
}

export const adapterSeguroDatos = (dataIn: SeguroModel): SeguroDatos => {
  return {
    numSeguro: dataIn.strCodSeguro,
    fechaProximoPago: new Date(dataIn.dtmFechaProximoPago).toLocaleDateString(),
    fechaUltimoPago: new Date(dataIn.dtmFechaUltimoPago).toLocaleDateString(),
    desPrima: dataIn.strMonSimbolo + dataIn.decPrima,
    cuotasTotal: dataIn.strCuotasTotal,
  }
}
