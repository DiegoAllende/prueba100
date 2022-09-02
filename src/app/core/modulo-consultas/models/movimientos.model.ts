export interface Movimientos {
  operacion: string;
  fecha: string;
  desMonto: string;
  numTran: number;
  monto: number;
  moneda: number;
  simbolo: string;
  active: boolean;
  detalle: MovimientoDetalle;
}

export interface MovimientoDetalle {
  fechaOperacion: string;
  fechaProceso: string;
  horaOperacion: string;
  horaProceso: string;
  referencia: string;
}