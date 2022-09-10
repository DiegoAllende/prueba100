export interface AppParamsListCuentasOut {
    codPers: string;
    canalAtencion :number
}


export interface appCuentaSaldoIn {
    codProd: string;
    descripcionProducto: string;
    codigoCuenta: string;
    descripcionSubProducto: string;
    bytMoneda: number;
    monedaSimbolo: string;
    saldoDisponible: number;
    permiteTransaccion: boolean
}