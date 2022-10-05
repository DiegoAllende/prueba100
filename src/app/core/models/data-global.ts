export interface DataGlobal {
  readonly keyPublic: string;
  pin: {
    readonly val: string;
    readonly valmask: string;
  },
  tipoAuth: {
    readonly conTarjeta: number;
    readonly sinTarjeta: number;
  }
}