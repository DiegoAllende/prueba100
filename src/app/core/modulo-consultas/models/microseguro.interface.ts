export interface SeguroDatosAll {
  seguro: SeguroCliente;
  datos?: SeguroDatos;
}

export interface SeguroCliente {
  titulo: string;
  numSeguro: string;
  plan: string;
  active: boolean;
}

export interface SeguroDatos {
  numSeguro: string;
  fechaUltimoPago: string;
  fechaProximoPago: string;
  desPrima: string;
  cuotasTotal: string;
}