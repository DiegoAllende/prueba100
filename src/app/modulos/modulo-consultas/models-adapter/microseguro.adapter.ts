import { SeguroBeneficiarioModel, SeguroClienteModel, SeguroModel } from "@shared/models/consultas/microseguro.models";
import { SeguroBeneficiario, SeguroCliente, SeguroDatos, SeguroDatosAll } from "../models/microseguro.interface";

export const adapterSeguroCliente = (dataIn: SeguroClienteModel[]): SeguroDatosAll[] => {
  return dataIn.map((x, index) => {
    return {
      seguro: {
        titulo: x.strNombre,
        numSeguro: x.strNroSol,
        plan: x.strPlan,
        active: index === 0 ? true : false,
      }
    }
  });
}

export const adapterSeguroDatos = (dataIn: SeguroModel): SeguroDatos => {
  return {
    numSeguro: dataIn.strNroSol,
    fechaProximoPago: new Date(dataIn.dtmFechaProxPago).toLocaleDateString(),
    fechaUltimoPago: new Date(dataIn.dtmFechaUltPago).toLocaleDateString(),
    desPrima: dataIn.strMonSimbolo + dataIn.decPrima,
    cuotasTotal: dataIn.strCuotasTotal,
  }
}

export const adapterSeguroBeneficiario = (dataIn: SeguroBeneficiarioModel[]): SeguroBeneficiario[] => {
  return dataIn.map((x) => {
    return {
      nombre: x.strNombre,
      apePaterno: x.strApePaterno,
      apeMaterno: x.strApeMaterno,
      nomCompleto: x.strNombre + " " + x.strApePaterno + " " + x.strApeMaterno,
      tipoDoi: x.intTipDoi,
      numDoi: x.strDoi,
      porcentaje: x.intPorcentaje,
      desPorcentaje: x.intPorcentaje + "%",
      parentesco: x.strParentesco,
    }
  });
}
