import { CreditoClienteModel, CreditoCuotaModel, CreditoModel } from "@shared/models/consultas/creditos.models";
import { ESTADOS_CUOTA } from "@utils/constantes";
import { CreditoCuota, CreditoDatos, CreditoDatosAll } from "../models/creditos.interface";

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
    fechaDesembolso: new Date(dataIn.dtmFechaDesembolso).toLocaleDateString(),
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

export const adapterCreditosCuotas = (dataIn: CreditoCuotaModel[]): [CreditoCuota[], CreditoCuota[]] => {

  const cuotasPendientes:CreditoCuota[]  = dataIn.filter(y => y.strEstado !== ESTADOS_CUOTA.CANCELADA).map((x) => {
    return {
      estado: x.strEstado,
      desEstadoLabel: obtenerEstadoLabel(x.strEstado),
      fechaVencimiento: new Date(x.dtmFechaVencimiento).toLocaleDateString(),
      desMontoCuota: x.strSimbolo + x.decMontoCuota,
      numCuota: x.intCuota,
      numDiasAtraso: x.intNroDiasAtraso
    }
  });

  const cuotasPagadas:CreditoCuota[]  = dataIn.filter(y => y.strEstado === ESTADOS_CUOTA.CANCELADA).map((x) => {
    return {
      estado: x.strEstado,
      desEstadoLabel: obtenerEstadoLabel(x.strEstado),
      fechaVencimiento: new Date(x.dtmFechaVencimiento).toLocaleDateString(),
      desMontoCuota: x.strSimbolo + x.decMontoCuota,
      numCuota: x.intCuota,
      numDiasAtraso: x.intNroDiasAtraso
    }
  });

  return [cuotasPendientes, cuotasPagadas];
}

function obtenerEstadoLabel(estado: string): string {
  let estadoLabel = "";
  switch (estado) {
    case ESTADOS_CUOTA.VIGENTE:
      estadoLabel = "Vigente";
      break;
    case ESTADOS_CUOTA.CANCELADA:
      estadoLabel = "Fecha de Pago";
      break;
    case ESTADOS_CUOTA.VENCIDA:
      estadoLabel = "Vencida";
      break;
    default:
      break;
  }

  return estadoLabel;
}