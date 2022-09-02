export interface CreditoDatosAll {
  credito: CreditoCliente;
  datos?: CreditoDatos;
}

export interface CreditoCliente {
  titulo: string;
  numCuenta: string;
  fechaDesembolso: string
  desSaldoCapital: string;
  desMontoApertura: string;
  active: boolean;
}

export interface CreditoDatos {
  titulo: string;
  numCuenta: string;
  fechaDesembolso: string;
  desSaldo: string;
  desSaldoApertura: string;
  cuotasPagadas: string;
  cuotas: number;
  diasAtraso: number;
  ultimaCuotaPagada: number;
  totalCuota: number;
  montoCuota: number;
  tea: number;
  califica2: string;
}