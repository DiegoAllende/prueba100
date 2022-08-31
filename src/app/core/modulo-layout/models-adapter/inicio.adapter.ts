import { CuentaClienteModel } from "@shared/models/consultas/consultas.model";
import { ListaCuenta } from "../models/lista-cuenta.model";

export const adapterListaCuentas = (dataIn: CuentaClienteModel[]): ListaCuenta[] => {
  return dataIn.map(x => {
    return {
      codCuenta: x.strCodCta,
      icono: "billetera",
      titulo: x.strSubProducto,
      subTitulo: "Saldo  disponible",
      monto: x.strMonSimbolo + x.decSaldoDisp,
      url: "/main/consultas/ahorros",
    }
  });
}