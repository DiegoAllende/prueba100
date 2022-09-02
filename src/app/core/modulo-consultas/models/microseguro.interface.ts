export interface SeguroDatosAll {
  seguro: SeguroCliente;
  datos?: SeguroDatos;
  beneficiarios?: SeguroBeneficiario[];
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

export interface SeguroBeneficiario {
  nomCompleto: string;
  nombre: string;
  apePaterno: string;
  apeMaterno: string;
  tipoDoi: number;
  numDoi: string;
  parentesco: string;
  porcentaje: number;
  desPorcentaje: string;
}