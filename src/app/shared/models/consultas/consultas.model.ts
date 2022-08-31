export interface CuentaClienteModel {
    strCodProd: string;
    strProducto: string;
    strCodCta: string;
    strSubProducto: string;
    bytMoneda: number;
    strMonSimbolo: string;
    decSaldoDisp: number;
    blnOrigen: boolean;
  }
  
  export interface CuentaModel {
    strCodCta: string;
    strCodProd: string;
    strSubProducto: string;
    strCCI: string;
    dtmFecVencimiento: string;
    strEstadoCta: string;
    decSaldCnt: number;
    decSaldDisp: number;
    bytMoneda: number;
    strSimbolo: string;
  }
  
  export interface CuentaMovimientoModel {
    intNumTran: number;
    dtmFecTran: string;
    strNomOperacion: string;
    decMonTran: number;
    bytMoneda: number;
    strSimbolo: string;
  }
  
  export interface CuentaRetencionModel {
    dtmFecTran: string;
    strNomOperacion: string;
    decMonTran: number;
    bytMoneda: number;
    strSimbolo: string;
    strReferencia: string;
  }
  
  export interface EstadoCuentaModel {
    intNumTran: number;
    dtmFecOpe: string;
    dtmFecProc: string;
    decMontoOri: number;
    decITFOri: number;
    bytMonedaOri: number;
    strSimboloOri: string;
    decMontoDest: number;
    decComisionDest: number;
    bytMonedaDest: number;
    strSimboloDest: string;
    strNumDocDest: string;
    decTipCambio: number;
    strReferencia: string;
    strCodAge: string;
    strNomOperacion: string;
    decSaldo: string;
  }