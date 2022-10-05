import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export  class ConstUI {
  //TITULOS
  private static transferencias = "Transferencias";
  private static pagos = "Pagos";
  //CARDS
  private static cuentaPropia = "A cuentas propias";
  private static ingresaLosDatos = "Ingresa los datos y completa las opciones para continuar";
  //STEPS
  private static datos = "";
  private static tranferencia = "";
  private static resumen = "";
  //LABLES
  private static ctaOrigen = "Cuenta origen";
  private static ctaDestino = "Cuenta destino";
  private static moneda = "Moneda";
  private static monto = "Monto";
  private static montoTransferir = "Monto a transferir";
  //BOTONES
  private static regresar = "Regresar";
  private static continuar = "Continuar";
  private static irTransferencia = "Ir a transferencias";
  //MENSAJES
  private static transferenciaExitosa = "¡Tu transferencia se realizó con éxito!222";
  //VALIDACIONES
  private static ctaOrigenSinSaldo = "La cuenta origen no posee saldo suficiente para realizar esta transacción";

  constructor() {

  }

  public static setValues(data: any) {
    this.tranferencia = data.transferencia;
    this.datos = data.datos;
    this.resumen = data.resumen;
  }

  public static getConstOperaciones() {
    return {
      titulo: {
        transf: this.transferencias,
        pago: this.pagos,
      },
      card: {
        titTransf: this.cuentaPropia,
        subTitOperac: this.ingresaLosDatos,
      },
      steps: {
        desPaso1: this.datos,
        codPaso1: 0,
        desPaso2: this.tranferencia,
        codPaso2: 1,
        desPaso3: this.resumen,
        codPaso3: 2,
      },
      label: {
        ctaOrigen: this.ctaOrigen,
        ctaDestino: this.ctaDestino,
        moneda: this.moneda,
        monto: this.monto,
        montoTransf: this.montoTransferir,
      },
      btn: {
        regresar: this.regresar,
        continuar: this.continuar,
        irTransf: this.irTransferencia,
      },
      msj: {
        transfExito: this.transferenciaExitosa,
      },
      error: {
        sinSaldo: this.ctaOrigenSinSaldo,
      }
    };
  }


}