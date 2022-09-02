import { CreditoClienteModel, CreditoModel } from "@shared/models/consultas/creditos.models";
import { CreditoDatos, CreditoDatosAll } from "../models/creditos.interface";

export const adapterCreditosCliente = (dataIn: CreditoClienteModel[]): CreditoDatosAll[] => {
  return dataIn.map((x, index) => {
    return {
      credito: {
        titulo: x.strSubProducto,
        numCuenta: x.strCodCta,
        fechaDesembolso: new Date(x.dtmFechaDesembolso).toLocaleDateString(),
        desSaldoCapital: x.strMonSimbolo + x.decSaldo,
        desMontoApertura: x.strMonSimbolo + x.decMontoApertura,
        active: index === 0 ? true : false,
      }
    }
  });
}

export const adapterCreditoDatos = (dataIn: CreditoModel): CreditoDatos => {
  return {
    titulo: dataIn.strTipoProducto,
    numCuenta: dataIn.strCodCta,
    fechaDesembolso: dataIn.dtmFechaDesembolso,
    desSaldo: dataIn.strSimbolo + dataIn.decSaldo,
    desSaldoApertura: dataIn.strSimbolo + dataIn.decMontoApertura,
    cuotasPagadas: dataIn.strCuotasTotal,
    cuotas: dataIn.iCuotas,
    diasAtraso: dataIn.intNroDiasAtraso,
    ultimaCuotaPagada: dataIn.intUltCuotaPagada,
    totalCuota: dataIn.decTotalCuota,
    montoCuota: dataIn.decMontoCuota,
    tea: dataIn.decTEA,
    califica2: dataIn.strCalifica2,
  }
}